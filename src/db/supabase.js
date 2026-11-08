import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL || "https://lgwybrzbirrizusmjnal.supabase.co";
const supabaseKey = import.meta.env.SUPABASE_KEY || process.env.SUPABASE_KEY || "sb_publishable_YNDhCrxngIgBJs7EhKJyBw_yh6YaIdv";

export const supabase = createClient(supabaseUrl, supabaseKey);

