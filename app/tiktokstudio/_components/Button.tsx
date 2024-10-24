// React
import { HTMLProps, ReactNode } from "react";

// CLSX
import clsx from "clsx";

// Class Variance Authority
import { cva } from "class-variance-authority";

const button = cva(
  "px-4 py-3 rounded-md font-medium text-center flex items-center justify-center",
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-white",
          "hover:bg-primary-hover",
          "cursor-pointer",
        ],
        secondary: ["bg-secondary", "text-black", "hover:bg-secondary-hover"],
        disabled: ["bg-disabled text-gray-400 cursor-not-allowed"],
      },
    },
  }
);

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  intent?: "primary" | "secondary" | "disabled";
  children: ReactNode;
}

export default function Button({
  intent = "primary",
  children,
  className,
}: ButtonProps) {
  return (
    <button className={clsx(button({ intent }), className)}>{children}</button>
  );
}
