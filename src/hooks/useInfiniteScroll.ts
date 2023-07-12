import { useCallback, useEffect, useRef, useState } from "react";

const options = {
  threshold: 0.5,
};

const useInfiniteScroll = (callback: () => void, page: number) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const target = entries[0];
      console.log(target.isIntersecting);
      if (!target.isIntersecting) return;
      if (target.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    if (isLoading && sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading, observerCallback]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return sentinelRef;
};

export default useInfiniteScroll;
