import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Datos identificativos y condiciones de uso del sitio web WebcraftStudioSOS.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Datos identificativos",
    body: [
      "En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos:",
      "· Titular: Ivan Aguedo Piedra",
      "· NIF: 39541603A",
      "· Domicilio: Sant Vicenç de Castellet, Barcelona (España)",
      "· Correo electrónico: contacto@webcraftstudiosos.com",
      "· Nombre comercial: WebcraftStudioSOS",
      "· Actividad: Diseño y desarrollo de páginas web y tiendas online",
    ],
  },
  {
    title: "Objeto",
    body: [
      "El presente aviso legal regula el uso del sitio web webcraftstudiosos.com, a través del cual se ofrece información sobre los servicios de diseño y desarrollo web prestados bajo el nombre comercial WebcraftStudioSOS.",
      "El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones incluidas en este aviso legal.",
    ],
  },
  {
    title: "Condiciones de uso",
    body: [
      "El usuario se compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación aplicable, absteniéndose de realizar cualquier acción que pueda dañar, inutilizar o sobrecargar el sitio, o impedir su normal utilización.",
    ],
  },
  {
    title: "Propiedad intelectual",
    body: [
      "Los contenidos de este sitio web (textos, imágenes, diseño y código) son titularidad de Ivan Aguedo Piedra o se utilizan con la correspondiente autorización, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización previa.",
    ],
  },
  {
    title: "Responsabilidad",
    body: [
      "Se procura mantener el sitio web actualizado y libre de errores, pero no se garantiza la ausencia de interrupciones o fallos técnicos. No se asume responsabilidad por daños derivados del uso del sitio o de la información contenida en él, salvo lo dispuesto por la legislación aplicable.",
    ],
  },
  {
    title: "Enlaces externos",
    body: [
      "Este sitio puede incluir enlaces a páginas de terceros. No se asume responsabilidad sobre el contenido o funcionamiento de dichos sitios externos.",
    ],
  },
  {
    title: "Legislación aplicable",
    body: [
      "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales que correspondan conforme a la ley.",
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-3xl font-extrabold text-text sm:text-4xl">
              Aviso Legal
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
