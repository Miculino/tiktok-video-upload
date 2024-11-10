import { SVGProps } from "react";

interface TrashIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <div className={className}>
      <svg
        fontSize="16"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path d="M18 20a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V20ZM27 19a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1h-2Z"></path>
        <path d="M32 8V6a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v2H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.74l1.49 24.97c.19 3.18.28 4.77.96 5.98a6 6 0 0 0 2.6 2.44c1.25.61 2.84.61 6.02.61H29.2c3.18 0 4.77 0 6.02-.6a6 6 0 0 0 2.6-2.45c.68-1.21.77-2.8.96-5.98L40.27 12H43a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H32Zm-5-3a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1h6Zm-15.25 7h24.5l-1.47 24.73c-.1 1.66-.16 2.66-.27 3.41a5 5 0 0 1-.18.83v.01a2 2 0 0 1-.9.83l-.13.04c-.13.02-.34.06-.7.09-.75.06-1.76.06-3.41.06H18.8c-1.65 0-2.66 0-3.42-.06a4.99 4.99 0 0 1-.84-.14 2 2 0 0 1-.87-.82l-.02-.03-.04-.12a5 5 0 0 1-.13-.69c-.1-.75-.17-1.75-.27-3.4L11.75 12Z"></path>
      </svg>
    </div>
  );
};

export default TrashIcon;