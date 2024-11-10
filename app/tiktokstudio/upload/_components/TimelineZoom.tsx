// React
import { FormEvent } from "react";

// Zustand
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// Icons
import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";

export default function TimelineZoom() {
  const { setTimelineZoomLevel } = useVideoEditorStore();

  const handleTimelineZoom = (e: FormEvent<HTMLInputElement>) => {
    // Default timeline zoom is always 14
    const timelineZoomLevel = Number(e.currentTarget.value) ?? 14;

    // Update zoomLevel dependency to trigger a new request to generate frames based on the updated frame count
    if (timelineZoomLevel) {
      setTimelineZoomLevel(timelineZoomLevel as 7 | 14 | 21);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <MinusIcon />
      <div className="w-32 h-4">
        <input
          onInput={handleTimelineZoom}
          type="range"
          min={7}
          max={21}
          step={7}
        />
      </div>
      <PlusIcon />
    </div>
  );
}
