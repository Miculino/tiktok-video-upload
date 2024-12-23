// CLSX
import clsx from "clsx";

const VideoSizeDurationIcon = ({
  className,
  width = "1em",
  height = "1em",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className={clsx(className)}>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 9.60489L22.5915 6.46345C23.1889 6.05476 23.9998 6.48248 23.9998 7.20623V16.7936C23.9998 17.5174 23.1889 17.9451 22.5915 17.5364L18.0002 14.395L18.0001 12.0003L21.9995 14.7085V9.29199L18.0001 12.0003L18 9.60489Z"
          fill="black"
          fillOpacity="0.32"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 6.5C1 4.84315 2.34315 3.5 4 3.5H15C16.6569 3.5 18 4.84315 18 6.5V17.5C18 19.1569 16.6569 20.5 15 20.5H4C2.34315 20.5 1 19.1569 1 17.5V6.5ZM4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5Z"
          fill="black"
          fillOpacity="0.32"
        />
      </svg>
    </div>
  );
};

export default VideoSizeDurationIcon;
