// Zustand
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// Utils
import formatTime from "@/app/utils/formatTime";

export default function TimelineRuler() {
  const { timelineZoomLevel } = useVideoEditorStore();

  // This is probably an arbitrary range of values (7,14,21) they picked for the original TikTok studio video editor modal
  const incrementFactor = timelineZoomLevel / 7;

  return (
    <div
      style={{
        width: `${896 * incrementFactor}px`,
      }}
      className="absolute top-0 flex"
    >
      {Array.from({ length: timelineZoomLevel }).map((_, index) => {
        const timeInSeconds = (25 / timelineZoomLevel) * index;
        const formattedTime = formatTime(timeInSeconds);

        return (
          <div
            key={index}
            style={{
              width: `${896 * incrementFactor}px`,
            }}
            className="bg-timeline-divider bg-repeat-x bg-[position:-1px_top] bg-[length:20%_6px] p-0"
          >
            <div className="text-[10px] text-gray-300 shadow-line px-1 pt-3">
              {formattedTime}
            </div>
          </div>
        );
      })}
    </div>
  );
}
