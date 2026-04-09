"use client";
import { useRef, useEffect, useState, CSSProperties, ReactNode } from "react";

type AnimType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";

export function Animate({
  children,
  type = "fadeInUp",
  delay = 0,
  duration = 0.65,
  threshold = 0,
  style,
  className,
}: {
  children: ReactNode;
  type?: AnimType;
  delay?: number;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety fallback: reveal after 2.5s regardless
    const timeout = setTimeout(() => setVisible(true), 2500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(timeout);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);

    // If already in view on mount (e.g. anchor jump), trigger immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      clearTimeout(timeout);
      observer.disconnect();
    }

    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${visible ? `anim-${type}` : "anim-pre"} ${className || ""}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
