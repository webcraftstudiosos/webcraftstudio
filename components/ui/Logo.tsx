import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text",
        className
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0 rounded-lg shadow-[0_0_20px_-4px_rgba(77,127,255,0.8)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
        <path
          d="M8 11.5 L11.5 21 L16 13 L20.5 21 L24 11.5"
          fill="none"
          stroke="white"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      WebcraftStudio<span className="text-gradient">SOS</span>
    </span>
  );
}
