// React
import { ReactNode } from "react";

// CLSX
import clsx from "clsx";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg  p-6 shadow-sm border border-gray-200/50",
        className
      )}
    >
      {children}
    </div>
  );
}
