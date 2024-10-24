import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva("px-4 py-3 rounded-md font-medium text-center mx-auto", {
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
  width = "w-full",
  children,
}: {
  intent?: "primary";
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <button className={clsx(button({ intent }), width)}>{children}</button>
  );
}
