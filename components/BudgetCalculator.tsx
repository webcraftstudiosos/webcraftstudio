"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, Check, Calculator } from "lucide-react";
import { siteTypes, budgetExtras } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { AnimatedPrice } from "@/components/ui/AnimatedPrice";
import { formatCurrency, cn } from "@/lib/utils";

export function BudgetCalculator() {
  const [typeId, setTypeId] = useState(siteTypes[0].id);
  const [extraPages, setExtraPages] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const siteType = useMemo(
    () => siteTypes.find((type) => type.id === typeId) ?? siteTypes[0],
    [typeId]
  );

  const extrasTotal = useMemo(
    () =>
      budgetExtras
        .filter((extra) => selectedExtras.includes(extra.id))
        .reduce((sum, extra) => sum + extra.price, 0),
    [selectedExtras]
  );

  const pagesTotal = extraPages * siteType.pricePerExtraPage;
  const total = siteType.basePrice + pagesTotal + extrasTotal;
  const totalPages = siteType.basePages + extraPages;

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
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
                1. Tipo de sitio
              </h3>
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                role="radiogroup"
                aria-label="Tipo de sitio web"
              >
                {siteTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    role="radio"
                    aria-checked={typeId === type.id}
                    onClick={() => setTypeId(type.id)}
                    className={cn(
                      "glass rounded-2xl p-5 text-left transition-all duration-300",
                      typeId === type.id
                        ? "border-primary-light/60 bg-surface-hover ring-2 ring-primary/50"
                        : "hover:border-border-strong"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-text">
                        {type.label}
                      </span>
                      {typeId === type.id && (
                        <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                          <Check className="size-3.5 text-white" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-text-muted">{type.description}</p>
                    <p className="mt-3 text-sm font-semibold text-primary-light">
                      Desde {formatCurrency(type.basePrice)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
                2. Páginas
              </h3>
              <div className="glass flex items-center justify-between rounded-2xl p-5">
                <div>
                  <p className="font-medium text-text">
                    {siteType.basePages} {siteType.basePages === 1 ? "página incluida" : "páginas incluidas"} + {extraPages} {extraPages === 1 ? "adicional" : "adicionales"}
                  </p>
                  <p className="text-sm text-text-muted">
                    Total: {totalPages} {totalPages === 1 ? "página" : "páginas"} · {formatCurrency(siteType.pricePerExtraPage)} por página extra
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setExtraPages((p) => Math.max(0, p - 1))}
                    aria-label="Quitar página adicional"
                    className="flex size-9 items-center justify-center rounded-full border border-border bg-bg/40 text-text transition-colors hover:border-border-strong hover:bg-surface-hover disabled:opacity-40"
                    disabled={extraPages === 0}
                  >
                    <Minus className="size-4" aria-hidden="true" />
                  </button>
                  <span className="w-6 text-center font-display font-bold text-text" aria-live="polite">
                    {extraPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtraPages((p) => Math.min(30, p + 1))}
                    aria-label="Añadir página adicional"
                    className="flex size-9 items-center justify-center rounded-full border border-border bg-bg/40 text-text transition-colors hover:border-border-strong hover:bg-surface-hover"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
                3. Extras
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
                            +{formatCurrency(extra.price)}
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
                  <dt>Tipo de sitio</dt>
                  <dd className="font-medium text-text">{siteType.label}</dd>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <dt>Páginas</dt>
                  <dd className="font-medium text-text">{totalPages}</dd>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <dt>Extras</dt>
                  <dd className="font-medium text-text">{selectedExtras.length}</dd>
                </div>
              </dl>

              <div className="border-t border-border pt-5">
                <p className="text-sm text-text-muted">Estimación total</p>
                <p className="font-display text-4xl font-extrabold">
                  <AnimatedPrice value={total} className="text-gradient" />
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Precio estimado. La cotización final se confirma tras el brief.
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
