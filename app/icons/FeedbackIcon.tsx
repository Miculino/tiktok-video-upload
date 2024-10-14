import React from "react";

const FeedbackIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        data-tt="Sidebar_index_IconQA"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.12 16.06c-.9 0-1.74.59-2.3 1.86-.1.25-.38.4-.64.31l-2.85-.95a.48.48 0 01-.3-.63c.9-2.28 2.86-4.59 6.09-4.59 3.33 0 6.02 2.7 6.02 6.03 0 1.94-1.18 3.54-2.4 4.56a7.76 7.76 0 01-4.13 1.78.47.47 0 01-.5-.48v-3c0-.27.23-.5.5-.56a4.07 4.07 0 001.57-.82c.74-.61.96-1.2.96-1.48 0-1.12-.9-2.03-2.02-2.03z"
        ></path>
        <path d="M26 28.06a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 9.25C4 6.9 5.9 5 8.25 5h31.5C42.1 5 44 6.9 44 9.25v23.63c0 2.34-1.9 4.24-4.25 4.24H14.7l-7.29 7.3A2 2 0 014 43V9.25zm4 28.92l4.46-4.46a2 2 0 011.41-.59h25.88c.14 0 .25-.1.25-.24V9.25a.25.25 0 00-.25-.25H8.25a.25.25 0 00-.25.25v28.92z"
        ></path>
      </svg>
    </div>
  );
};

export default FeedbackIcon;
