import { create } from "zustand";

interface ProgressState {
  progress: Record<string, any>;
  setProgress: (moduleSlug: string, progress: any) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: {},
  setProgress: (moduleSlug, progress) =>
    set((state) => ({
      progress: { ...state.progress, [moduleSlug]: progress },
    })),
}));
