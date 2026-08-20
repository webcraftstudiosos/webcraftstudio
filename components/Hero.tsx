"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-[70%] rounded-full bg-primary/25 blur-[120px] animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-[30rem] w-[30rem] translate-x-[10%] rounded-full bg-secondary/25 blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise" aria-hidden="true" />

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-light"
        >
          <Sparkles className="size-3.5" aria-hidden="true" />
          Páginas Web y Tiendas Online
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-6xl lg:text-7xl"
        >
          Tu negocio, con{" "}
          <span className="text-gradient">una web que vende</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-text-muted sm:text-xl"
        >
          Creamos páginas web y tiendas online para negocios locales y
          online: rápidas, fáciles de gestionar y pensadas para conseguir
          más clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contacto" size="lg" showArrow>
            Consultar Proyecto
          </Button>
          <Button href="#proceso" size="lg" variant="outline">
            Nuestro Proceso
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
