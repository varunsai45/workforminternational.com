-- Workform International website enquiry storage.
-- Run this in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text,
  email text not null,
  phone text not null,
  industry text,
  project_type text,
  project_location text,
  project_area text,
  budget_range text,
  expected_start_date date,
  requirements text,
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- Public visitors may submit enquiries but cannot read, update or delete them.
drop policy if exists "Public can submit enquiries" on public.enquiries;
create policy "Public can submit enquiries"
on public.enquiries for insert
to anon, authenticated
with check (
  length(trim(full_name)) > 0
  and length(trim(email)) > 3
  and length(trim(phone)) > 5
);

-- Do not create a public SELECT policy.
-- View enquiries only from the Supabase dashboard or a separately secured admin app.
