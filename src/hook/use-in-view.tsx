"use client";
import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * @param {Object}   options – IntersectionObserver options
 * @return {[ref, isInView]} –
 *   ref ➜ attach to the element you want to watch
 *   isInView ➜ boolean that flips true when element crosses the threshold
 */
export default function useInView(options = { threshold: 0.5 }) {
  const ref = useRef(null) as any;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );

    observer.observe(node);

    return () => observer.disconnect(); // cleanup
  }, [options]);

  return [ref, isInView];
}
