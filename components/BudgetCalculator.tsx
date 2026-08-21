"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check } from "lucide-react";
import { webPackage, budgetExtras } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { AnimatedPrice } from "@/components/ui/AnimatedPrice";
import { formatCurrency, cn } from "@/lib/utils";

export function BudgetCalculator() {
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const { setupExtras, monthlyExtras } = useMemo(() => {
    const chosen = budgetExtras.filter((extra) => selectedExtras.includes(extra.id));
    return {
      setupExtras: chosen.filter((e) => !e.recurring).reduce((sum, e) => sum + e.price, 0),
      monthlyExtras: chosen.filter((e) => e.recurring).reduce((sum, e) => sum + e.price, 0),
    };
  }, [selectedExtras]);

  const setupTotal = webPackage.setupPrice + setupExtras;
  const monthlyTotal = webPackage.monthlyPrice + monthlyExtras;

  function toggleExtra(id: string) {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  }

  return (
    <section id="presupuesto" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Calculadora"
          title="Estima tu inversión en segundos"
          description="Ajusta las opciones a las necesidades de tu proyecto y obtén una estimación en tiempo real. Sin compromiso."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <div className="flex flex-col gap-8">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-text">
                  {webPackage.label}
                </span>
                <span className="text-sm font-semibold text-primary-light">
                  {formatCurrency(webPackage.setupPrice)} alta + {formatCurrency(webPackage.monthlyPrice)}/mes
                </span>
              </div>
              <p className="mt-1 text-sm text-text-muted">{webPackage.description}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-border pt-4 sm:grid-cols-2">
                {webPackage.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
                Extras
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {budgetExtras.map((extra) => {
                  const checked = selectedExtras.includes(extra.id);
                  return (
                    <label
                      key={extra.id}
                      className={cn(
                        "glass flex cursor-pointer items-start gap-3 rounded-xl p-4 transition-all duration-300",
                        checked
                          ? "border-primary-light/60 bg-surface-hover"
                          : "hover:border-border-strong"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleExtra(extra.id)}
                        className="mt-1 size-4 shrink-0 rounded border-border-strong bg-bg text-primary accent-primary"
                      />
                      <span>
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-text">
                            {extra.label}
                          </span>
                          <span className="whitespace-nowrap text-xs font-semibold text-primary-light">
                            +{formatCurrency(extra.price)}{extra.recurring ? "/mes" : ""}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-xs text-text-muted">
                          {extra.description}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <GlassCard className="flex flex-col gap-5 p-6">
              <div className="flex items-center gap-2 text-primary-light">
                <Calculator className="size-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Resumen
                </span>
              </div>

              <dl className="flex flex-col gap-2 text-sm">
                <div className="flex items-center justify-between text-text-muted">
                  <dt>Paquete</dt>
                  <dd className="font-medium text-text">{webPackage.label}</dd>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <dt>Extras</dt>
                  <dd className="font-medium text-text">{selectedExtras.length}</dd>
                </div>
              </dl>

              <div className="border-t border-border pt-5">
                <p className="text-sm text-text-muted">Alta única</p>
                <p className="font-display text-3xl font-extrabold">
                  <AnimatedPrice value={setupTotal} className="text-gradient" />
                </p>
                <p className="mt-4 text-sm text-text-muted">Cuota mensual</p>
                <p className="font-display text-3xl font-extrabold">
                  <AnimatedPrice value={monthlyTotal} className="text-gradient" />
                  <span className="text-base font-semibold text-text-faint"> /mes</span>
                </p>
                <p className="mt-3 text-xs text-text-faint">
                  Precio estimado. Sin permanencia. La cotización final se confirma después de hablar contigo sobre tu proyecto.
                </p>
              </div>

              <Button href="#contacto" size="lg" showArrow className="w-full">
                Solicitar Cotización Detallada
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
