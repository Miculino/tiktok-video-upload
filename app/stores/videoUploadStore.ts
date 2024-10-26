import { create } from "zustand";

import { UppyFile, Meta } from "@uppy/core";

type DefaultUppyFile = UppyFile<Meta, Record<string, never>> | undefined;

interface VideoUploadState {
  video_file: DefaultUppyFile;
  addVideoFile: (video_file: DefaultUppyFile) => void;
}

export const useVideoUploadStore = create<VideoUploadState>((set) => ({
  video_file: undefined,
  addVideoFile: (video_file: DefaultUppyFile) => set({ video_file }),
}));
