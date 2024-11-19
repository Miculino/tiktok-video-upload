import { create } from "zustand";

interface VideoEditor {
  isVideoModalToggled: boolean;
  timelineZoomLevel: 7 | 14 | 21;
  cursorPosition: number;
  setTimelineZoomLevel: (timelineZoomLevel: 7 | 14 | 21) => void;
  toggleVideoModal: () => void;
  setCursorPosition: (cursorPosition: number) => void;
}

export const useVideoEditorStore = create<VideoEditor>((set) => ({
  isVideoModalToggled: false,
  timelineZoomLevel: 14,
  cursorPosition: 0,
  setTimelineZoomLevel: (timelineZoomLevel) =>
    set(() => ({ timelineZoomLevel })),
  toggleVideoModal: () =>
    set((state) => ({ isVideoModalToggled: !state.isVideoModalToggled })),
  setCursorPosition: (cursorPosition) => set(() => ({ cursorPosition })),
}));
