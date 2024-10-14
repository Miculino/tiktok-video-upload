import React from "react";

const CreatorAcademyIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        data-tt="Sidebar_index_IconBookStar"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path d="M14 4a7 7 0 0 0-7 7v26.5a6.5 6.5 0 0 0 6.5 6.5H39a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H14Zm-.5 27c-.89 0-1.73.18-2.5.5V11a3 3 0 0 1 3-3h23v23H13.5Zm0 4H37v5H13.5a2.5 2.5 0 0 1 0-5Zm12.23-22.01a2 2 0 0 0-3.46 0l-1.5 2.57-2.9.63a2 2 0 0 0-1.07 3.29l1.98 2.22-.3 2.96a2 2 0 0 0 2.8 2.03l2.72-1.2 2.72 1.2a2 2 0 0 0 2.8-2.03l-.3-2.96 1.98-2.22a2 2 0 0 0-1.06-3.3l-2.91-.62-1.5-2.57Zm-2.59 4.46.86-1.47.86 1.47a2 2 0 0 0 1.3.95l1.66.36-1.13 1.27a2 2 0 0 0-.5 1.53l.17 1.7-1.55-.7a2 2 0 0 0-1.62 0l-1.55.7.17-1.7a2 2 0 0 0-.5-1.53l-1.13-1.27 1.66-.36a2 2 0 0 0 1.3-.95Z"></path>
      </svg>
    </div>
  );
};

export default CreatorAcademyIcon;
