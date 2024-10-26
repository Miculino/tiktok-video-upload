const ReplaceIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path d="M24 8c4.06 0 7.76 1.5 10.58 4H29a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4.8A20 20 0 0 0 4.14 26.34c.06.55.58.92 1.12.83l1.98-.34c.54-.09.9-.6.85-1.15A16 16 0 0 1 24 8Zm16 16c0-.57-.03-1.13-.09-1.68-.05-.55.31-1.06.85-1.15l1.98-.34a.96.96 0 0 1 1.12.83A20 20 0 0 1 11 39.2V44a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V33a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.58A16 16 0 0 0 40 24Z"></path>
      </svg>
    </div>
  );
};

export default ReplaceIcon;
