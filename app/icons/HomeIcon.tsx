import React from "react";

const HomeIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        data-tt="Sidebar_index_IconTabHome"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path d="M23.05 7.84a1.5 1.5 0 0 1 1.9 0l16.1 13.2a1.5 1.5 0 0 1-.95 2.66h-2.33l-1.2 13.03A2.5 2.5 0 0 1 34.1 39H13.9a2.5 2.5 0 0 1-2.49-2.27L10.23 23.7H7.9a1.5 1.5 0 0 1-.95-2.66l16.1-13.2Zm.95 3.1L12.1 20.7h.87l1.4 15.3h8.13v-7.69a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V36h8.13l1.4-15.3h.87L24 10.94Z"></path>
      </svg>
    </div>
  );
};

export default HomeIcon;
