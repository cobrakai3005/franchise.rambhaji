import { useRef, useState, useEffect } from "react";

export default function AnimatedCounter({ from = 0, to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [val, setVal] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { once: true }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = from;
    const end = to;
    const duration = 2000;
    const step = Math.max(1, (end - start) / (duration / 16));
    let raf;

    function tick() {
      start += step;
      if (start >= end) {
        setVal(end);
        return;
      }
      setVal(Math.floor(start));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}{suffix}
    </span>
  );
}
