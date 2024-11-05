import { SVGProps } from "react";

interface RedoIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const RedoIcon: React.FC<RedoIconProps> = ({
  className,
  width,
  height,
  pathFill = "var(--foreground)",
  ...props
}) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path
          d="M9.27979 1.50601C9.15596 1.36979 9.166 1.15897 9.30221 1.03514L9.79551 0.586689C9.93173 0.462853 10.1425 0.472892 10.2664 0.609111L13.5793 4.25336C13.6949 4.3805 13.6949 4.57466 13.5793 4.7018L10.2664 8.34605C10.1425 8.48227 9.93173 8.49231 9.79551 8.36847L9.30221 7.92002C9.166 7.79619 9.15596 7.58537 9.27979 7.44915L11.3752 5.14425H5.04886C3.11586 5.14425 1.54886 6.71125 1.54886 8.64425C1.54886 10.5772 3.11586 12.1442 5.04886 12.1442H8.71553C8.89962 12.1442 9.04886 12.2935 9.04886 12.4776V13.1442C9.04886 13.3283 8.89962 13.4776 8.71553 13.4776H5.04886C2.37948 13.4776 0.215527 11.3136 0.215527 8.64425C0.215527 5.97487 2.37948 3.81092 5.04886 3.81092H11.3752L9.27979 1.50601Z"
          fill="#161823"
          fill-opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default RedoIcon;
