// Icons
import AspectRatioIcon from "../icons/AspectRatioIcon";
import FileFormatsIcon from "../icons/FileFormatsIcon";
import VideoResolutionIcon from "../icons/VideoResolutionIcon";
import VideoSizeDurationIcon from "../icons/VideoSizeDurationIcon";

export const VIDEO_UPLOAD_REQUIREMENTS = [
  {
    title: "Size and duration",
    description: "Maximum size: 10 GB, video duration: 60 minutes",
    icon: VideoSizeDurationIcon,
  },
  {
    title: "File formats",
    description: `Recommended: ".mp4". other majot formats are supported.`,
    icon: FileFormatsIcon,
  },
  {
    title: "Video resolutions",
    description: "Minimum resolutions: 720p. 2K and 4K are supported",
    icon: VideoResolutionIcon,
  },
  {
    title: "Aspect ratios",
    description: "Recommended: 16:9 for landscape, 9:16 for vertical.",
    icon: AspectRatioIcon,
  },
];
