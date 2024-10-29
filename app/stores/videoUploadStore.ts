import { create } from "zustand";

import { UppyFile, Meta } from "@uppy/core";

type DefaultUppyFile = UppyFile<Meta, Record<string, never>> | undefined;

interface VideoUploadState {
  video_url: string | undefined;
  video_file: DefaultUppyFile;
  addVideoFile: (video_file: DefaultUppyFile) => void;
  resetVideoFile: () => void;
}

export const useVideoUploadStore = create<VideoUploadState>((set) => ({
  video_url: undefined,
  video_file: undefined,
  addVideoFile: (video_file: DefaultUppyFile) =>
    set({
      video_file,
      video_url: video_file ? URL.createObjectURL(video_file.data) : undefined,
    }),
  resetVideoFile: () => set({ video_file: undefined }),
}));
