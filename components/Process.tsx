"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";
import { processSteps, type ProcessIcon } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const icons: Record<ProcessIcon, LucideIcon> = {
  Search,
  PenTool,
  Code2,
  Rocket,
  LifeBuoy,
};

export function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Proceso"
          title="Así trabajamos, paso a paso"
          description="Un método claro y transparente que lleva tu proyecto del concepto al lanzamiento, sin sorpresas en el camino."
        />

        <div className="relative mt-16 w-full max-w-3xl">
          <div
            className="absolute left-7 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:block"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-6">
            {processSteps.map((step, index) => {
              const Icon = icons[step.icon];
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard className="flex items-start gap-5 p-6">
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_20px_-4px_rgba(77,127,255,0.7)]">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-sm font-bold text-primary-light">
                          {step.number}
                        </span>
                        <h3 className="font-display text-lg font-bold text-text">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm text-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
