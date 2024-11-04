import { create } from "zustand";

import { UppyFile, Meta } from "@uppy/core";

type DefaultUppyFile = UppyFile<Meta, Record<string, never>> | undefined;

interface VideoUploadState {
  blob_video_url: string | undefined;
  video_file: DefaultUppyFile;
  s3_video_url: string | undefined;
  addVideoFile: (video_file: DefaultUppyFile) => void;
  addS3VideoURL: (s3_video_url: string) => void;
  resetVideoFile: () => void;
}

export const useVideoUploadStore = create<VideoUploadState>((set) => ({
  blob_video_url: undefined,
  video_file: undefined,
  s3_video_url: undefined,
  addVideoFile: (video_file: DefaultUppyFile) =>
    set({
      video_file,
      blob_video_url: video_file
        ? URL.createObjectURL(video_file.data)
        : undefined,
    }),
  addS3VideoURL: (s3_video_url) => set({ s3_video_url }),
  resetVideoFile: () => set({ video_file: undefined }),
}));
