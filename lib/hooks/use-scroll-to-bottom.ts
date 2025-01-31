import { useState, useEffect, RefObject } from "react";

interface ScrollState {
  isAtBottom: boolean;
  scrollToBottom: () => void;
}

export function useScrollToBottom(
  containerRef: RefObject<HTMLElement>
): ScrollState {
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const threshold = 50; // pixels from bottom to consider "at bottom"
      const isBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        threshold;
      setIsAtBottom(isBottom);
    };

    // Initial check
    handleScroll();

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  return { isAtBottom, scrollToBottom };
}
