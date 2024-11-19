// Styles
import styles from "./vertical-playhead.module.scss";

// CLSX
import clsx from "clsx";

export default function VerticalPlayhead() {
  return (
    <div className={clsx(styles.verticalPlayhead)}>
      <div className={clsx(styles.verticalPlayhead__cursor)}></div>
    </div>
  );
}
