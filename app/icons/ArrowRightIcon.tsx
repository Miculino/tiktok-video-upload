const ArrowRightIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        data-tt="Home_AccountOverviewCard_TUXIcon"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path d="M28.74 24 15.08 10.33a1 1 0 0 1 0-1.41l1.84-1.84a1 1 0 0 1 1.41 0L34.54 23.3a1 1 0 0 1 0 1.42l-16.2 16.21a1 1 0 0 1-1.42 0l-1.84-1.84a1 1 0 0 1 0-1.41L28.74 24Z"></path>
      </svg>
    </div>
  );
};

export default ArrowRightIcon;
