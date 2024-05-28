import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cibmbmqspsdtpcpnmavo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYm1ibXFzcHNkdHBjcG5tYXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MjUzNzYsImV4cCI6MjAzMTMwMTM3Nn0.qP-vz5H-Hvv3T2i6PpnOAOKCBx0Z1XipUyzEYiuOQbo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
