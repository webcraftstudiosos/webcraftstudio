export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
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

export type ProjectCategory = "E-commerce" | "Web Apps" | "Landing Pages";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  gradient: string;
  demoUrl: string;
  caseStudyUrl: string;
};

export const projectCategories: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "E-commerce",
  "Web Apps",
  "Landing Pages",
];

export const projects: Project[] = [
  {
    id: "nova-market",
    title: "Nova Market",
    client: "Nova Retail Group",
    category: "E-commerce",
    description:
      "Tienda en línea de alto tráfico con checkout optimizado y recomendaciones basadas en IA.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Sanity"],
    gradient: "from-blue-500 to-cyan-400",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: "orbit-crm",
    title: "Orbit CRM",
    client: "Orbit Software",
    category: "Web Apps",
    description:
      "Plataforma SaaS de gestión de clientes con dashboards en tiempo real y automatización de flujos.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-violet-500 to-fuchsia-400",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: "lumen-launch",
    title: "Lumen Launch",
    client: "Lumen Ventures",
    category: "Landing Pages",
    description:
      "Landing page de alta conversión para el lanzamiento de producto con animaciones cinematográficas.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    gradient: "from-emerald-400 to-blue-500",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: "urban-thread",
    title: "Urban Thread",
    client: "Urban Thread Co.",
    category: "E-commerce",
    description:
      "E-commerce de moda con probador virtual, filtros inteligentes y experiencia mobile-first.",
    tags: ["Shopify Hydrogen", "React", "GSAP"],
    gradient: "from-pink-500 to-orange-400",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    client: "Pulse Data Inc.",
    category: "Web Apps",
    description:
      "Dashboard analítico en tiempo real con visualizaciones interactivas para equipos de datos.",
    tags: ["Next.js", "D3.js", "tRPC", "PostgreSQL"],
    gradient: "from-indigo-500 to-purple-400",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: "aurora-summit",
    title: "Aurora Summit",
    client: "Aurora Events",
    category: "Landing Pages",
    description:
      "Landing evento corporativo con registro en tiempo real e integración con pasarela de pagos.",
    tags: ["Next.js", "Framer Motion", "Stripe"],
    gradient: "from-cyan-400 to-violet-500",
    demoUrl: "#",
    caseStudyUrl: "#",
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
  basePages: number;
  pricePerExtraPage: number;
  description: string;
};

export const siteTypes: SiteType[] = [
  {
    id: "landing",
    label: "Landing Page",
    basePrice: 900,
    basePages: 1,
    pricePerExtraPage: 150,
    description: "Página única de alta conversión.",
  },
  {
    id: "corporate",
    label: "Sitio Corporativo",
    basePrice: 1800,
    basePages: 5,
    pricePerExtraPage: 180,
    description: "Sitio institucional multi-página.",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    basePrice: 3200,
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
  icon: "Terminal" | "AtSign" | "Briefcase" | "Camera";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: "Terminal" },
  { label: "Twitter / X", href: "#", icon: "AtSign" },
  { label: "LinkedIn", href: "#", icon: "Briefcase" },
  { label: "Instagram", href: "#", icon: "Camera" },
];

export const footerLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const budgetRanges = [
  "Menos de $1,000",
  "$1,000 - $3,000",
  "$3,000 - $6,000",
  "$6,000 - $12,000",
  "Más de $12,000",
];
