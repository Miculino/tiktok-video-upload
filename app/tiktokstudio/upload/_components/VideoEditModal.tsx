// Components
import Modal from "@/app/components/Modal";
import Card from "../../_components/Card";
import Button from "../../_components/Button";
import SongPreview from "./SongPreview";
import SearchInput from "@/app/components/SearchInput";
import TimelineZoom from "./TimelineZoom";
import Timeline from "./Timeline";

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

export default function VideoEditModal() {
  const { blob_video_url } = useVideoUploadStore();

  const { isVideoModalToggled, toggleVideoModal } = useVideoEditorStore();

  const handleToggleVideoModal = () => {
    toggleVideoModal();
  };

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
          <Timeline />

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
