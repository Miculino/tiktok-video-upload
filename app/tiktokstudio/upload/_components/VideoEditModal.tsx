// Next
import Image from "next/image";

// Components
import Modal from "@/app/components/Modal";
import Card from "../../_components/Card";
import Button from "../../_components/Button";
import SongPreview from "./SongPreview";
import SearchInput from "@/app/components/SearchInput";
import TimelineRuler from "./TimelineRuler";

// Hooks
import useFetchStreamingFrames from "@/app/hooks/useFetchStreamingFrames";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// Icons
import OriginalSoundIcon from "@/app/icons/OriginalSoundIcon";
import TemplatesIcon from "@/app/icons/TemplatesIcon";
import UndoIcon from "@/app/icons/UndoIcon";
import RedoIcon from "@/app/icons/RedoIcon";
import TimelineTrimIcon from "@/app/icons/TimelineTrimIcon";
import TrashIcon from "@/app/icons/TrashIcon";
import PlayIcon from "@/app/icons/PlayIcon";
import TimelineZoom from "./TimelineZoom";
import VerticalPlayhead from "./vertical-playhead/VerticalPlayhead";

export default function VideoEditModal() {
  const { blob_video_url, s3_video_url } = useVideoUploadStore();

  const { isVideoModalToggled, toggleVideoModal, timelineZoomLevel } =
    useVideoEditorStore();

  const videoTimelineFrames = useFetchStreamingFrames(
    s3_video_url,
    isVideoModalToggled,
    timelineZoomLevel
  );

  const handleToggleVideoModal = () => {
    toggleVideoModal();
  };

  const incrementFactor = timelineZoomLevel / 7;

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
            <TimelineZoom />
          </div>
          <div className="overflow-x-scroll relative p-6 scrollbar-hide select-none">
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
