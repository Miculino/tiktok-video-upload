const PlusCircleIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <rect
          x="0.717957"
          y="0.794922"
          width="14.359"
          height="14.359"
          rx="7.17949"
          fill="#FE2C55"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.89742 4.38477C7.50091 4.38477 7.17947 4.7062 7.17947 5.10271V7.25656H5.02563C4.62911 7.25656 4.30768 7.578 4.30768 7.97451C4.30768 8.37102 4.62911 8.69246 5.02563 8.69246H7.17947V10.8463C7.17947 11.2428 7.50091 11.5643 7.89742 11.5643C8.29393 11.5643 8.61537 11.2428 8.61537 10.8463V8.69246H10.7692C11.1657 8.69246 11.4872 8.37102 11.4872 7.97451C11.4872 7.578 11.1657 7.25656 10.7692 7.25656H8.61537V5.10271C8.61537 4.7062 8.29393 4.38477 7.89742 4.38477Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default PlusCircleIcon;
