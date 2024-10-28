import { create } from "zustand";

interface PreviewModeState {
  previewMode: "feed" | "profile" | "web";
  switchPreviewMode: (selectedPreviewMode: "feed" | "profile" | "web") => void;
}

export const usePreviewModeStore = create<PreviewModeState>((set) => ({
  previewMode: "feed",
  switchPreviewMode: (selectedPreviewMode) =>
    set({ previewMode: selectedPreviewMode }),
}));
