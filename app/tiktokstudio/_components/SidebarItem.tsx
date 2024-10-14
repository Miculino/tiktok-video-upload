// React
import React, { SVGProps } from "react";

// Next
import Link from "next/link";

export default function SidebarItem({
  path,
  label,
  icon: Icon,
}: {
  path: string;
  label: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}) {
  return (
    <li className="list-none max-w-fit p-2 my-2">
      <Link className="flex items-center gap-2" href={path}>
        <Icon width={24} height={24} />
        <span className="text-base text-black font-normal">{label}</span>
      </Link>
    </li>
  );
}
