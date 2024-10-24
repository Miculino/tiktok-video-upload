// CLSX
import { clsx } from "clsx";

const VideoResolutionIcon = ({
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
        className={className}
        {...props}
      >
        <path
          d="M4 2C2.61929 2 1.5 3.11929 1.5 4.5V19.5C1.5 20.8807 2.61929 22 4 22H21C22.3807 22 23.5 20.8807 23.5 19.5V4.5C23.5 3.11929 22.3807 2 21 2H4ZM3.5 4.5C3.5 4.22386 3.72386 4 4 4H21C21.2761 4 21.5 4.22386 21.5 4.5V19.5C21.5 19.7761 21.2761 20 21 20H4C3.72386 20 3.5 19.7761 3.5 19.5V4.5Z"
          fill="black"
          fill-opacity="0.32"
        />
        <path
          d="M6.70094 15.0977C6.22437 15.0977 5.94312 14.793 5.94312 14.4258C5.94312 14.2266 5.99 14.0742 6.08375 13.9062L7.88844 10.6445V10.6133H5.77125C5.39625 10.6133 5.12672 10.3594 5.12672 9.98438C5.12672 9.60938 5.39625 9.36328 5.77125 9.36328H8.57594C9.11109 9.36328 9.53687 9.69531 9.53687 10.2305C9.53687 10.5195 9.44703 10.7852 9.24391 11.1719L7.43922 14.6094C7.25172 14.9688 7.05641 15.0977 6.70094 15.0977ZM10.6406 15C10.1016 15 9.86719 14.6992 9.86719 14.2852C9.86719 13.9805 10.0078 13.7461 10.3203 13.4844L11.8711 12.1562C12.5039 11.6133 12.6836 11.3672 12.6836 11.0312C12.6836 10.6758 12.4102 10.4297 12.0078 10.4297C11.7109 10.4297 11.5078 10.5664 11.2969 10.8711C11.0781 11.1914 10.8789 11.3086 10.5625 11.3086C10.1406 11.3086 9.88281 11.0625 9.88281 10.6641C9.88281 10.5352 9.90625 10.4141 9.95703 10.2969C10.2539 9.625 11.0469 9.20703 12.0312 9.20703C13.4023 9.20703 14.2773 9.89844 14.2773 10.9219C14.2773 11.6797 13.8867 12.0742 13.0117 12.832L11.9844 13.7188V13.75H13.7734C14.1875 13.75 14.4219 13.9961 14.4219 14.375C14.4219 14.7461 14.1875 15 13.7734 15H10.6406ZM17.1936 15.1562C15.6467 15.1562 14.6702 14.0312 14.6702 12.168C14.6702 10.293 15.6584 9.20312 17.1936 9.20312C18.7288 9.20312 19.7131 10.2891 19.7131 12.1641C19.7131 14.0234 18.7405 15.1562 17.1936 15.1562ZM17.1936 13.8828C17.7014 13.8828 18.0256 13.3477 18.0256 12.168C18.0256 10.9844 17.7014 10.4766 17.1936 10.4766C16.6858 10.4766 16.3577 10.9844 16.3577 12.168C16.3577 13.3477 16.6858 13.8828 17.1936 13.8828Z"
          fill="black"
          fill-opacity="0.32"
        />
      </svg>
    </div>
  );
};

export default VideoResolutionIcon;