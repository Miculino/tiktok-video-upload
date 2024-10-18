// React
import { SVGProps } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// CLSX
import clsx from "clsx";

export default function SidebarItem({
  path,
  label,
  icon: Icon,
}: {
  path: string;
  label: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}) {
  const currentRoutePath = usePathname();

  const isLinkActive = currentRoutePath === path;

  return (
    <li
      className={clsx(
        "list-none p-3 relative rounded-md",
        isLinkActive ? "bg-primary-light text-primary" : "text-black"
      )}
    >
      <Link className="flex items-center gap-3" href={path}>
        {isLinkActive && (
          <div className="absolute left-0 h-1/2 bg-primary w-[3px]"></div>
        )}
        <Icon
          width={24}
          height={24}
          fill={isLinkActive ? "var(--primary)" : "#000"}
        />
        <span className="text-base font-medium">{label}</span>
      </Link>
    </li>
  );
}
