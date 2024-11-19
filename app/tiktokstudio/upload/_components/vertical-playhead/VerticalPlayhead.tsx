// React
import { useRef, useState, useEffect } from "react";

// Styles
import styles from "./vertical-playhead.module.scss";

// Zustand
import { useVideoEditorStore } from "@/app/stores/videoEditorStore";

// CLSX
import clsx from "clsx";

export default function VerticalPlayhead() {
  const [isMovable, setIsMovable] = useState<boolean>(false);

  const verticalPlayheadRef = useRef<HTMLDivElement>(null);

  const { setCursorPosition, cursorPosition } = useVideoEditorStore();

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isMovable) {
        const newCursorPos = cursorPosition + e.movementX;
        const timelineContainer = verticalPlayheadRef.current?.parentElement;

        if (!timelineContainer) return;

        const timelineContainerBounds =
          timelineContainer.getBoundingClientRect();

        const calculatedNewCursorPosition = Math.max(
          0,
          Math.min(newCursorPos, timelineContainerBounds.width)
        );

        setCursorPosition(calculatedNewCursorPosition);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsMovable(false);
    };

    if (isMovable) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isMovable, setCursorPosition, cursorPosition]);

  return (
    <div
      ref={verticalPlayheadRef}
      onMouseDown={() => setIsMovable(true)}
      className={clsx(styles.verticalPlayhead, "cursor-pointer")}
      style={{
        transform: `translateX(${cursorPosition}px)`,
        position: "absolute",
        top: 0,
        bottom: 0,
      }}
    >
      <div className={clsx(styles.verticalPlayhead__cursor)}></div>
    </div>
  );
}
