// React
import { useEffect, useRef } from "react";

// Next
import Image from "next/image";

// Components
import VerticalPlayhead from "./vertical-playhead/VerticalPlayhead";
import TimelineRuler from "./TimelineRuler";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// Hooks
import useFetchStreamingFrames from "@/app/hooks/useFetchStreamingFrames";

// Icons
import OriginalSoundIcon from "@/app/icons/OriginalSoundIcon";

export default function Timeline() {
  const { s3_video_url } = useVideoUploadStore();

  const { isVideoModalToggled, timelineZoomLevel, cursorPosition } =
    useVideoEditorStore();

  const timelineRef = useRef<HTMLDivElement>(null);

  const videoTimelineFrames = useFetchStreamingFrames(
    s3_video_url,
    isVideoModalToggled,
    timelineZoomLevel
  );

  const incrementFactor = timelineZoomLevel / 7;

  useEffect(() => {
    if (timelineRef && timelineRef.current) {
      const { clientWidth: timelineClientWidth } = timelineRef.current;

      const cursorRelativePosition =
        cursorPosition - timelineRef.current.scrollLeft;

      const distanceFromLeftEdge = cursorRelativePosition;
      const distanceFromRightEdge =
        timelineClientWidth - cursorRelativePosition - 48;

      if (distanceFromRightEdge <= 10) {
        timelineRef.current.scrollLeft += 100;
      }

      if (distanceFromLeftEdge <= -10) {
        timelineRef.current.scrollLeft -= 100;
      }
    }
  }, [cursorPosition]);

  return (
    <div
      ref={timelineRef}
      className="overflow-x-scroll relative p-6 scrollbar-hide select-none scroll-smooth"
    >
      <div
        className="flex flex-col gap-4"
        style={{
          width: `${896 * incrementFactor}px`,
        }}
      >
        <TimelineRuler />
        <div className="mt-6 flex">
          {videoTimelineFrames.length > 0 &&
            videoTimelineFrames.map((frame, index) => (
              <Image
                className="w-[calc(896px/7)]"
                key={index}
                src={frame}
                width={100}
                height={100}
                alt=""
              />
            ))}
        </div>
        <div
          style={{
            width: `${896 * incrementFactor}px`,
          }}
          className="bg-gray-100 p-3 px-6 rounded-md flex  gap-2 text-black items-center cursor-pointer hover:bg-gray-200/90 transition-all duration-300"
        >
          <OriginalSoundIcon width={18} height={18} />
          <p className="font-medium">Add sound</p>
        </div>
        <VerticalPlayhead />
      </div>
    </div>
  );
}
