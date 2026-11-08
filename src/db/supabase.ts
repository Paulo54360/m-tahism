import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.SUPABASE_URL) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ||
  '';

const supabaseKey =
  (typeof import.meta !== 'undefined' && import.meta.env?.SUPABASE_KEY) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_KEY) ||
  '';

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    '[Supabase] Variables SUPABASE_URL ou SUPABASE_KEY manquantes dans l’environnement.'
  );
}

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

