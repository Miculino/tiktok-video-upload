// CLSX
import { clsx } from "clsx";

const ShareIcon = ({
  className,
  width = "1em",
  height = "1em",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className={clsx(className)}>
      <svg
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        className={className}
        {...props}
      >
        <g clip-path="url(#Icon_Color-Share_Shadow_svg__a)">
          <g filter="url(#Icon_Color-Share_Shadow_svg__b)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.32 8.18a1.44 1.44 0 0 1 2.43-1.05l15.96 15.2a2.88 2.88 0 0 1-.09 4.26L28.71 40.47c-.93.81-2.39.15-2.39-1.09v-7.42S9.8 29.98 4.48 39.7c-.5.91-2.42 1.23-2.03-3.3 1.64-8.34 4.99-20.35 23.87-20.35V8.18Z"
              fill="#fff"
              fill-opacity="0.9"
            ></path>
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m37.72 15.73 3.16 6.3a2.4 2.4 0 0 1-.57 2.89L26.43 36.99s-.67 3.32 1.33 3.32c1.99 0 17.94-14.62 17.94-14.62s.66-2-1.33-3.98c-2-2-6.65-5.98-6.65-5.98Z"
            fill="#000"
            fill-opacity="0.03"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.32 15.77v17.27S10.5 30.83 5.54 38.37c-4.77 7.26-4.33-8.2 2.85-15.9 7.18-7.7 17.93-6.7 17.93-6.7Z"
            fill="url(#Icon_Color-Share_Shadow_svg__c)"
            fill-opacity="0.09"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="Icon_Color-Share_Shadow_svg__c"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-113.05 28.08 13.22)scale(21.1474 20.788)"
          >
            <stop></stop>
            <stop offset="1" stop-opacity="0.01"></stop>
            <stop offset="1" stop-opacity="0.01"></stop>
          </radialGradient>
          <clipPath id="Icon_Color-Share_Shadow_svg__a">
            <path fill="#fff" d="M0 0h48v48H0z"></path>
          </clipPath>
          <filter
            id="Icon_Color-Share_Shadow_svg__b"
            x="0"
            y="5.53"
            width="48.01"
            height="38.89"
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
              result="effect1_dropShadow_1_2865"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2865"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ShareIcon;
