// Components

import Button from "../../_components/Button";
import PreviewModeToggle from "./PreviewModeToggle";
import VideoPreview from "./VideoPreview";

// Zustand
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// Icons
import ScissorsIcon from "@/app/icons/ScissorsIcon";

export default function PreviewModeSelector() {
  const { toggleVideoModal } = useVideoEditorStore();

  const handleVideoModalToggle = () => {
    toggleVideoModal();
  };

  return (
    <div className="p-6 text-black flex flex-col gap-4">
      <PreviewModeToggle />
      <VideoPreview />
      <Button
        onClick={handleVideoModalToggle}
        intent="secondary"
        className="max-w-fit mx-auto py-2 px-4"
      >
        <ScissorsIcon height={20} width={20} />
        <span>Edit Video</span>
      </Button>
    </div>
  );
}
