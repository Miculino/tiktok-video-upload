import React from "react";

const AnalyticsIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        data-tt="Sidebar_index_IconLineChart"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        {...props}
      >
        <path d="M8.72 30.47a1 1 0 0 1 0-1.42l9.45-9.45a1 1 0 0 1 1.42 0l2.12 2.12 3.74 3.75 5.58-5.58-2.4-2.4a.6.6 0 0 1 .34-1.03l8.78-1.4a.82.82 0 0 1 .94.93l-1.4 8.79a.6.6 0 0 1-1.03.33l-2.4-2.4-7.7 7.71a1 1 0 0 1-1.42 0l-5.87-5.86-7.32 7.32a1 1 0 0 1-1.41 0l-1.42-1.41Z"></path>
        <path d="M2 18.2c0-3.92.58-5.88 1.76-7.38a7 7 0 0 1 3.06-3.06C8.32 6.28 10.28 6 12 6h24c3.92 0 5.88.58 7.38 1.76a7 7 0 0 1 3.06 3.06C46.28 12.32 47 14.28 47 18.2v11.6c0 3.92-.58 5.88-1.76 7.38a7 7 0 0 1-3.06 3.06C40.88 41.72 38.92 42 36 42H12c-3.92 0-5.88-.58-7.38-1.76a7 7 0 0 1-3.06-3.06C2.58 35.88 2 33.92 2 30V18.2Z"></path>
      </svg>
    </div>
  );
};

export default AnalyticsIcon;
