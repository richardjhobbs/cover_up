-- Schema for Cover Up

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  username text unique not null,
  created_at timestamptz default now()
);

create table if not exists daily_themes (
  id bigint generated always as identity primary key,
  date date unique not null,
  theme_name text not null,
  theme_type text not null,
  created_at timestamptz default now()
);

create table if not exists albums (
  id bigint generated always as identity primary key,
  source text not null default 'musicbrainz',
  mbid text unique,
  artist text not null,
  title text not null,
  year int,
  country text,
  cover_url text,
  created_at timestamptz default now()
);

create table if not exists daily_albums (
  date date not null references daily_themes(date) on delete cascade,
  slot smallint not null check (slot between 1 and 5),
  album_id bigint not null references albums(id) on delete restrict,
  difficulty smallint not null check (difficulty between 1 and 5),
  obscuration jsonb not null default '{}'::jsonb,
  primary key (date, slot)
);

create table if not exists plays (
  id bigint generated always as identity primary key,
  user_id uuid not null references profiles(id) on delete cascade,
  date date not null,
  total_score int not null,
  created_at timestamptz default now(),
  unique (user_id, date)
);

create table if not exists play_turns (
  play_id bigint not null references plays(id) on delete cascade,
  slot smallint not null check (slot between 1 and 5),
  album_id bigint not null references albums(id) on delete restrict,
  guess_text text,
  result_type text not null check (result_type in ('correct', 'accepted', 'incorrect', 'no_guess')),
  time_ms int not null,
  score int not null,
  primary key (play_id, slot)
);

create index if not exists plays_date_total_score_idx on plays (date, total_score desc);
create index if not exists plays_date_created_at_idx on plays (date, created_at asc);
create index if not exists play_turns_album_id_idx on play_turns (album_id);
create index if not exists albums_mbid_idx on albums (mbid);
create index if not exists daily_albums_album_id_idx on daily_albums (album_id);

alter table profiles enable row level security;
alter table daily_themes enable row level security;
alter table albums enable row level security;
alter table daily_albums enable row level security;
alter table plays enable row level security;
alter table play_turns enable row level security;

create policy "profiles_select_authenticated" on profiles
  for select
  using (auth.role() = 'authenticated');

create policy "profiles_insert_own" on profiles
  for insert
  with check (auth.uid() = id);

create policy "profiles_update_own" on profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "daily_themes_select_all" on daily_themes
  for select
  using (true);

create policy "albums_select_all" on albums
  for select
  using (true);

create policy "daily_albums_select_all" on daily_albums
  for select
  using (true);

create policy "plays_select_own" on plays
  for select
  using (auth.uid() = user_id);

create policy "plays_insert_own" on plays
  for insert
  with check (auth.uid() = user_id);

create policy "play_turns_select_own" on play_turns
  for select
  using (
    exists (
      select 1
      from plays
      where plays.id = play_turns.play_id
        and plays.user_id = auth.uid()
    )
  );

create policy "play_turns_insert_own" on play_turns
  for insert
  with check (
    exists (
      select 1
      from plays
      where plays.id = play_turns.play_id
        and plays.user_id = auth.uid()
    )
  );
