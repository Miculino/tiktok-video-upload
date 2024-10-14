import React from "react";

const AnalyticsIcon = ({
  className,
  width = "1em",
  height = "1em",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="#000"
      data-tt="Sidebar_index_IconLineChart"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      <path d="M8.72 30.47a1 1 0 0 1 0-1.42l9.45-9.45a1 1 0 0 1 1.42 0l2.12 2.12 3.74 3.75 5.58-5.58-2.4-2.4a.6.6 0 0 1 .34-1.03l8.78-1.4a.82.82 0 0 1 .94.93l-1.4 8.79a.6.6 0 0 1-1.03.33l-2.4-2.4-7.7 7.71a1 1 0 0 1-1.42 0l-5.87-5.86-7.32 7.32a1 1 0 0 1-1.41 0l-1.42-1.41Z" />
      <path d="M2 18.2c0-3.92 0-5.88.76-7.38a7 7 0 0 1 3.06-3.06C7.32 7 9.28 7 13.2 7h21.6c3.92 0 5.88 0 7.38.76a7 7 0 0 1 3.06 3.06c.76 1.5.76 3.46.76 7.38v11.6c0 3.92 0 5.88-.76 7.38a7 7 0 0 1-3.06 3.06c-1.5.76-3.46.76-7.38.76H13.2c-3.92 0-5.88 0-7.38-.76a7 7 0 0 1-3.06-3.06C2 35.68 2 33.72 2 29.8V18.2ZM13.2 11c-2.03 0-3.3 0-4.27.08-.92.08-1.2.2-1.3.25a3 3 0 0 0-1.3 1.3c-.05.1-.17.38-.25 1.3C6 14.9 6 16.17 6 18.2v11.6c0 2.03 0 3.3.08 4.27.08.92.2 1.2.25 1.3a3 3 0 0 0 1.3 1.3c.1.05.38.17 1.3.25.96.08 2.24.08 4.27.08h21.6c2.03 0 3.3 0 4.27-.08a3.6 3.6 0 0 0 1.3-.25 3 3 0 0 0 1.3-1.3c.05-.1.17-.38.25-1.3.08-.96.08-2.24.08-4.27V18.2c0-2.03 0-3.3-.08-4.27-.08-.92-.2-1.2-.25-1.3a3 3 0 0 0-1.3-1.3c-.1-.05-.38-.17-1.3-.25-.96-.08-2.24-.08-4.27-.08H13.2Z" />
    </svg>
  );
};

export default AnalyticsIcon;