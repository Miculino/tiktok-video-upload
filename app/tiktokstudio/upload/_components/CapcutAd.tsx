// Components
import CapcutIcon from "@/app/icons/CapcutIcon";
import Button from "../../_components/Button";
import Card from "../../_components/Card";

export default function CapcutAd() {
  return (
    <Card className="bg-white flex justify-between text-black">
      <div>
        <h4 className="font-medium">
          Create high quality videos on CapCut Online
        </h4>
        <p className="text-sm text-gray-500">
          Automatically shorten your videos and create videos from scripts with
          AI-powered features.
        </p>
      </div>
      <Button className="px-4" intent="secondary">
        <CapcutIcon width={20} height={20} />
        <span>Try Now</span>
      </Button>
    </Card>
  );
}
