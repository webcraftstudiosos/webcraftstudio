"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedNumber({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { duration: 400, bounce: 0.25 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
  }, [springValue]);

  return (
    <span className="relative inline-block">
      <span ref={ref} aria-hidden="true" className={cn(className)}>
        {value}
      </span>
      <span className="sr-only" aria-live="polite">
        {value}
      </span>
    </span>
  );
}
