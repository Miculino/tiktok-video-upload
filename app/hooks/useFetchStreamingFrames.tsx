// React
import { useEffect, useState } from "react";

// Utils
import debounce from "../utils/debounce";

export default function useFetchStreamingFrames(
  s3_video_url: string | undefined,
  isVideoModalToggled: boolean,
  timelineZoomLevel: 7 | 14 | 21
) {
  const [videoTimelineFrames, setVideoTimelineFrames] = useState<string[]>([]);

  const fetchTimelineFrames = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_FRAMES_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timelineZoomLevel,
      }),
    });

    // Reset state so new frames don't get appended to existing ones
    setVideoTimelineFrames([]);

    if (res.body) {
      const reader = res.body.getReader();
      let buffer = new Uint8Array();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Append new data to the buffer
        const newBuffer = new Uint8Array(buffer.length + value.length);
        newBuffer.set(buffer);
        newBuffer.set(value, buffer.length);
        buffer = newBuffer;

        // Look for frame boundary markers
        let frameMatch;

        // Loop through buffer looking for frame boundaries
        while (
          (frameMatch =
            /--frame\r\nContent-Type: image\/jpeg\r\nContent-Length: (\d+)\r\n\r\n/.exec(
              new TextDecoder().decode(buffer)
            )) !== null
        ) {
          const headerLength = frameMatch.index + frameMatch[0].length;
          const contentLength = parseInt(frameMatch[1]);

          // Check if we have a full frame (header + content + boundary)
          if (buffer.length >= headerLength + contentLength + 2) {
            const imageData = buffer.slice(
              headerLength,
              headerLength + contentLength
            );
            const blob = new Blob([imageData], { type: "image/jpeg" });
            const blobUrl = URL.createObjectURL(blob);

            // Add the frame URL to the timeline frames state
            setVideoTimelineFrames((prevFrames) => [...prevFrames, blobUrl]);

            // Remove processed data from buffer and continue looking for next frame
            buffer = buffer.slice(headerLength + contentLength + 2);
          } else {
            break; // Exit the inner loop if the frame isn't fully received yet
          }
        }
      }
    }
  };

  useEffect(() => {
    // Using the debounced function here
    const debouncedFetch = debounce(() => {
      if (isVideoModalToggled && s3_video_url) {
        fetchTimelineFrames();
      }
    }, 500); // Adjust debounce time as needed

    debouncedFetch(); // Call the debounced function
  }, [s3_video_url, isVideoModalToggled, timelineZoomLevel]);

  return videoTimelineFrames;
}
