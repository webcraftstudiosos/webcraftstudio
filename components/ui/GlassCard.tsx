"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "glow-border glass relative overflow-hidden rounded-2xl transition-colors duration-300 hover:bg-surface-hover",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
