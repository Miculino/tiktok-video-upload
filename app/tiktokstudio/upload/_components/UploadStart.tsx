// Components
import Card from "../../_components/Card";
import VideoRequirement from "./VideoRequirement";
import VideoUpload from "./VideoUpload";

// Constants
import { VIDEO_UPLOAD_REQUIREMENTS } from "@/app/constants/videoUploadRequirements";

export default function UploadStart() {
  return (
    <Card className="bg-white">
      <VideoUpload />
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
