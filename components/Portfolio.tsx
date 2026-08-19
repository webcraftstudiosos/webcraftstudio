"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type Filter = "Todos" | ProjectCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const filteredProjects = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="portafolio" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos que hablan por sí solos"
          description="Una selección de trabajos donde combinamos diseño, ingeniería y estrategia para lograr resultados reales."
        />

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                filter === category
                  ? "border-transparent bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_-4px_rgba(77,127,255,0.7)]"
                  : "border-border bg-surface text-text-muted hover:border-border-strong hover:text-text"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
              >
                <GlassCard className="flex h-full flex-col">
                  <div
                    className={cn(
                      "relative flex aspect-video items-center justify-center bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <span
                      className="font-display text-4xl font-extrabold text-white/90 drop-shadow-lg"
                      aria-hidden="true"
                    >
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-text">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-faint">{project.client}</p>
                    </div>
                    <p className="text-sm text-text-muted">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-bg/40 px-2.5 py-1 text-xs font-medium text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-4 pt-2 text-sm font-semibold">
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-1.5 text-primary-light transition-colors hover:text-text"
                      >
                        Demo
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                      <a
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-text"
                      >
                        Caso de estudio
                        <FileText className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
