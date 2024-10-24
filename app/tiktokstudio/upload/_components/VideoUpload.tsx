// Components
import VideoUploadIcon from "@/app/icons/VideoUploadIcon";
import Button from "../../_components/Button";
import Card from "../../_components/Card";
import { VIDEO_UPLOAD_REQUIREMENTS } from "@/app/constants/videoUploadRequirements";
import VideoRequirement from "./VideoRequirement";

export default function VideoUpload() {
  return (
    <Card className="bg-white">
      <Card className="bg-gray-200 border border-dashed border-gray-300 p-44 flex flex-col">
        <div className="text-black flex flex-col items-center">
          <VideoUploadIcon width={64} height={64} />
          <h3 className="">Select video to upload</h3>
          <p>Or drag and drop it here</p>
        </div>
        <Button width="max-w-fit">Select video</Button>
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
