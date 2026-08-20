export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Garantías", href: "#garantias" },
  { label: "Contacto", href: "#contacto" },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
};

export const heroStats: Stat[] = [
  { label: "Proyectos entregados", value: 50, suffix: "+" },
  { label: "Rendimiento Lighthouse", value: 99.9, suffix: "%" },
  { label: "Satisfacción de clientes", value: 100, suffix: "%" },
  { label: "Soporte post-lanzamiento", value: 24, suffix: "/7", prefix: "" },
];

export type ServiceIcon =
  | "Code2"
  | "Palette"
  | "Gauge"
  | "Workflow";

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: "Code2",
    title: "Tu web o tienda, hecha a medida",
    description:
      "Creamos tu sitio o tienda online desde cero, con todo lo que necesitas para vender y atender a tus clientes.",
    features: [
      "Diseño a medida para tu negocio",
      "Tienda online con pagos y pedidos",
      "Conectada con WhatsApp, redes y reservas",
      "Preparada para crecer sin rehacerla",
    ],
  },
  {
    icon: "Palette",
    title: "Diseño pensado para tus clientes",
    description:
      "Un sitio bonito y fácil de usar que transmite confianza y ayuda a tus clientes a encontrar lo que buscan.",
    features: [
      "Look profesional acorde a tu marca",
      "Fácil de usar desde el móvil",
      "Pensado para que compren o te contacten",
      "Detalles que dan buena impresión",
    ],
  },
  {
    icon: "Gauge",
    title: "Que te encuentren en Google",
    description:
      "Sitios rápidos y optimizados para aparecer en las búsquedas de tus clientes, sin perderlos por una carga lenta.",
    features: [
      "Carga en segundos, incluso en el móvil",
      "Optimizado para aparecer en Google",
      "Fotos y contenido bien optimizados",
      "Revisiones periódicas de rendimiento",
    ],
  },
  {
    icon: "Workflow",
    title: "Menos tareas manuales para ti",
    description:
      "Conectamos tus herramientas para que reserves, factures o respondas a clientes sin hacerlo todo a mano.",
    features: [
      "Conexión con WhatsApp, email y redes",
      "Respuestas automáticas a clientes",
      "Recordatorios y confirmaciones automáticas",
      "Informes claros de cómo va tu negocio",
    ],
  },
];

export type ProcessIcon = "Search" | "PenTool" | "Code2" | "Rocket" | "LifeBuoy";

export type ProcessStep = {
  number: string;
  icon: ProcessIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "Search",
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, objetivos y usuarios para definir el alcance exacto del proyecto.",
  },
  {
    number: "02",
    icon: "PenTool",
    title: "Diseño",
    description:
      "Creamos el diseño de tu web a medida y lo validamos contigo antes de empezar a construirla.",
  },
  {
    number: "03",
    icon: "Code2",
    title: "Desarrollo",
    description:
      "Construimos el sitio con tecnología moderna, código limpio y revisiones periódicas de avance.",
  },
  {
    number: "04",
    icon: "Rocket",
    title: "Lanzamiento",
    description:
      "Optimizamos la velocidad y el posicionamiento en Google, y publicamos tu web sin sorpresas.",
  },
  {
    number: "05",
    icon: "LifeBuoy",
    title: "Soporte",
    description:
      "Te acompañamos después del lanzamiento con mantenimiento, mejoras y soporte continuo.",
  },
];

export type TrustBadge = {
  icon: "Code2" | "Clock" | "ShieldCheck" | "MessagesSquare";
  title: string;
  description: string;
};

