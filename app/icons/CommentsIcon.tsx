const CommentsIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <path
          fill="#fff"
          d="M24 7.5C14.62 7.5 7.5 13.79 7.5 21S14.62 34.5 24 34.5h3.5v3.98a35.74 35.74 0 0 0 7.67-5.9c3.1-3.21 5.33-7.1 5.33-11.58 0-7.21-7.12-13.5-16.5-13.5ZM4.5 21c0-9.36 9-16.5 19.5-16.5S43.5 11.64 43.5 21c0 5.53-2.77 10.13-6.17 13.67a40.15 40.15 0 0 1-10.66 7.67A1.5 1.5 0 0 1 24.5 41v-3.5H24C13.5 37.5 4.5 30.36 4.5 21Z"
        ></path>
        <path
          fill="#fff"
          d="M17 21.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM27 21.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM37 21.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        ></path>
      </svg>
    </div>
  );
};

export default CommentsIcon;
