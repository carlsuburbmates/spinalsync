// Local analytics for module usage and completion rates

export type AnalyticsEvent = {
  type: string;
  moduleSlug?: string;
  detail?: any;
  timestamp: number;
};

const STORAGE_KEY = "spinalsync_analytics";

export function logAnalyticsEvent(event: AnalyticsEvent) {
  const events: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  events.push({ ...event, timestamp: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function getAnalyticsEvents(): AnalyticsEvent[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function getModuleCompletionRates(): Record<string, number> {
  const events = getAnalyticsEvents();
  const completions: Record<string, number> = {};
  events.forEach(e => {
    if (e.type === "module_completed" && e.moduleSlug) {
      completions[e.moduleSlug] = (completions[e.moduleSlug] || 0) + 1;
    }
  });
  return completions;
}
