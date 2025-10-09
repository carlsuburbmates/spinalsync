export function saveProgressLocal(moduleSlug: string, progress: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem(`progress_${moduleSlug}`, JSON.stringify(progress));
  }
}

export function getProgressLocal(moduleSlug: string) {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(`progress_${moduleSlug}`);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
