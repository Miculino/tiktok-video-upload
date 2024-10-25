import { create } from "zustand";

interface VideoUploadState {
  video_file: File[];
}

export const useVideoUploadStore = create<VideoUploadState>((set) => ({
  video_file: [],
}));
