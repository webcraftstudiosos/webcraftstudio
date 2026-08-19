import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://webcraftstudiosos.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Webcraft Studios — Desarrollo y Diseño Web de Alto Nivel",
    template: "%s — Webcraft Studios",
  },
  description:
    "Agencia de desarrollo y diseño web premium. Creamos sitios y aplicaciones a medida con Next.js, UI/UX de alto impacto, SEO técnico y automatizaciones que elevan tu presencia digital.",
  keywords: [
    "agencia web",
    "desarrollo web",
    "diseño UI/UX",
    "Next.js",
    "desarrollo full-stack",
    "SEO técnico",
    "automatizaciones",
  ],
  authors: [{ name: "Webcraft Studios" }],
  creator: "Webcraft Studios",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Webcraft Studios",
    title: "Webcraft Studios — Desarrollo y Diseño Web de Alto Nivel",
    description:
      "Elevamos tu presencia digital al siguiente nivel: desarrollo full-stack, diseño UI/UX y optimización de rendimiento.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcraft Studios — Desarrollo y Diseño Web de Alto Nivel",
    description:
      "Elevamos tu presencia digital al siguiente nivel: desarrollo full-stack, diseño UI/UX y optimización de rendimiento.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Saltar al contenido principal
        </a>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
