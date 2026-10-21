-- =========================================================================
-- ENTRENAPRO - SISTEMA DE RUTINAS Y GESTIÓN DE ENTRENAMIENTO
-- Copia y pega esto en el SQL Editor de tu proyecto de Supabase y dale a RUN.
-- =========================================================================

-- 1. Tabla de datos sincronizados (Key-Value reactivo en JSONB para Rutinas, Alumnos y Logs)
create table if not exists public.entrenapro_data (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by text default 'anon'
);

-- 2. Habilitar Seguridad por Filas (Row Level Security)
alter table public.entrenapro_data enable row level security;

-- 3. Crear política de acceso público (para que Coach y Alumnos puedan leer y escribir sin fricción inicial)
drop policy if exists "Permitir lectura y escritura en entrenapro" on public.entrenapro_data;
create policy "Permitir lectura y escritura en entrenapro"
  on public.entrenapro_data
  for all
  using (true)
  with check (true);

-- 4. Habilitar Supabase Realtime (para que los cambios de series o rutinas aparezcan en vivo)
alter publication supabase_realtime add table public.entrenapro_data;

-- =========================================================================
-- ¡Listo! Tu base de datos de EntrenaPro ya está lista para sincronizar en tiempo real.
-- =========================================================================
