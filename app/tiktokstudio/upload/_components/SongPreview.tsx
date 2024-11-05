// React
import { useState } from "react";

// Next
import Image from "next/image";

// Components
import Button from "../../_components/Button";

// Icons
import BookmarkIcon from "@/app/icons/BookmarkIcon";
import PlayIcon from "@/app/icons/PlayIcon";

export default function SongPreview() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div
      className="flex max-w-72 justify-between items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-3 items-center flex-1 min-w-0">
        <div className="relative cursor-pointer">
          <Image
            className="w-12 rounded-sm"
            src={"/Disturbed_Cover.jpeg"}
            width={100}
            height={100}
            alt="Disturbed Song Cover"
          />
          {isHovered && (
            <div className="absolute left-0 top-0 w-full h-full bg-black/50 grid place-content-center">
              <PlayIcon fill="var(--foreground)" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col min-w-0 text-black">
          <p className="font-medium text-sm truncate">
            The Sound of Silence (CYRIL Remix)
          </p>
          <p className="text-xs truncate">
            <span>01:00</span> · <span>Disturbed</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 whitespace-nowrap flex-shrink-0">
        {isHovered && (
          <>
            <Button intent="secondary" className="py-1 px-6">
              Use
            </Button>
            <BookmarkIcon
              className="cursor-pointer"
              onClick={handleToggleBookmark}
              pathFill={isBookmarked ? "#000" : "none"}
              strokeFill="#000"
              width={20}
              height={20}
            />
          </>
        )}
      </div>
    </div>
  );
}
