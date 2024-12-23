const OriginalSoundIcon = ({
  className,
  width = "1em",
  height = "1em",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      <path d="M41 4.2V34a7 7 0 1 1-7-7h3.6V9.44L18 11.99V37a7 7 0 1 1-7-7h3.6V7.4a1 1 0 0 1 .87-1l24.4-3.18a1 1 0 0 1 1.13 1Z" />
    </svg>
  );
};

export default OriginalSoundIcon;
