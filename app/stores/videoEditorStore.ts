import { create } from "zustand";

interface VideoEditor {
  isVideoModalToggled: boolean;
  timelineZoomLevel: 7 | 14 | 21;
  setTimelineZoomLevel: (timelineZoomLevel: 7 | 14 | 21) => void;
  toggleVideoModal: () => void;
}

export const useVideoEditorStore = create<VideoEditor>((set) => ({
  isVideoModalToggled: false,
  timelineZoomLevel: 14,
  setTimelineZoomLevel: (timelineZoomLevel) =>
    set(() => ({ timelineZoomLevel })),
  toggleVideoModal: () =>
    set((state) => ({ isVideoModalToggled: !state.isVideoModalToggled })),
}));
