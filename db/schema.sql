create table if not exists portfolio_state (
  id text primary key check (id = 'primary'),
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists portfolio_media (
  id text primary key,
  content_type text not null,
  data bytea not null,
  created_at timestamptz not null default now()
);
