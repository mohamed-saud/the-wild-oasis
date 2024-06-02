import { createClient } from "@supabase/supabase-js";
import { supabaseUrl as url, supabaseKey } from "../../env.json";
export const supabaseUrl = url;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
