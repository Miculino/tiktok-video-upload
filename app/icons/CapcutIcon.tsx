const CapcutIcon = ({
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
        <path d="M41.7 15.66v-5.41L35 13.67v-.2C35 11.3 33.41 10 31.11 10H9.89C7.47 10 6 11.3 6 13.46v5.47l9.37 4.72L6 28.4v5.46C6 36 7.47 37.3 9.9 37.3h21.2c2.3 0 3.9-1.3 3.9-3.42v-.28l6.7 3.46v-5.5l-15.57-7.9 15.56-7.99ZM20.72 26.34l11.5 5.86H9.19l11.55-5.86Zm11.42-11.25-11.42 5.83-11.55-5.83h22.97Z"></path>
      </svg>
    </div>
  );
};

export default CapcutIcon;
