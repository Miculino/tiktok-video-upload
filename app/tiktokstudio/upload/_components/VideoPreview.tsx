// Components

import FeedView from "./FeedView";
import MobileFrame from "./MobileFrame";
import ProfileView from "./ProfileView";
import WebView from "./WebView";

// Zustand
import { usePreviewModeStore } from "@/app/stores/previewModeStore";

export default function VideoPreview() {
  const { previewMode } = usePreviewModeStore();

  return (
    <div>
      {previewMode === "feed" && (
        <MobileFrame className="bg-black">
          <FeedView />
        </MobileFrame>
      )}

      {previewMode === "profile" && (
        <MobileFrame>
          <ProfileView />
        </MobileFrame>
      )}

      {previewMode === "web" && <WebView />}
    </div>
  );
}
