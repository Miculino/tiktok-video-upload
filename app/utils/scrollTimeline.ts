export const scrollTimeline = (
  container: HTMLElement,
  cursorPos: number,
  thresholdLeft: number,
  thresholdRight: number,
  scrollAmount: number
) => {
  const { scrollLeft, clientWidth, scrollWidth } = container;

  if (cursorPos <= thresholdLeft && scrollLeft > 0) {
    container.scrollLeft = Math.max(scrollLeft - scrollAmount, 0);
  } else if (
    cursorPos >= clientWidth - thresholdRight &&
    scrollLeft < scrollWidth - clientWidth
  ) {
    container.scrollLeft = Math.min(
      scrollLeft + scrollAmount,
      scrollWidth - clientWidth
    );
  }
};
