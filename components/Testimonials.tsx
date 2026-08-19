"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Testimonios"
          title="La confianza de nuestros clientes"
          description="Marcas que decidieron elevar su presencia digital con Webcraft Studios."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col gap-5 p-6">
                <Quote className="size-8 text-primary/40" aria-hidden="true" />

                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm text-text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
