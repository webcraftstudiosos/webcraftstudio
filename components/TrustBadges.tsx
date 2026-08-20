"use client";

import { motion } from "framer-motion";
import { Code2, Clock, ShieldCheck, MessagesSquare } from "lucide-react";
import { trustBadges, type TrustBadge } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const icons: Record<TrustBadge["icon"], React.ComponentType<{ className?: string }>> = {
  Code2,
  Clock,
  ShieldCheck,
  MessagesSquare,
};

export function TrustBadges() {
  return (
    <section id="garantias" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Compromisos"
          title="Por qué trabajar con nosotros"
          description="Estándares claros que aplicamos en cada proyecto, no promesas vacías."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, index) => {
            const Icon = icons[badge.icon];
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              >
                <GlassCard className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Icon className="size-5 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-text">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-text-muted">{badge.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
