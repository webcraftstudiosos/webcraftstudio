import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text",
        className
      )}
    >
      <span
        className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-extrabold text-white shadow-[0_0_20px_-4px_rgba(77,127,255,0.8)]"
        aria-hidden="true"
      >
        W
      </span>
      Webcraft <span className="text-gradient">Studios</span>
    </span>
  );
}
