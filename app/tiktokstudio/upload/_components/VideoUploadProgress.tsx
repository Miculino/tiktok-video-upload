// React
import { useRef, useMemo } from "react";

// Components
import Button from "../../_components/Button";
import Card from "../../_components/Card";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// Icons
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";
import ReplaceIcon from "@/app/icons/ReplaceIcon";
import useVideoDuration from "@/app/hooks/useVideoDuration";

export default function VideoUploadProgress() {
  const { video_file } = useVideoUploadStore();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoFileURL = useMemo(
    () => video_file?.data && URL.createObjectURL(video_file.data),
    [video_file?.data]
  );
  const totalVideoFileSize = ((video_file?.size ?? 0) / 1000000).toFixed(2);

  const [seconds, minutes] = useVideoDuration(videoRef, videoFileURL);

  return (
    <Card className="bg-white flex flex-col gap-4 relative">
      <video ref={videoRef} src={videoFileURL} controls></video>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium text-black">{video_file?.name}</p>
        <Button className="py-1 px-4 gap-2" intent="secondary">
          <ReplaceIcon />
          <span>Replace</span>
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          <span className="text-gray-400">Size:</span>
          <p className="font-medium text-base text-black">
            {totalVideoFileSize} MB
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Duration:</span>
          <p className="flex gap-1">
            <span className="font-medium text-base text-black">{minutes}m</span>
            <span className="font-medium text-base text-black">{seconds}s</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between text-black">
        <div className="flex w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <VideoUploadIcon width={20} height={20} />
              <p>
                <span>527 MB</span>/<span>{totalVideoFileSize} MB</span>{" "}
                uploaded...
              </p>
              <p>
                <span>5 minutes</span> left
              </p>
            </div>
          </div>
          <div>
            <span className="text-lg text-black font-medium">37.86%</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full rounded-b-lg overflow-hidden">
          <div className="w-1/2 bg-blue-400 h-1"></div>
        </div>
      </div>
    </Card>
  );
}
