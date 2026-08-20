"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { exampleProjects } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Examples() {
  return (
    <section id="ejemplos" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Ejemplos"
          title="Así de lejos podemos llegar con tu web"
          description="Diseños de ejemplo pensados para negocios reales, mostrando lo que se puede construir según tu tipo de negocio."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {exampleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col overflow-hidden">
                <div
                  className="relative flex h-40 flex-col justify-end gap-2 p-4"
                  style={{
                    background: `linear-gradient(160deg, ${project.accentSoft}, ${project.accent}33)`,
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span className="size-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-2">
                    <span
                      className="h-2.5 w-2/3 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="h-2 w-1/2 rounded-full bg-white/25" />
                    <span
                      className="mt-1 h-6 w-24 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                  </div>
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
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-faint">
          Diseños de ejemplo creados para mostrar posibilidades. Nombres y ubicaciones ficticios.
        </p>
      </Container>
    </section>
  );
}
