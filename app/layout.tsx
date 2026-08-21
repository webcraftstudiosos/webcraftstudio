import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "WebcraftStudioSOS — Sistema de Reservas Online para Negocios de Servicios",
    template: "%s — WebcraftStudioSOS",
  },
  description:
    "Sistema de reservas online para peluquerías, clínicas, centros de estética y fisioterapia. Calendario con disponibilidad real, recordatorios automáticos y menos ausencias.",
  keywords: [
    "sistema de reservas online",
    "reservas para peluquerías",
    "reservas para clínicas",
    "calendario de citas online",
    "software de citas para negocios",
    "página web con reservas",
  ],
  authors: [{ name: "WebcraftStudioSOS" }],
  creator: "WebcraftStudioSOS",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "WebcraftStudioSOS",
    title: "WebcraftStudioSOS — Sistema de Reservas Online para Negocios de Servicios",
    description:
      "Que tus clientes reserven solos, sin llamarte. Calendario real, recordatorios automáticos y menos ausencias.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebcraftStudioSOS — Sistema de Reservas Online para Negocios de Servicios",
    description:
      "Que tus clientes reserven solos, sin llamarte. Calendario real, recordatorios automáticos y menos ausencias.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ADvughSF90q4tl3sGypHOtZdDP3PrvaFqeaktyATapE",
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
        <Analytics />
      </body>
    </html>
  );
}
