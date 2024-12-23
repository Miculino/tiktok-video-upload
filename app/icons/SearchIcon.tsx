import { SVGProps } from "react";

interface SearchIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  className,
  width,
  height,
  pathFill = "var(--foreground)",
  ...props
}) => {
  return (
    <div className={className}>
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path
          fill={pathFill}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.83 7.5a14.34 14.34 0 1 1 0 28.68 14.34 14.34 0 0 1 0-28.68Zm0-4a18.33 18.33 0 1 0 11.48 32.64l8.9 8.9a1 1 0 0 0 1.42 0l1.4-1.41a1 1 0 0 0 0-1.42l-8.89-8.9A18.34 18.34 0 0 0 21.83 3.5Z"
        ></path>
      </svg>
    </div>
  );
};

export default SearchIcon;
