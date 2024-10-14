import React from "react";

const InspirationsIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        color="inherit"
        fontSize="inherit"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path d="M14.8 9.68a1.2 1.2 0 0 1-1.63-.44l-1.8-3.12a1.2 1.2 0 0 1 .44-1.64l1.38-.8a1.2 1.2 0 0 1 1.64.44l1.8 3.12c.33.58.14 1.3-.44 1.64l-1.38.8Zm-2.54 17.18a11.6 11.6 0 1 1 20.63-1.06l2.5 4.33a2 2 0 0 1-.73 2.73l-8.32 4.8a2 2 0 0 1-2.73-.73l-2.5-4.33a11.59 11.59 0 0 1-8.85-5.74Zm6.24-12.38a7.6 7.6 0 0 0 3.8 14.18 2 2 0 0 1 1.73 1l2.05 3.54 4.85-2.8-2.05-3.54a2 2 0 0 1 0-2A7.6 7.6 0 0 0 18.5 14.48Zm-9.35 2.1a1.2 1.2 0 0 1-1.47.85L4.2 16.5a1.2 1.2 0 0 1-.84-1.47l.41-1.54a1.2 1.2 0 0 1 1.47-.85l3.48.93c.64.17 1.02.83.85 1.47l-.42 1.55Zm14.07-9.62a1.2 1.2 0 0 1-.85-1.47L23.31 2a1.2 1.2 0 0 1 1.47-.85l1.54.42c.64.17 1.02.83.85 1.47l-.93 3.47a1.2 1.2 0 0 1-1.47.85l-1.55-.41Zm3.62 32.96a1.2 1.2 0 0 1 .44-1.64l7.27-4.2a1.2 1.2 0 0 1 1.64.44l.8 1.38c.33.58.14 1.31-.44 1.64l-7.27 4.2a1.2 1.2 0 0 1-1.64-.44l-.8-1.38Zm4.23 3.33a1.2 1.2 0 0 1 .44-1.64l3.98-2.3a1.2 1.2 0 0 1 1.64.44l.8 1.38c.33.58.14 1.31-.44 1.64l-3.98 2.3a1.2 1.2 0 0 1-1.64-.44l-.8-1.38Zm2.86-37.32a1.2 1.2 0 0 1 1.7 0l1.13 1.13a1.2 1.2 0 0 1 0 1.7L34.2 11.3a1.2 1.2 0 0 1-1.7 0l-1.13-1.13a1.2 1.2 0 0 1 0-1.7l2.55-2.54Zm-29 22.36a1.2 1.2 0 0 1-1.47-.85l-.41-1.55c-.18-.64.2-1.3.84-1.47l3.48-.93c.64-.17 1.3.21 1.47.85l.42 1.55c.17.64-.21 1.3-.85 1.47l-3.48.93Z"></path>
      </svg>
    </div>
  );
};

export default InspirationsIcon;
