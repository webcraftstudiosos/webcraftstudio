"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Gauge, Workflow, Check, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const icons: Record<ServiceIcon, LucideIcon> = {
  Code2,
  Palette,
  Gauge,
  Workflow,
};

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu proyecto digital necesita"
          description="Un equipo multidisciplinario que cubre cada etapa del desarrollo de tu producto, de principio a fin."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="group flex h-full flex-col gap-5 p-6 hover:-translate-y-1.5">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary-light ring-1 ring-inset ring-border transition-transform duration-300 group-hover:scale-110 group-hover:text-white group-hover:from-primary group-hover:to-secondary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-text">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-primary-light"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
