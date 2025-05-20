
import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Custom hook for tracking when an element intersects with the viewport
 */
export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = false
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);

      // If triggerOnce is true and the element is intersecting, disconnect the observer
      if (triggerOnce && entry.isIntersecting && observer) {
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isIntersecting];
}
