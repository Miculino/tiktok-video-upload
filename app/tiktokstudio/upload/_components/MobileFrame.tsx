// React
import { ReactNode } from "react";

// CLSX
import clsx from "clsx";

export default function MobileFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-80 h-[620px] rounded-3xl border-8 border-slate-800 shadow-md overflow-hidden relative",
        className
      )}
    >
      <div className="mx-auto w-40 h-4 bg-slate-800 rounded-b-md flex items-start px-2 pt-[1px]">
        <div className="border-2 border-slate-900 w-2 h-2 rounded-full bg-camera-lens"></div>
      </div>
      {children}
    </div>
  );
}
