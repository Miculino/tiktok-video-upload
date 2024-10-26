// Components
import Button from "../../_components/Button";
import Card from "../../_components/Card";

// Icons
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";
import ReplaceIcon from "@/app/icons/ReplaceIcon";

export default function VideoUploadProgress() {
  return (
    <Card className="bg-white flex flex-col gap-4 relative">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium text-black">Video title</p>
        <Button className="py-1 px-4 gap-2" intent="secondary">
          <ReplaceIcon />
          <span>Replace</span>
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          <span className="text-gray-400">Size:</span>
          <span className="font-medium text-base text-black">800 MB</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Duration:</span>
          <span className="font-medium text-base text-black">42m 44s</span>
        </div>
      </div>
      <div className="flex justify-between text-black">
        <div className="flex w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <VideoUploadIcon width={20} height={20} />
              <p>
                <span>527 MB</span>/<span>857.31 MB</span> uploaded...
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
