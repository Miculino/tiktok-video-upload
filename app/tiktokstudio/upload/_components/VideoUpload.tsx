// Components
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";
import Button from "../../_components/Button";
import Card from "../../_components/Card";
import VideoRequirement from "./VideoRequirement";

// Constants
import { VIDEO_UPLOAD_REQUIREMENTS } from "@/app/constants/videoUploadRequirements";

export default function VideoUpload() {
  return (
    <Card className="bg-white">
      <Card className="bg-gray-200 border border-dashed border-gray-400 py-40 flex flex-col items-center gap-4">
        <VideoUploadIcon width={64} height={64} />
        <div className="text-black flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Select video to upload</h3>
          <p className="text-sm">Or drag and drop it here</p>
        </div>
        <Button className="mx-auto py-2 px-12">Select video</Button>
      </Card>
      <div className="flex items-start justify-between mt-6">
        {VIDEO_UPLOAD_REQUIREMENTS.map((videoUploadRequirement, index) => (
          <VideoRequirement
            key={index}
            title={videoUploadRequirement.title}
            description={videoUploadRequirement.description}
            icon={videoUploadRequirement.icon}
          />
        ))}
      </div>
    </Card>
  );
}
