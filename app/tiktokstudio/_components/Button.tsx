import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva("px-4 py-2 rounded-sm font-medium", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "hover:bg-primary-hover",
        "cursor-pointer",
      ],
      secondary: ["bg-secondary", "text-black", "hover:bg-secondary-hover"],
    },
  },
});

export default function Button({
  intent = "primary",
  children,
}: {
  intent?: "primary";
  children: React.ReactNode;
}) {
  return <div className={clsx(button({ intent }))}>{children}</div>;
}
