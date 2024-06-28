import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!url || !key) {
    throw new Error('Missing Supabase URL or Key in environment variables');
}

export const supabase = createClient(url, key)
