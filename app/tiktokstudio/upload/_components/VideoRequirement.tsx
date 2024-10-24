import { SVGProps } from "react";

interface VideoRequirementProps {
  title: string;
  description: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

export default function VideoRequirement({
  title,
  description,
  icon: Icon,
}: VideoRequirementProps) {
  return (
    <div className="flex gap-2">
      <Icon width={24} height={24} />
      <div>
        <span className="text-black font-medium">{title}</span>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
