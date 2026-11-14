import 'dotenv/config';
import { saveStore, seedData } from '../server/store.js';

await saveStore(seedData);
console.log('Seeded Neon with the portfolio data from server/initialData.ts.');
process.exit(0);
