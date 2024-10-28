// Components
import PreviewModeToggle from "./PreviewModeToggle";
import VideoPreview from "./VideoPreview";

export default function PreviewModeSelector() {
  return (
    <div className="p-6 text-black flex flex-col gap-4">
      <PreviewModeToggle />
      <VideoPreview />
    </div>
  );
}
