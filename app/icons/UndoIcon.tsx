import { SVGProps } from "react";

interface UndoIconProps extends SVGProps<SVGSVGElement> {
  pathFill?: string;
}

const UndoIcon: React.FC<UndoIconProps> = ({
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
          d="M4.60302 1.50601C4.72686 1.36979 4.71682 1.15897 4.5806 1.03514L4.0873 0.586689C3.95109 0.462853 3.74027 0.472892 3.61643 0.609111L0.303484 4.25336C0.187901 4.3805 0.187901 4.57466 0.303483 4.7018L3.61643 8.34605C3.74027 8.48227 3.95109 8.49231 4.0873 8.36847L4.5806 7.92002C4.71682 7.79619 4.72686 7.58537 4.60302 7.44915L2.50765 5.14425H8.83395C10.7669 5.14425 12.334 6.71125 12.334 8.64425C12.334 10.5772 10.7669 12.1442 8.83395 12.1442H5.16729C4.98319 12.1442 4.83395 12.2935 4.83395 12.4776V13.1442C4.83395 13.3283 4.98319 13.4776 5.16729 13.4776H8.83395C11.5033 13.4776 13.6673 11.3136 13.6673 8.64425C13.6673 5.97487 11.5033 3.81092 8.83395 3.81092H2.50765L4.60302 1.50601Z"
          fill="#161823"
          fill-opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default UndoIcon;
