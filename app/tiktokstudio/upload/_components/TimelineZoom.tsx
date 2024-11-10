// React
import { FormEvent } from "react";

// Icons
import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";

export default function TimelineZoom() {
  const handleTimelineZoom = (e: FormEvent<HTMLInputElement>) => {
    // Make a new request to generate frames based on the updated frame count
    const frameCount = e.currentTarget.value;

    console.log(frameCount);
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
