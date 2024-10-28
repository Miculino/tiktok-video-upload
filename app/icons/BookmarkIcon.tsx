const BookmarkIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <g filter="url(#Icon_Color-Bookmark_Shadow_svg__a)">
          <path
            d="M8 9a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v30.26a2 2 0 0 1-3.11 1.66l-12.33-8.24a1 1 0 0 0-1.12 0l-12.33 8.24A2 2 0 0 1 8 39.26V9Z"
            fill="#fff"
            fill-opacity="0.9"
            shape-rendering="crispEdges"
          ></path>
        </g>
        <path
          d="M8.06 8.29C8.02 8.52 8 8.76 8 9v30.26a2 2 0 0 0 3.11 1.66l12.33-8.24a1 1 0 0 1 .82-.13l-.85-.4a2.98 2.98 0 0 0-2.75.13c-1.17.68-2.9 1.7-4.5 2.68-1.18.72-2.86 1.39-4.38 1.92a2.82 2.82 0 0 1-3.72-2.74V8.29ZM24.57 32.7l12.32 8.22A2 2 0 0 0 40 39.26V9a4 4 0 0 0-2.25-3.6c.42.51.67 1.16.67 1.88a234.03 234.03 0 0 1-1.8 26.81 2.92 2.92 0 0 1-4.15 2.27l-7.9-3.67Z"
          fill="#000"
          fill-opacity="0.03"
        ></path>
        <defs>
          <filter
            id="Icon_Color-Bookmark_Shadow_svg__a"
            x="5.6"
            y="3.8"
            width="36.8"
            height="41.06"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1.2"></feOffset>
            <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_54816_3201"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_54816_3201"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BookmarkIcon;
