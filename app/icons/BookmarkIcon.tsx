interface BookmarkIconProps extends React.SVGProps<SVGSVGElement> {
  pathFill?: string;
  strokeFill?: string;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({
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
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path
          d="M23 4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V28C7.00009 28.1785 7.04793 28.3537 7.13857 28.5074C7.22921 28.6611 7.35934 28.7878 7.51545 28.8743C7.67156 28.9607 7.84797 29.0039 8.02637 28.9992C8.20477 28.9944 8.37866 28.9421 8.53 28.8475L16 24.1787L23.4713 28.8475C23.6226 28.9418 23.7963 28.9939 23.9745 28.9984C24.1528 29.0029 24.3289 28.9598 24.4849 28.8733C24.6408 28.7869 24.7707 28.6603 24.8613 28.5068C24.9519 28.3532 24.9998 28.1783 25 28V6C25 5.46957 24.7893 4.96086 24.4142 4.58579C24.0391 4.21071 23.5304 4 23 4Z"
          fill={pathFill}
          stroke={strokeFill}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default BookmarkIcon;