export const trustBadges: TrustBadge[] = [
  {
    icon: "Code2",
    title: "Tecnología rápida y fiable",
    description:
      "Tu web o tienda carga rápido, funciona bien en el móvil y no depende de plugins que se rompen o se quedan anticuados.",
  },
  {
    icon: "Clock",
    title: "Respuesta en menos de 24h",
    description:
      "Cada consulta se responde el mismo día hábil, sin esperas ni silencios.",
  },
  {
    icon: "ShieldCheck",
    title: "Revisión post-lanzamiento incluida",
    description:
      "Ajustamos lo que haga falta después de publicar tu sitio, sin coste adicional.",
  },
  {
    icon: "MessagesSquare",
    title: "Comunicación directa",
    description:
      "Hablas directamente con quien construye tu proyecto, sin intermediarios ni tickets perdidos.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "¿El precio de la calculadora es el precio final?",
    answer:
      "Es una estimación orientativa basada en el alcance que indiques. La cotización final se confirma tras una breve llamada de descubrimiento donde afinamos los detalles de tu proyecto.",
  },
  {
    question: "¿Qué incluye el mantenimiento mensual?",
    answer:
      "Actualizaciones de seguridad, pequeños cambios de contenido, monitorización de rendimiento y soporte prioritario por email o WhatsApp.",
  },
  {
    question: "¿Cuánto tarda en entregarse un proyecto?",
    answer:
      "Depende del alcance: una landing page suele tardar 4-7 días, una web de negocio local 7-9 días y un e-commerce 2-4 semanas.",
  },
  {
    question: "¿Ofrecéis planes de pago?",
    answer:
      "Sí, normalmente dividimos el proyecto en un 50% al inicio y 50% al finalizar. Para proyectos más grandes podemos ajustar el calendario de pagos.",
  },
  {
    question: "¿Puedo pedir cambios después del lanzamiento?",
    answer:
      "Por supuesto. Incluimos una ronda de ajustes tras el lanzamiento y, después, puedes contratar el mantenimiento mensual o solicitar mejoras puntuales.",
  },
];

export type SiteType = {
  id: string;
  label: string;
  basePrice: number;
  basePriceMax: number;
  basePages: number;
  pricePerExtraPage: number;
  description: string;
};

export const siteTypes: SiteType[] = [
  {
    id: "landing",
    label: "Landing Page",
    basePrice: 400,
    basePriceMax: 600,
    basePages: 1,
    pricePerExtraPage: 150,
    description: "Página única de alta conversión.",
  },
  {
    id: "corporate",
    label: "Web Negocio Local",
    basePrice: 800,
    basePriceMax: 1200,
    basePages: 5,
    pricePerExtraPage: 180,
    description: "Sitio institucional multi-página.",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    basePrice: 1800,
    basePriceMax: 2200,
    basePages: 8,
    pricePerExtraPage: 220,
    description: "Tienda en línea completa.",
  },
];

export type BudgetExtra = {
  id: string;
  label: string;
  price: number;
  description: string;
};

export const budgetExtras: BudgetExtra[] = [
  { id: "seo", label: "SEO Avanzado", price: 400, description: "Estrategia técnica y de contenido." },
  { id: "admin", label: "Panel de Administración", price: 900, description: "Gestión de contenido a medida." },
  { id: "i18n", label: "Multi-idioma", price: 500, description: "Soporte para múltiples idiomas." },
  { id: "api", label: "Conexión con otras herramientas", price: 700, description: "Reservas, facturación, CRM u otros servicios que ya uses." },
  { id: "uiux", label: "Diseño premium a medida", price: 1200, description: "Un diseño exclusivo y cuidado al detalle." },
  { id: "maintenance", label: "Mantenimiento Mensual", price: 90, description: "Soporte y actualizaciones continuas." },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "Instagram";
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/webcraftstudiosos",
    icon: "Instagram",
  },
];

export const whatsappNumber = "34617777453";
export const whatsappLink = `https://wa.me/${whatsappNumber}`;

export const footerLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Garantías", href: "#garantias" },
  { label: "Contacto", href: "#contacto" },
];

export const legalLinks: NavLink[] = [
  { label: "Política de Privacidad", href: "/privacidad" },
];

export const budgetRanges = [
  "Menos de 1.000 €",
  "1.000 € - 3.000 €",
  "3.000 € - 6.000 €",
  "6.000 € - 12.000 €",
  "Más de 12.000 €",
];
