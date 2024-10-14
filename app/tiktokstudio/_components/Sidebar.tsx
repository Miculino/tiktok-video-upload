// Constants
import { SIDEBAR_LINKS } from "@/app/constants/sidebarLinks";

// Components
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div>
      <button>Upload</button>
      <div>
        <ul>
          {SIDEBAR_LINKS.map((sidebarLink, index) => (
            <SidebarItem
              key={index}
              path={sidebarLink.path}
              label={sidebarLink.label}
              icon={sidebarLink.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
