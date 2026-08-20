export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Testimonios", href: "#testimonios" },
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
      "Next.js, React & TypeScript",
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

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marta Delgado",
    role: "CEO",
    company: "Nova Retail Group",
    quote:
      "Webcraft Studios transformó por completo nuestra tienda en línea. El equipo entendió nuestra visión desde el primer día y el resultado superó todas nuestras expectativas de conversión.",
    rating: 5,
    initials: "MD",
  },
  {
    name: "Carlos Iturbe",
    role: "Fundador",
    company: "Orbit Software",
    quote:
      "La calidad técnica y la atención al detalle son excepcionales. Nuestra plataforma nunca había sido tan rápida ni tan fácil de mantener.",
    rating: 5,
    initials: "CI",
  },
  {
    name: "Sofía Ramírez",
    role: "Directora de Marketing",
    company: "Lumen Ventures",
    quote:
      "El lanzamiento de nuestra landing page rompió récords de conversión. La comunicación fue impecable en cada etapa del proyecto.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Diego Fonseca",
    role: "COO",
    company: "Urban Thread Co.",
    quote:
      "Profesionales de verdad. Entregaron antes del plazo y con una calidad que ha elevado la percepción de nuestra marca.",
    rating: 5,
    initials: "DF",
  },
  {
    name: "Valentina Cruz",
    role: "Head of Product",
    company: "Pulse Data Inc.",
    quote:
      "El dashboard que construyeron es una obra de arte funcional. Nuestros clientes lo destacan constantemente como diferenciador.",
    rating: 5,
    initials: "VC",
  },
  {
    name: "Andrés Villalobos",
    role: "Director de Eventos",
    company: "Aurora Events",
    quote:
      "Desde la automatización de registros hasta el diseño, todo funcionó perfectamente el día del evento. Recomendados al 100%.",
    rating: 5,
    initials: "AV",
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
  { id: "maintenance", label: "Mantenimiento Mensual", price: 250, description: "Soporte y actualizaciones continuas." },
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
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const budgetRanges = [
  "Menos de 1.000 €",
  "1.000 € - 3.000 €",
  "3.000 € - 6.000 €",
  "6.000 € - 12.000 €",
  "Más de 12.000 €",
];
