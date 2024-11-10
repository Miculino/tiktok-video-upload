// React
import { useEffect, useState } from "react";

// Next
import Image from "next/image";

// Components
import Modal from "@/app/components/Modal";
import Card from "../../_components/Card";
import Button from "../../_components/Button";
import SongPreview from "./SongPreview";
import SearchInput from "@/app/components/SearchInput";
import TimelineRuler from "./TimelineRuler";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// Icons
import OriginalSoundIcon from "@/app/icons/OriginalSoundIcon";
import TemplatesIcon from "@/app/icons/TemplatesIcon";
import UndoIcon from "@/app/icons/UndoIcon";
import RedoIcon from "@/app/icons/RedoIcon";
import TimelineTrimIcon from "@/app/icons/TimelineTrimIcon";
import TrashIcon from "@/app/icons/TrashIcon";
import PlayIcon from "@/app/icons/PlayIcon";
import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";

export default function VideoEditModal() {
  const [videoTimelineFrames, setVideoTimelineFrames] = useState<string[]>([]);

  const {
    isVideoModalToggled,
    toggleVideoModal,
    blob_video_url,
    s3_video_url,
  } = useVideoUploadStore();

  const handleToggleVideoModal = () => {
    toggleVideoModal();
  };

  useEffect(() => {
    const fetchTimelineFrames = async () => {
      const res = await fetch("http://localhost:3333/generate-frames");

      if (res.body) {
        const reader = res.body.getReader();
        let buffer = new Uint8Array();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Append new data to the buffer
          const newBuffer = new Uint8Array(buffer.length + value.length);
          newBuffer.set(buffer);
          newBuffer.set(value, buffer.length);
          buffer = newBuffer;

          // Look for frame boundary markers
          let frameMatch;

          // Loop through buffer looking for frame boundaries
          while (
            (frameMatch =
              /--frame\r\nContent-Type: image\/jpeg\r\nContent-Length: (\d+)\r\n\r\n/.exec(
                new TextDecoder().decode(buffer)
              )) !== null
          ) {
            const headerLength = frameMatch.index + frameMatch[0].length;
            const contentLength = parseInt(frameMatch[1]);

            // Check if we have a full frame (header + content + boundary)
            if (buffer.length >= headerLength + contentLength + 2) {
              const imageData = buffer.slice(
                headerLength,
                headerLength + contentLength
              );
              const blob = new Blob([imageData], { type: "image/jpeg" });
              const blobUrl = URL.createObjectURL(blob);

              // Add the frame URL to the timeline frames state
              setVideoTimelineFrames((prevFrames) => [...prevFrames, blobUrl]);

              // Remove processed data from buffer and continue looking for next frame
              buffer = buffer.slice(headerLength + contentLength + 2);
            } else {
              break; // Exit the inner loop if the frame isn't fully received yet
            }
          }
        }
      }
    };

    if (isVideoModalToggled && s3_video_url) {
      fetchTimelineFrames();
    }
  }, [s3_video_url, isVideoModalToggled, setVideoTimelineFrames]);

  if (isVideoModalToggled)
    return (
      <Modal>
        <Card className="bg-white px-0 py-0 max-w-[896px]">
          <div className="border-b border-b-gray-200 py-4 px-6">
            <p className="text-xl text-black font-semibold">Edit video</p>
          </div>
          <div className="flex">
            <div className="p-4 flex flex-col gap-3 border-r border-r-gray-200">
              <div className="flex flex-col items-center gap-1">
                <OriginalSoundIcon fill="#000" width={24} height={24} />
                <span className="text-black text-xs">Sounds</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <TemplatesIcon fill="var(--disabled)" width={24} height={24} />
                <span className="text-gray-400 text-xs">Templates</span>
              </div>
            </div>
            <div>
              <div className="p-4">
                <SearchInput />
              </div>

              <div className="flex border-b-gray-200 border-b text-center">
                <div className="p-2 border-b border-b-gray-500 w-full text-black">
                  Recommended
                </div>
                <div className="p-2 border-b w-full">Favorites</div>
              </div>
              <div className="p-4">
                <SongPreview />
              </div>
            </div>
            <div className="py-12 px-32 bg-gray-100/50">
              <div className="bg-black h-80 rounded-lg grid place-content-center">
                <video className="w-48" src={blob_video_url} />
              </div>
            </div>
          </div>
          <div className="w-full border-y border-y-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6 opacity-50">
                {/* Undo Redo */}
                <UndoIcon className="cursor-pointer" />
                <RedoIcon className="cursor-pointer" />
              </div>
              <div className="flex items-center gap-3">
                <TimelineTrimIcon className="cursor-pointer" width={20} />
                <TrashIcon className="cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PlayIcon className="cursor-pointer" fill="var(--background)" />
              <p className="text-sm">
                {/* Start and End Duration of Video */}
                <span className="text-gray-600">00:00:00</span> /{" "}
                <span className="text-gray-400">00:00:10</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MinusIcon />
              <div className="w-32 h-4">
                <input type="range" min={1} max={3} step={1} />
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col overflow-x-scroll relative max-w-[1792px]">
              <TimelineRuler />
              <div className="mt-12 flex w-full overflow-hidden rounded-md">
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
              <div>Add sound</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-6 justify-end">
            <Button
              className="py-2 px-4"
              onClick={handleToggleVideoModal}
              intent="secondary"
            >
              <span>Cancel</span>
            </Button>
            <Button className="py-2 px-4" onClick={handleToggleVideoModal}>
              <span>Save Edit</span>
            </Button>
          </div>
        </Card>
      </Modal>
    );
}
