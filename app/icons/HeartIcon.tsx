const HeartIcon = ({
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
        <g filter="url(#Icon_Color-Like_Shadow_svg__a)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 4.5c6 0 9 4 9 4s3-4 9-4c7 0 12 5.5 12 12.5 0 8-6.54 15.13-12.5 20.5C28.82 40.81 26 43 24 43s-4.9-2.2-8.5-5.5C9.64 32.13 3 25 3 17 3 10 8 4.5 15 4.5Z"
            fill="#fff"
            fillOpacity="0.9"
          ></path>
        </g>
        <path
          d="M4.8 24.4c2.38 5 6.72 9.45 10.7 13.1C19.1 40.8 22 43 24 43s4.82-2.19 8.5-5.5C38.46 32.13 45 25 45 17v-.52C41.12 27.32 27.35 37 23.5 37c-2.87 0-12.28-5.37-18.7-12.6Z"
          fill="#000"
          fillOpacity="0.03"
        ></path>
        <defs>
          <filter
            id="Icon_Color-Like_Shadow_svg__a"
            x="0.6"
            y="3.3"
            width="46.8"
            height="43.3"
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
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2881"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2881"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default HeartIcon;
