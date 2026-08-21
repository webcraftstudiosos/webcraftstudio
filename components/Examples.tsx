"use client";

import { motion } from "framer-motion";
import { Check, Scissors, Stethoscope, Dumbbell, type LucideIcon } from "lucide-react";
import { exampleProjects, type ExampleIcon } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const icons: Record<ExampleIcon, LucideIcon> = {
  Scissors,
  Stethoscope,
  Dumbbell,
};

export function Examples() {
  return (
    <section id="ejemplos" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Ejemplos"
          title="Así de lejos podemos llegar con tus reservas"
          description="Diseños de ejemplo para negocios de servicios: peluquerías, clínicas, centros deportivos y consultas que quieren dejar de gestionar citas por teléfono."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {exampleProjects.map((project, index) => {
            const Icon = icons[project.icon];
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col overflow-hidden">
                <div
                  className="relative flex h-40 items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${project.accent}40, ${project.accentSoft})`,
                  }}
                >
                  <span
                    className="flex size-20 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/15"
                    style={{ backgroundColor: `${project.accent}33` }}
                  >
                    <Icon
                      className="size-10"
                      style={{ color: project.accent }}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-text">
                      {project.name}
                    </h3>
                    <p className="text-sm text-text-faint">{project.location}</p>
                  </div>

                  <p className="text-sm text-text-muted">{project.description}</p>

                  <ul className="mt-auto flex flex-col gap-2">
                    {project.features.map((feature) => (
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
                </div>
              </GlassCard>
            </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-text-faint">
          Diseños de ejemplo creados para mostrar posibilidades. Nombres y ubicaciones ficticios.
        </p>
      </Container>
    </section>
  );
}
