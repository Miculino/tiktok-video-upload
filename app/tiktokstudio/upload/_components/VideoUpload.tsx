"use client";

// React
import { useEffect, useState } from "react";

// Components
import Button from "../../_components/Button";
import Card from "../../_components/Card";

// Zustand
import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// Uppy
import { Uppy } from "uppy";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";

// Uppy React
import { DragDrop, useUppyEvent } from "@uppy/react";

// Icons
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";

export default function VideoUpload() {
  const [uppy] = useState(
    () =>
      new Uppy({
        restrictions: {
          allowedFileTypes: [".mp4"],
          maxNumberOfFiles: 1,
        },
      })
  );

  const { addVideoFile } = useVideoUploadStore();

  const [files] = useUppyEvent(uppy, "file-added");

  useEffect(() => {
    addVideoFile(files[0]);
  }, [files]);

  return (
    <Card className="bg-gray-200 border border-dashed border-gray-400 py-40 flex flex-col items-center gap-4 relative">
      <VideoUploadIcon width={64} height={64} />
      <div className="text-black flex flex-col items-center">
        <h3 className="text-2xl font-semibold">Select video to upload</h3>
        <p className="text-sm">Or drag and drop it here</p>
      </div>
      <Button className="mx-auto py-2 px-12">Select video</Button>
      <div className="absolute top-0 left-0 w-full h-full opacity-0">
        <DragDrop width={"100%"} height={"100%"} uppy={uppy}></DragDrop>
      </div>
    </Card>
  );
}
