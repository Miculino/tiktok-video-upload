import { create } from "zustand";

interface VideoEditor {
  isVideoModalToggled: boolean;
  toggleVideoModal: () => void;
}

export const useVideoEditorStore = create<VideoEditor>((set) => ({
  isVideoModalToggled: false,
  toggleVideoModal: () =>
    set((state) => ({ isVideoModalToggled: !state.isVideoModalToggled })),
}));
