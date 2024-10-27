const CheckmarkIcon = ({
  className,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 21.1673C17.5626 21.1673 21.6667 17.0633 21.6667 12.0007C21.6667 6.93804 17.5626 2.83398 12.5 2.83398C7.4374 2.83398 3.33334 6.93804 3.33334 12.0007C3.33334 17.0633 7.4374 21.1673 12.5 21.1673ZM16.8316 8.38921L15.9421 7.83018C15.6941 7.67949 15.3685 7.7524 15.2178 8.00032L11.3872 14.1302L9.2629 11.7045C9.06845 11.4857 8.7379 11.4614 8.52401 11.651L7.72679 12.3462C7.50804 12.5357 7.48373 12.876 7.67817 13.0899L10.7358 16.585C10.9546 16.8378 11.2754 16.9691 11.606 16.9399C11.9414 16.9156 12.2379 16.7309 12.4178 16.4441L17.0018 9.11837C17.1525 8.87046 17.0796 8.54476 16.8316 8.38921Z"
          fill="#00C39B"
        />
      </svg>
    </div>
  );
};

export default CheckmarkIcon;