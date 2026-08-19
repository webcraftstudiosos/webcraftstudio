"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { budgetRanges, siteTypes } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: siteTypes[0].label,
  budget: budgetRanges[0],
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Ingresa tu nombre.";
  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ingresa un correo electrónico válido.";
  }
  if (!values.message.trim()) {
    errors.message = "Cuéntanos brevemente sobre tu proyecto.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Danos un poco más de contexto (mínimo 10 caracteres).";
  }
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-text placeholder:text-text-faint transition-colors duration-200 focus:border-primary-light focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("success");
    setValues(initialValues);
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto"
          description="Cuéntanos qué necesitas y te responderemos en menos de 24 horas con una propuesta a medida."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <GlassCard className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 className="size-9" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="max-w-sm text-sm text-text-muted">
                    Gracias por contactarnos. Nuestro equipo revisará tu proyecto y
                    te responderá muy pronto.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-semibold text-primary-light hover:text-text"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={cn(inputClasses, errors.name && "border-red-500/60")}
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn(inputClasses, errors.email && "border-red-500/60")}
                        placeholder="tu@correo.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
                        Teléfono <span className="text-text-faint">(opcional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClasses}
                        placeholder="+34 600 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-text">
                        Tipo de proyecto
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={values.projectType}
                        onChange={(e) => update("projectType", e.target.value)}
                        className={cn(inputClasses, "appearance-none")}
                      >
                        {siteTypes.map((type) => (
                          <option key={type.id} value={type.label} className="bg-bg-alt">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-text">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className={cn(inputClasses, "appearance-none")}
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-bg-alt">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={cn(inputClasses, "resize-none", errors.message && "border-red-500/60")}
                      placeholder="Objetivos, plazos, referencias..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(77,127,255,0.65)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
