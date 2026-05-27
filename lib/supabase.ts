import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nztjtdznabkktbealugg.supabase.co";
const supabaseKey = "sb_publishable_zUHwWVV1LlwGwaDnk4ZgFQ_MtCohpp_";

export const supabase = createClient(supabaseUrl, supabaseKey);
