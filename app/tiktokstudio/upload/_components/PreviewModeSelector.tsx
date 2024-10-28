import PreviewModeToggle from "./PreviewModeToggle";
import VideoPreview from "./VideoPreview";

export default function PreviewModeSelector() {
  return (
    <div className="bg-red-100 text-black">
      <PreviewModeToggle />
      <VideoPreview />
    </div>
  );
}
