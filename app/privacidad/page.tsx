import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo WebcraftStudioSOS recopila, usa y protege tus datos personales.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "¿Quién es el responsable?",
    body: [
      "WebcraftStudioSOS es responsable del tratamiento de los datos personales que nos facilitas a través de este sitio web (webcraftstudiosos.com). Puedes contactarnos en contacto@webcraftstudiosos.com para cualquier duda relacionada con tus datos.",
    ],
  },
  {
    title: "¿Qué datos recopilamos?",
    body: [
      "Cuando rellenas el formulario de contacto, recopilamos: nombre, correo electrónico, teléfono (opcional), tipo de proyecto, presupuesto estimado y el mensaje que nos envíes.",
      "Adicionalmente, usamos Vercel Analytics para entender de forma agregada y anónima cómo se usa el sitio (páginas visitadas, procedencia del tráfico). Este servicio no utiliza cookies ni recopila datos que permitan identificarte individualmente.",
    ],
  },
  {
    title: "¿Para qué usamos tus datos?",
    body: [
      "Únicamente para responder a tu consulta, elaborar una propuesta o presupuesto, y mantener comunicación contigo sobre tu proyecto. No usamos tus datos con fines publicitarios ni los cedemos a terceros para marketing.",
    ],
  },
  {
    title: "Base legal",
    body: [
      "El tratamiento se basa en tu consentimiento, otorgado al enviar voluntariamente el formulario de contacto.",
    ],
  },
  {
    title: "¿Con quién compartimos tus datos?",
    body: [
      "Utilizamos proveedores externos que nos ayudan a operar el sitio y comunicarnos contigo:",
      "· Resend, para hacer llegar el mensaje del formulario a nuestro correo.",
      "· Vercel, para alojar el sitio y medir su rendimiento de forma anónima.",
      "Estos proveedores procesan los datos en nuestro nombre y bajo sus propias políticas de seguridad y privacidad.",
    ],
  },
  {
    title: "¿Cuánto tiempo conservamos tus datos?",
    body: [
      "Conservamos los datos del formulario de contacto mientras sea necesario para gestionar tu consulta o proyecto, y como máximo durante 24 meses desde el último contacto, salvo que la ley exija un plazo distinto.",
    ],
  },
  {
    title: "Tus derechos",
    body: [
      "Puedes solicitar en cualquier momento el acceso, rectificación, supresión, oposición o portabilidad de tus datos escribiendo a contacto@webcraftstudiosos.com.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Este sitio no utiliza cookies de seguimiento ni de publicidad. La analítica que empleamos (Vercel Analytics) funciona sin cookies.",
    ],
  },
  {
    title: "Cambios en esta política",
    body: [
      "Podemos actualizar esta política ocasionalmente. La fecha de la última actualización se indica al principio de esta página.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-3xl font-extrabold text-text sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-sm text-text-faint">
              Última actualización: 20 de agosto de 2026
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-lg font-bold text-text">
                    {section.title}
                  </h2>
                  <div className="mt-2 flex flex-col gap-2">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs text-text-faint">
              Este documento tiene fines informativos generales y no constituye
              asesoramiento legal.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
