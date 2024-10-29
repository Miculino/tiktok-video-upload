// Next
import Image from "next/image";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// Icons
import LiveIcon from "@/app/icons/LiveIcon";
import SearchIcon from "@/app/icons/SearchIcon";
import PlusCircleIcon from "@/app/icons/PlusCircleIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import CommentsIcon from "@/app/icons/CommentsIcon";
import BookmarkIcon from "@/app/icons/BookmarkIcon";
import ShareIcon from "@/app/icons/ShareIcon";
import OriginalSoundIcon from "@/app/icons/OriginalSoundIcon";

export default function FeedView() {
  const { video_url } = useVideoUploadStore();

  return (
    <>
      <div className="flex justify-between items-center p-4 opacity-60">
        <LiveIcon />
        <span className="text-sm text-gray-100">Following</span>
        <div className="relative">
          <span className="text-sm text-gray-300 font-semibold">For You</span>
          <div className="bg-gray-100 w-1/2 left-1/2 -translate-x-1/2 h-[2px] absolute"></div>
        </div>

        <SearchIcon />
      </div>

      <div className="text-white text-sm absolute bottom-14 left-4 flex flex-col gap-2">
        <span className="text-sm">remusdb</span>
        <p className="text-xs text-slate-300">TikTok Studio Oct 23</p>
        <div className="flex items-center gap-1">
          <OriginalSoundIcon width={12} height={12} />
          <p className="text-xs">Original sound - remusdb</p>
        </div>
      </div>

      <div className="absolute bottom-20 right-4 z-20 bg-white/25 rounded-full p-2">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full border border-white"
            src={"/User_Avatar.jpeg"}
            alt=""
            width={32}
            height={32}
          />
          <PlusCircleIcon className="-translate-y-1/2" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-white items-center">
            <HeartIcon />
            <span className="text-xs">1000</span>
          </div>
          <div className="flex flex-col gap-1 text-white items-center">
            <CommentsIcon />
            <span className="text-xs">1000</span>
          </div>
          <div className="flex flex-col gap-1 text-white items-center">
            <BookmarkIcon />
            <span className="text-xs">1000</span>
          </div>
          <div className="flex flex-col gap-1 text-white items-center">
            <ShareIcon />
            <span className="text-xs">1000</span>
          </div>
          <div className="w-7 h-7 bg-disc-gradient rounded-full"></div>
        </div>
      </div>

      <div className="h-full">
        <div className="absolute top-1/2 -translate-y-1/2 grid place-content-center h-full">
          <video
            src={video_url}
            controls={false}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-2">
          <Image src={"/MobileBottomBar.png"} alt="" width={840} height={106} />
        </div>
      </div>
    </>
  );
}
