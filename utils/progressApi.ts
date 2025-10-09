import { supabase } from "./supabaseClient";

export async function saveProgress(userId: string, moduleSlug: string, progress: any) {
  return supabase.from("progress").upsert({ user_id: userId, module_slug: moduleSlug, progress });
}

export async function getProgress(userId: string, moduleSlug: string) {
  const { data } = await supabase.from("progress").select("progress").eq("user_id", userId).eq("module_slug", moduleSlug).single();
  return data?.progress || null;
}
