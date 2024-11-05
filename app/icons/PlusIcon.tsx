import { SVGProps } from "react";

interface PlusIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  className,
  width,
  height,
  pathFill = "var(--foreground)",
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
        <path d="M22.1 9.6a.5.5 0 0 0-.5.5v11.5H10.1a.5.5 0 0 0-.5.5v3.8c0 .28.22.5.5.5h11.5v11.5c0 .28.22.5.5.5h3.8a.5.5 0 0 0 .5-.5V26.4h11.5a.5.5 0 0 0 .5-.5v-3.8a.5.5 0 0 0-.5-.5H26.4V10.1a.5.5 0 0 0-.5-.5h-3.8Z"></path>
      </svg>
    </div>
  );
};

export default PlusIcon;
