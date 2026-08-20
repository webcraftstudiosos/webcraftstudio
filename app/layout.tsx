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
    default: "Webcraft Studios — Desarrollo y Diseño Web de Alto Nivel",
    template: "%s — Webcraft Studios",
  },
  description:
    "Diseñamos y creamos páginas web y tiendas online para negocios locales y online. Sitios rápidos, fáciles de gestionar y pensados para conseguir más clientes.",
  keywords: [
    "diseño web",
    "página web para negocios",
    "tienda online",
    "web para negocio local",
    "creación de páginas web",
    "posicionamiento en Google",
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
      "Creamos tu web o tienda online: diseño a medida, rápida y lista para conseguir más clientes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcraft Studios — Desarrollo y Diseño Web de Alto Nivel",
    description:
      "Creamos tu web o tienda online: diseño a medida, rápida y lista para conseguir más clientes.",
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
