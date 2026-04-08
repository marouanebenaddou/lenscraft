"use client";
import { useRef, useEffect, useState, CSSProperties, ReactNode } from "react";

type AnimType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";

export function Animate({
  children,
  type = "fadeInUp",
  delay = 0,
  duration = 0.65,
  threshold = 0.12,
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
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
