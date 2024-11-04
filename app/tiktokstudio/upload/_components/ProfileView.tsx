// Next
import Image from "next/image";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// Icons
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import NotificationBellIcon from "@/app/icons/NotificationBellIcon";
import ThreeDotsIcon from "@/app/icons/ThreeDotsIcon";
import GridListIcon from "@/app/icons/GridListIcon";
import ShuffleIcon from "@/app/icons/ShuffleIcon";
import PrivateHeartIcon from "@/app/icons/PrivateHeartIcon";

export default function ProfileView() {
  const { blob_video_url } = useVideoUploadStore();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        {/* Header */}
        <ArrowRightIcon className="-rotate-180" />
        <div className="flex items-center gap-1">
          <NotificationBellIcon />
          <ThreeDotsIcon />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center gap-1">
          <Image
            className="rounded-full border border-white"
            src={"/User_Avatar.jpeg"}
            alt=""
            width={48}
            height={48}
          />
          <span className="text-xs">remusdb</span>
        </div>
        <div className="flex gap-1 max-w-28 flex-col mx-auto mt-2">
          <div className="bg-gray-200 p-2 w-full rounded-sm"></div>
          <div className="flex justify-between gap-1">
            <div className="bg-gray-200 p-2 w-full rounded-sm"></div>
            <div className="bg-gray-200 p-2 w-full rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <div className="relative flex justify-center w-full">
          <GridListIcon className="py-2" width={24} />
          <div className="w-1/2 bg-black h-[2px] absolute bottom-0"></div>
        </div>

        <ShuffleIcon className="flex justify-center items-center w-full" />
        <PrivateHeartIcon className="flex justify-center items-center w-full" />
      </div>
      <div className="grid grid-cols-3 gap-1 h-full">
        <div className="overflow-hidden">
          <video
            className="w-full h-full aspect-video object-cover -mt-1"
            src={blob_video_url}
          />
        </div>

        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
        <div className="bg-gray-100 w-22 h-32"></div>
      </div>
    </div>
  );
}
