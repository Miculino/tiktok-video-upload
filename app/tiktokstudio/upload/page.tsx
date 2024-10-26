"use client";

// Components
import CapcutAd from "./_components/CapcutAd";
import UploadStart from "./_components/UploadStart";
import VideoPostForm from "./_components/VideoPostForm";
import VideoUploadProgress from "./_components/VideoUploadProgress";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

export default function Upload() {
  const { video_file } = useVideoUploadStore();

  return (
    <section className="px-20 py-6 h-full">
      <div className="flex flex-col gap-6">
        {video_file ? (
          <>
            <VideoUploadProgress />
            <VideoPostForm />
          </>
        ) : (
          <>
            <UploadStart />
            <CapcutAd />
          </>
        )}
      </div>
    </section>
  );
}
