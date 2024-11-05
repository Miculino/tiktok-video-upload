"use client";

// Components
import CapcutAd from "./_components/CapcutAd";
import PreviewModeSelector from "./_components/PreviewModeSelector";
import UploadStart from "./_components/UploadStart";
import VideoPostForm from "./_components/VideoPostForm";
import VideoUploadProgress from "./_components/VideoUploadProgress";
import Card from "../_components/Card";
import VideoEditModal from "./_components/VideoEditModal";

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
            <Card className="flex bg-white px-0 py-0">
              <VideoPostForm />
              <PreviewModeSelector />
            </Card>
          </>
        ) : (
          <>
            <UploadStart />
            <CapcutAd />
          </>
        )}
      </div>
      <VideoEditModal />
    </section>
  );
}
