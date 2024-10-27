import { useEffect, MutableRefObject, useState } from "react";

export default function useVideoDuration(
  videoRef: MutableRefObject<HTMLAudioElement | null>,
  videoFileURL: string | undefined
) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        const totalSeconds = videoRef.current.duration;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setSeconds(seconds);
        setMinutes(minutes);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
      // Cleanup URL when component unmounts
      if (videoFileURL) {
        URL.revokeObjectURL(videoFileURL);
      }
    };
  }, []);

  return [seconds, minutes];
}
