import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const getSupabaseConfig = () => {
  const envUrl = import.meta.env.VITE_SUPABASE_URL;
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const storedUrl = typeof window !== 'undefined' ? localStorage.getItem('entrenapro_supabase_url') : null;
  const storedKey = typeof window !== 'undefined' ? localStorage.getItem('entrenapro_supabase_anon_key') : null;

  const url = (storedUrl || envUrl || '').trim();
  const anonKey = (storedKey || envKey || '').trim();

  const isConfigured = Boolean(
    url &&
    url.startsWith('https://') &&
    url.includes('supabase.co') &&
    anonKey &&
    anonKey.length > 20
  );

  return { url, anonKey, isConfigured };
};

export const saveSupabaseConfig = (url: string, key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('entrenapro_supabase_url', url.trim());
    localStorage.setItem('entrenapro_supabase_anon_key', key.trim());
    clientInstance = null; // Reset to create new with updated credentials
  }
};

let clientInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  const { url, anonKey, isConfigured } = getSupabaseConfig();
  if (!isConfigured) {
    return null;
  }

  if (!clientInstance) {
    try {
      clientInstance = createClient(url, anonKey, {
        auth: {
          persistSession: true,
        },
        realtime: {
          params: {
            eventsPerSecond: 10,
          },
        },
      });
    } catch (err) {
      console.error('Error al inicializar cliente Supabase:', err);
      return null;
    }
  }

  return clientInstance;
};
