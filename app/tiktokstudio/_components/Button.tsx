// React
import { HTMLProps, ReactNode } from "react";

// CLSX
import clsx from "clsx";

// Class Variance Authority
import { cva } from "class-variance-authority";

const button = cva(
  "rounded-md font-medium text-center flex items-center justify-center",
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
  type?: "button" | "submit" | "reset";
}

export default function Button({
  intent = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={clsx(button({ intent }), className)}>
      {children}
    </button>
  );
}
