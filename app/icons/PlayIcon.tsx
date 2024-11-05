interface PlayIconProps extends React.SVGProps<SVGSVGElement> {
  pathFill?: string;
  strokeFill?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({
  className,
  width,
  height,
  pathFill = "var(--foreground)",
  strokeFill = "var(--foreground)",
  ...props
}) => {
  return (
    <div className={className}>
      <svg
        font-size="20"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path d="M45.08 25.84a4.5 4.5 0 0 0 0-3.67 4.82 4.82 0 0 0-1.75-1.91c-.7-.5-1.64-1.04-2.78-1.69L18.87 6.14c-1.12-.65-2.06-1.19-2.83-1.54a4.82 4.82 0 0 0-2.52-.55 4.5 4.5 0 0 0-3.16 1.84c-.53.72-.7 1.6-.78 2.45-.08.85-.08 1.93-.08 3.22v24.88c0 1.3 0 2.37.08 3.22.08.86.25 1.73.78 2.45a4.5 4.5 0 0 0 3.16 1.84c.9.1 1.74-.2 2.52-.55.77-.35 1.7-.89 2.83-1.53l21.68-12.44c1.14-.65 2.08-1.2 2.78-1.69.7-.5 1.38-1.08 1.75-1.9Z"></path>
      </svg>
    </div>
  );
};

export default PlayIcon;
