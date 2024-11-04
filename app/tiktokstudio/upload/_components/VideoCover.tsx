"use client";

// React
import { useEffect } from "react";

// Next
import Image from "next/image";
import { generateTimelineFrames } from "@/app/lib/aws/lambda/functions";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

export default function VideoCover() {
  const { s3_video_url } = useVideoUploadStore();

  useEffect(() => {
    if (s3_video_url) {
      generateTimelineFrames(s3_video_url);
    }
  }, [s3_video_url]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-black">Cover</label>
      <div className="">
        <div className="bg-gray-200 w-40 h-52 grid place-content-center rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 border border-gray-300">
          (
          <Image
            className="opacity-30"
            src="/ImagePlaceholder.svg"
            width={48}
            height={48}
            alt=""
          />
          )
        </div>
      </div>
    </div>
  );
}
