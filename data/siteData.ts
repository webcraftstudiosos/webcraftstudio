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
    title: "Desarrollo Full-stack",
    description:
      "Aplicaciones web robustas y escalables construidas con las tecnologías más modernas del ecosistema JavaScript.",
    features: [
      "Tecnología moderna y rápida",
      "APIs REST y GraphQL",
      "Bases de datos e integraciones",
      "Arquitectura escalable en la nube",
    ],
  },
  {
    icon: "Palette",
    title: "Diseño UI/UX",
    description:
      "Interfaces intuitivas y visualmente impactantes, diseñadas con investigación de usuario y sistemas de diseño consistentes.",
    features: [
      "Wireframes y prototipos interactivos",
      "Design systems escalables",
      "Investigación y pruebas de usuario",
      "Micro-interacciones y animación",
    ],
  },
  {
    icon: "Gauge",
    title: "Optimización SEO/Velocidad",
    description:
      "Sitios ultrarrápidos y optimizados para buscadores, listos para escalar tráfico sin perder rendimiento.",
    features: [
      "Core Web Vitals al 100%",
      "SEO técnico y estructurado",
      "Optimización de imágenes y assets",
      "Auditorías de rendimiento continuas",
    ],
  },
  {
    icon: "Workflow",
    title: "Automatizaciones",
    description:
      "Flujos de trabajo automatizados que conectan tus herramientas y eliminan tareas manuales repetitivas.",
    features: [
      "Integraciones entre plataformas",
      "Chatbots e IA aplicada",
      "Automatización de marketing",
      "Reportes y dashboards en tiempo real",
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
      "Creamos wireframes y un diseño UI/UX a medida, validado contigo antes de escribir una línea de código.",
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
      "Optimizamos rendimiento y SEO, y publicamos tu proyecto en producción sin sorpresas.",
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
  { id: "api", label: "Integraciones API", price: 700, description: "Conexión con servicios externos." },
  { id: "uiux", label: "Diseño UI/UX Premium", price: 1200, description: "Sistema de diseño exclusivo." },
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
