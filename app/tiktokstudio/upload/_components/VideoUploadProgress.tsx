// React
import { useRef, useMemo, useEffect, useState } from "react";

// Uppy
import { Uppy } from "uppy";
import { useUppyEvent, useUppyState } from "@uppy/react";

// Transloadit
import Transloadit from "@uppy/transloadit";

// Components
import Button from "../../_components/Button";
import Card from "../../_components/Card";

// Hooks
import useVideoDuration from "@/app/hooks/useVideoDuration";

// Utils
import { calculateETA } from "@/app/utils/calculateETA";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// CLSX
import clsx from "clsx";

// Icons
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";
import ReplaceIcon from "@/app/icons/ReplaceIcon";
import CheckmarkIcon from "@/app/icons/CheckmarkIcon";
import PauseIcon from "@/app/icons/PauseIcon";

export default function VideoUploadProgress() {
  const [uploadStartTime] = useState(Date.now());

  const [uppy] = useState(() =>
    new Uppy({
      debug: true,
      restrictions: {
        allowedFileTypes: [".mp4"],
        maxNumberOfFiles: 1,
      },
    }).use(Transloadit, {
      waitForEncoding: true,
      waitForMetadata: false,
      assemblyOptions: {
        params: {
          auth: {
            key: "ee7341c972a4831b3c2414505f36bf11",
          },
          template_id: "792fa7fcfa774fc3ba4f0c0c4db64279",
        },
      },
    })
  );

  const uppyStateFiles = useUppyState(uppy, (state) => state.files);

  const [uploadProgress] = useUppyEvent(uppy, "upload-progress");
  const [uploadSuccessEvent] = useUppyEvent(uppy, "upload-success");

  const isUploadCompletedSuccessfully =
    uploadSuccessEvent.length > 0
      ? uploadSuccessEvent[1]?.status === 200
      : false;

  const { video_file, resetVideoFile, addS3VideoURL } = useVideoUploadStore();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoFileURL = useMemo(
    () => video_file?.data && URL.createObjectURL(video_file.data),
    [video_file?.data]
  );

  const fileID = video_file?.id;

  const isVideoUploadPaused =
    fileID && Object.keys(uppyStateFiles).length > 0
      ? uppyStateFiles[fileID].isPaused
      : false;

  const [seconds, minutes] = useVideoDuration(videoRef, videoFileURL);

  const totalVideoFileSize = ((video_file?.size ?? 0) / 1000000).toFixed(2);

  const bytesUploaded = uploadProgress[1]?.bytesUploaded ?? 0;
  const bytesTotal = uploadProgress[1]?.bytesTotal ?? 0;
  const megabytesUploaded = (bytesUploaded / 1000000).toFixed(2);

  const uploadProgressPercentage = ((bytesUploaded / bytesTotal) * 100).toFixed(
    2
  );
  const uploadETA = calculateETA(bytesUploaded, bytesTotal, uploadStartTime);

  const handleReplaceFile = () => {
    uppy.cancelAll();
    resetVideoFile();
  };

  const handleUploadPause = () => {
    if (fileID) {
      uppy.pauseResume(fileID);
    }
  };

  useUppyEvent(uppy, "transloadit:complete", (assembly) => {
    const videoFileS3URL = assembly.results[":original"][0].url;

    if (videoFileS3URL) {
      addS3VideoURL(videoFileS3URL);
    }
  });

  useEffect(() => {
    if (video_file) {
      uppy.addFile(video_file.data as File);
      uppy.upload().then((res) => console.log(res, "response"));
    }
  }, [video_file, uppy]);

  return (
    <Card className="bg-white flex flex-col gap-4 relative">
      <video
        className="hidden opacity-0 invisible absolute -z-[9999px] w-0 h-0"
        ref={videoRef}
        src={videoFileURL}
        controls
      ></video>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium text-black">{video_file?.name}</p>
        {isUploadCompletedSuccessfully ? (
          <Button
            onClick={handleReplaceFile}
            className="py-1 px-4 gap-2"
            intent="secondary"
          >
            <ReplaceIcon />
            <span>Replace</span>
          </Button>
        ) : (
          <Button
            onClick={handleUploadPause}
            className="py-1 px-4 gap-2"
            intent="secondary"
          >
            {isVideoUploadPaused ? (
              <>
                <ReplaceIcon />
                <span>Resume Upload</span>
              </>
            ) : (
              <>
                <PauseIcon />
                <span>Pause Upload</span>
              </>
            )}
          </Button>
        )}
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
              {isUploadCompletedSuccessfully ? (
                <>
                  <CheckmarkIcon width={20} height={20} />
                  <p className="text-green-500 font-medium">Uploaded</p>
                </>
              ) : isVideoUploadPaused ? (
                <>
                  <PauseIcon />
                  <p>Upload paused</p>
                </>
              ) : (
                <>
                  <VideoUploadIcon width={20} height={20} />
                  <p>
                    <span>
                      {!isNaN(+megabytesUploaded) ? megabytesUploaded : "0.00"}{" "}
                      MB
                    </span>
                    /<span>{totalVideoFileSize} MB</span> uploaded...
                  </p>
                  <p>
                    <span>{uploadETA}</span> left
                  </p>
                </>
              )}
            </div>
          </div>
          <div>
            <span className="text-lg text-black font-medium">
              {!isNaN(+uploadProgressPercentage)
                ? uploadProgressPercentage
                : "0.00"}
              %
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full rounded-b-lg overflow-hidden">
          <div
            className={clsx(
              "h-1 transition-all duration-75",
              isUploadCompletedSuccessfully ? "bg-green-400" : "bg-blue-400"
            )}
            style={{
              width: `${
                !isNaN(+uploadProgressPercentage) ? uploadProgressPercentage : 0
              }%`,
            }}
          ></div>
        </div>
      </div>
    </Card>
  );
}
