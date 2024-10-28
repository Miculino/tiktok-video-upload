// React
import { useRef, useEffect } from "react";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

export default function WebView() {
  const { video_file } = useVideoUploadStore();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video_file) {
      const videoURL = URL.createObjectURL(video_file.data);

      if (videoRef && videoRef.current) {
        videoRef.current.src = videoURL;
      }
    }
  }, [video_file]);

  return (
    <div className="w-80">
      <video controls ref={videoRef} />
    </div>
  );
}
