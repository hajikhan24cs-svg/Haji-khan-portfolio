import dotenv from 'dotenv';
import crypto from 'crypto';
import pg from 'pg';
import { PortfolioData } from '../src/types.js';
import { initialPortfolioData } from './initialData.js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const AUTH_SECRET = process.env.AUTH_SECRET;
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

if (!DATABASE_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD || !AUTH_SECRET) {
  throw new Error('Missing configuration. Set DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD, and AUTH_SECRET.');
}

const pool = new pg.Pool({ connectionString: DATABASE_URL, max: 5 });

function withoutLegacyPassword(data: PortfolioData): PortfolioData {
  const { adminPassword: _adminPassword, ...profile } = data.profile;
  return { ...data, profile };
}

// Older databases created portfolio_media without a file name column; add it once per instance.
let mediaSchemaReady: Promise<unknown> | null = null;
function ensureMediaSchema() {
  mediaSchemaReady ??= pool
    .query('alter table portfolio_media add column if not exists file_name text')
    .catch((error) => {
      mediaSchemaReady = null;
      throw error;
    });
  return mediaSchemaReady;
}

export async function initStore(): Promise<PortfolioData> {
  await ensureMediaSchema();
  const { rows } = await pool.query('select data from portfolio_state where id = $1', ['primary']);
  if (!rows[0]) throw new Error('No portfolio data found. Run `npm run db:seed` first.');
  // The media library is read from the portfolio_media table itself, so uploads can never be lost
  // by a concurrent save of the portfolio document.
  const media = await pool.query(
    'select id, file_name, content_type, created_at from portfolio_media order by created_at desc'
  );
  const data = withoutLegacyPassword(rows[0].data as PortfolioData);
  data.mediaAssets = media.rows.map((row) => ({
    id: row.id,
    fileName: row.file_name || row.id,
    fileUrl: `/api/media/${row.id}`,
    fileType: row.content_type,
    uploadedAt: new Date(row.created_at).toISOString()
  }));
  return data;
}

export async function saveStore(data: PortfolioData): Promise<void> {
  await pool.query(
    `insert into portfolio_state (id, data, updated_at) values ('primary', $1, now())
     on conflict (id) do update set data = excluded.data, updated_at = now()`,
    [JSON.stringify({ ...withoutLegacyPassword(data), mediaAssets: [] })]
  );
}

// ---------- Admin auth (single admin, signed token) ----------
function safeEqual(a: string, b: string): boolean {
  const ha = crypto.createHash('sha256').update(a).digest();
  const hb = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', AUTH_SECRET!).update(payload).digest('base64url');
}

export async function loginAdmin(email: string, password: string): Promise<string> {
  if (!safeEqual(email.trim().toLowerCase(), ADMIN_EMAIL!) || !safeEqual(password, ADMIN_PASSWORD!)) {
    throw new Error('Incorrect email or password.');
  }
  const payload = Buffer.from(JSON.stringify({ sub: ADMIN_EMAIL, exp: Date.now() + TOKEN_TTL_MS })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;
  try {
    const { sub, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return sub === ADMIN_EMAIL && typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

// ---------- Media (stored in Postgres, served from /api/media/:id) ----------
export async function uploadMedia(fileName: string, fileUrl: string, fileType: string): Promise<string> {
  if (!fileUrl.startsWith('data:')) return fileUrl;

  const match = fileUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) throw new Error('Invalid media upload format.');

  const id = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  await ensureMediaSchema();
  await pool.query('insert into portfolio_media (id, file_name, content_type, data) values ($1, $2, $3, $4)', [
    id,
    fileName,
    fileType || match[1],
    Buffer.from(match[2], 'base64')
  ]);
  return `/api/media/${id}`;
}

export async function getMedia(id: string): Promise<{ contentType: string; data: Buffer } | null> {
  const { rows } = await pool.query('select content_type, data from portfolio_media where id = $1', [id]);
  return rows[0] ? { contentType: rows[0].content_type, data: rows[0].data } : null;
}

export async function deleteStoredMedia(fileUrl: string): Promise<void> {
  const marker = '/api/media/';
  const index = fileUrl.indexOf(marker);
  if (index === -1) return;
  await pool.query('delete from portfolio_media where id = $1', [decodeURIComponent(fileUrl.slice(index + marker.length))]);
}

export const seedData = withoutLegacyPassword(initialPortfolioData);