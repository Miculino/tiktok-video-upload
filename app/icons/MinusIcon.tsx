import { SVGProps } from "react";

interface MinusIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <div className={className}>
      <svg
        font-size="14"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path d="M6 23a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2Z"></path>
      </svg>
    </div>
  );
};

export default MinusIcon;
