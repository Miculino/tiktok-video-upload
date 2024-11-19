// React
import { useRef, useState, useEffect } from "react";

// Styles
import styles from "./vertical-playhead.module.scss";

// CLSX
import clsx from "clsx";

export default function VerticalPlayhead() {
  const [isMovable, setIsMovable] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  const verticalPlayheadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isMovable) {
        setPosition((prev) => {
          const newPos = prev + e.movementX;
          const container = verticalPlayheadRef.current?.parentElement;
          if (!container) return prev;
          const bounds = container.getBoundingClientRect();
          console.log(bounds);
          return Math.max(0, Math.min(newPos, bounds.width));
        });
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
  }, [isMovable]);

  return (
    <div
      ref={verticalPlayheadRef}
      onMouseDown={() => setIsMovable(true)}
      className={clsx(styles.verticalPlayhead)}
      style={{
        transform: `translateX(${position}px)`,
        position: "absolute",
        top: 0,
        bottom: 0,
      }}
    >
      <div className={clsx(styles.verticalPlayhead__cursor)}></div>
    </div>
  );
}
