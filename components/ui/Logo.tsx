import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text",
        className
      )}
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-lg shadow-[0_0_20px_-4px_rgba(77,127,255,0.8)]"
        aria-hidden="true"
        priority
      />
      WebcraftStudio<span className="text-gradient">SOS</span>
    </span>
  );
}
