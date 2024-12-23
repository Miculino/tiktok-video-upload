// CLSX
import clsx from "clsx";

const FileFormatsIcon = ({
  className,
  width,
  height,
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
          d="M6 4C5.72386 4 5.5 4.22386 5.5 4.5V19.5C5.5 19.7761 5.72386 20 6 20H19C19.2761 20 19.5 19.7761 19.5 19.5V10H14C13.4477 10 13 9.55228 13 9V4H6ZM15 5.28398V8H17.9423L15 5.28398ZM3.5 4.5C3.5 3.11929 4.61929 2 6 2H14C14.2514 2 14.4936 2.09468 14.6783 2.2652L21.1783 8.2652C21.3834 8.4545 21.5 8.7209 21.5 9V19.5C21.5 20.8807 20.3807 22 19 22H6C4.61929 22 3.5 20.8807 3.5 19.5V4.5Z"
          fill="black"
          fillOpacity="0.32"
        />
        <path
          d="M14.7826 13.4436C15.0725 13.611 15.0725 14.0293 14.7826 14.1967L10.6522 16.5814C10.3623 16.7487 10 16.5395 10 16.2048V11.4354C10 11.1007 10.3623 10.8916 10.6522 11.0589L14.7826 13.4436Z"
          fill="black"
          fillOpacity="0.32"
        />
      </svg>
    </div>
  );
};

export default FileFormatsIcon;
