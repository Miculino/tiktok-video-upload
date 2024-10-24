"use client";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import SidebarItem from "./SidebarItem";
import Button from "./Button";

// Constants
import { SIDEBAR_LINKS } from "@/app/constants/sidebarLinks";

export default function Sidebar() {
  const pathname = usePathname();

  const isUploadBtnDisabled = pathname === "/tiktokstudio/upload";

  return (
    <div className="bg-white w-full max-w-[240px] pb-2 px-3 h-[calc(100vh-62px)] top-[62px] flex flex-col border-r border-r-gray-200 fixed left-0">
      <div className="flex flex-col justify-between h-full">
        <div className="py-4 border-b border-b-gray-200">
          <Link href={"/tiktokstudio/upload"}>
            <Button
              intent={isUploadBtnDisabled ? "disabled" : "primary"}
              disabled={isUploadBtnDisabled}
              className="w-full"
            >
              Upload
            </Button>
          </Link>
        </div>

        <ul className="flex flex-col gap-3 mt-2">
          {SIDEBAR_LINKS.map((sidebarLink, index) => (
            <SidebarItem
              key={index}
              path={sidebarLink.path}
              label={sidebarLink.label}
              icon={sidebarLink.icon}
            />
          ))}
        </ul>
        <Link
          className="mt-auto pb-2 inline-block text-sm font-medium text-black border-b border-b-gray-200"
          href={"https://www.tiktok.com"}
        >
          Back to TikTok
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-3 text-xs text-gray-500 font-medium pb-3">
        <Link
          href={"https://www.tiktok.com/legal/page/row/terms-of-service/en"}
        >
          Terms of Service
        </Link>
        <Link href={"https://www.tiktok.com/legal/page/row/privacy-policy/en"}>
          Privacy Policy
        </Link>
        <p>Copyright &copy; 2024 TikTok</p>
      </div>
    </div>
  );
}
