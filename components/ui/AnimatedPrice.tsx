"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { formatCurrency, cn } from "@/lib/utils";

export function AnimatedPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { duration: 600, bounce: 0.15 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatCurrency(Math.round(latest));
      }
    });
  }, [springValue]);

  return (
    <span className="relative inline-block">
      <span ref={ref} aria-hidden="true" className={cn(className)}>
        {formatCurrency(value)}
      </span>
      <span className="sr-only" aria-live="polite">
        {formatCurrency(value)}
      </span>
    </span>
  );
}
