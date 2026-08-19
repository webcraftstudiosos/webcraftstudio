"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_30px_-5px_rgba(77,127,255,0.65)]",
  outline:
    "glass text-text hover:border-border-strong hover:bg-surface-hover",
  ghost: "text-text-muted hover:text-text",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonAsButton = BaseProps &
  Omit<HTMLMotionProps<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  Omit<HTMLMotionProps<"a">, keyof BaseProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsAnchor, keyof BaseProps>;
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...anchorRest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...(rest as Omit<ButtonAsButton, keyof BaseProps>)}
    >
      {content}
    </motion.button>
  );
}
