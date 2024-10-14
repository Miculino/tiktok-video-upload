// Constants
import { SIDEBAR_LINKS } from "@/app/constants/sidebarLinks";

// Components
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="bg-white">
      <button>Upload</button>
      <div>
        <ul className="">
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
