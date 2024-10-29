// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

export default function WebView() {
  const { video_url } = useVideoUploadStore();

  return (
    <div className="w-80">
      <video controls src={video_url} />
    </div>
  );
}
