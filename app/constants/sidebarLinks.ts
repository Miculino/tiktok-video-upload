// SVG Icons
import AnalyticsIcon from "../icons/AnalyticsIcon";
import CommentsIcon from "../icons/CommentsIcon";
import CreatorAcademyIcon from "../icons/CreatorAcademyIcon";
import FeedbackIcon from "../icons/FeedbackIcon";
import HomeIcon from "../icons/HomeIcon";
import InspirationsIcon from "../icons/InspirationsIcon";
import PostsIcon from "../icons/PostsIcon";

const BASE_PATH = "/tiktokstudio";

export const SIDEBAR_LINKS = [
  {
    label: "Home",
    icon: HomeIcon,
    path: `${BASE_PATH}`,
  },
  {
    label: "Posts",
    icon: PostsIcon,
    path: `${BASE_PATH}/content`,
  },
  {
    label: "Comments",
    icon: CommentsIcon,
    path: `${BASE_PATH}/comment`,
  },
  {
    label: "Analytics",
    icon: AnalyticsIcon,
    path: `${BASE_PATH}/analytics`,
  },
  {
    label: "Inspirations",
    icon: InspirationsIcon,
    path: `${BASE_PATH}/inspiration`,
  },
  {
    label: "Creator Academy",
    icon: CreatorAcademyIcon,
    path: "https://www.tiktok.com/creator-academy/",
  },
  {
    label: "Feedback",
    icon: FeedbackIcon,
    path: `${BASE_PATH}/help/contact-us`,
  },
];
