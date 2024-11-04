// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

export default function WebView() {
  const { blob_video_url } = useVideoUploadStore();

  return (
    <div className="w-80">
      <video controls src={blob_video_url} />
    </div>
  );
}
