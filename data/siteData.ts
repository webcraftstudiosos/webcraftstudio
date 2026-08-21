export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Garantías", href: "#garantias" },
  { label: "Contacto", href: "#contacto" },
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
    title: "Reservas 24 horas, sin llamadas",
    description:
      "Tus clientes reservan cita ellos mismos desde el móvil, a cualquier hora, sin que tengas que coger el teléfono.",
    features: [
      "Reserva online en menos de 1 minuto",
      "Disponible de día y de noche",
      "Confirmación automática al cliente",
      "Menos interrupciones durante el trabajo",
    ],
  },
  {
    icon: "Gauge",
    title: "Calendario con disponibilidad real",
    description:
      "Conectado a Google Calendar: bloquea automáticamente días ocupados, festivos y vacaciones. Sin dobles reservas.",
    features: [
      "Sincronizado con tu Google Calendar",
      "Bloqueo automático de días no laborables",
      "Sin errores ni citas duplicadas",
      "Gestiona varios profesionales si los tienes",
    ],
  },
  {
    icon: "Workflow",
    title: "Menos ausencias, más confirmaciones",
    description:
      "Recordatorios automáticos y solicitud de cita por WhatsApp, para que no se te olvide ni a ti ni al cliente.",
    features: [
      "Recordatorio automático antes de la cita",
      "Solicitud y confirmación por WhatsApp",
      "Menos citas perdidas por olvido",
      "Historial de reservas siempre a mano",
    ],
  },
  {
    icon: "Palette",
    title: "Presencia profesional en Google",
    description:
      "Una página con tus servicios, precios y valoraciones, pensada para que te encuentren y confíen en ti.",
    features: [
      "Look profesional acorde a tu marca",
      "Servicios y precios siempre visibles",
      "Optimizada para aparecer en Google",
      "Pensada para convertir visitas en citas",
    ],
  },
];

export type ExampleIcon = "Scissors" | "Stethoscope" | "Dumbbell";

export type ExampleProject = {
  id: string;
  icon: ExampleIcon;
  category: string;
  name: string;
  location: string;
  description: string;
  features: string[];
  accent: string;
  accentSoft: string;
};

export const exampleProjects: ExampleProject[] = [
  {
    id: "beauty",
    icon: "Scissors",
    category: "Peluquería · Reservas",
    name: "Estilistes Aroma",
    location: "Puigserra",
    description:
      "Selección de servicios, calendario visual con días ocupados y de vacaciones, y solicitud de cita por WhatsApp.",
    features: [
      "Selección de servicios y precio",
      "Calendario visual de disponibilidad",
      "Solicitud de cita por WhatsApp",
    ],
    accent: "#c98a6b",
    accentSoft: "#241a16",
  },
  {
    id: "clinic",
    icon: "Stethoscope",
    category: "Fisioterapia · Reservas",
    name: "Clínica Vitalis",
    location: "Roureda del Bages",
    description:
      "Reservas online con calendario de disponibilidad real, recordatorios automáticos y solicitud de cita por WhatsApp.",
    features: [
      "Calendario conectado a Google Calendar",
      "Recordatorio automático antes de la cita",
      "Solicitud de cita por WhatsApp",
    ],
    accent: "#3d8f7a",
    accentSoft: "#10221d",
  },
  {
    id: "gym",
    icon: "Dumbbell",
    category: "Centro deportivo · Reservas",
    name: "Espai Nord",
    location: "Ejemplo genérico",
    description:
      "Reserva de clases y sesiones con plazas limitadas, calendario semanal y confirmación automática por WhatsApp.",
    features: [
      "Reserva de plazas por clase",
      "Calendario semanal siempre actualizado",
      "Plantilla reutilizable para cualquier centro",
    ],
    accent: "#4d7fff",
    accentSoft: "#131a2e",
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
      "Tu web y tu calendario de reservas cargan rápido, funcionan bien en el móvil y no dependen de plugins que se rompen o se quedan anticuados.",
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
    question: "¿Qué incluye la cuota mensual?",
    answer:
      "El calendario de reservas conectado a Google Calendar, los recordatorios automáticos, hosting, actualizaciones de seguridad y soporte prioritario por WhatsApp.",
  },
  {
    question: "¿Puedo cancelar la cuota mensual cuando quiera?",
    answer:
      "Sí. No hay permanencia. Si en algún momento decides dejarlo, cancelas y no se te cobra el mes siguiente.",
  },
  {
    question: "¿Cuánto tarda en entregarse un proyecto?",
    answer:
      "Normalmente entre 5 y 9 días desde que confirmamos el alcance, incluyendo la conexión con tu Google Calendar y las pruebas de reserva.",
  },
  {
    question: "¿Puedo pedir cambios después del lanzamiento?",
    answer:
      "Por supuesto. Incluimos una ronda de ajustes tras el lanzamiento, y la cuota mensual cubre pequeños cambios y soporte continuo.",
  },
];

export type WebPackage = {
  label: string;
  setupPrice: number;
  monthlyPrice: number;
  description: string;
  includes: string[];
};

export const webPackage: WebPackage = {
  label: "Sistema de Reservas",
  setupPrice: 300,
  monthlyPrice: 29,
  description:
    "Web con reservas online, calendario de disponibilidad real y recordatorios automáticos.",
  includes: [
    "Página con tus servicios y precios",
    "Calendario conectado a Google Calendar",
    "Solicitud de cita por WhatsApp",
    "Recordatorios automáticos antes de cada cita",
    "Hosting y mantenimiento incluidos",
  ],
};

export type BudgetExtra = {
  id: string;
  label: string;
  price: number;
  recurring: boolean;
  description: string;
};

export const budgetExtras: BudgetExtra[] = [
  { id: "multiagenda", label: "Varios profesionales", price: 15, recurring: true, description: "Cada empleado con su propio calendario de reservas." },
  { id: "deposito", label: "Cobro de señal online", price: 15, recurring: true, description: "Pide un pequeño depósito al reservar, para reducir ausencias." },
  { id: "sms", label: "Recordatorios por SMS", price: 10, recurring: true, description: "Aviso por SMS 24h antes, además del WhatsApp." },
  { id: "multiidioma", label: "Multi-idioma", price: 150, recurring: false, description: "Tu web disponible en varios idiomas." },
  { id: "seo", label: "SEO Avanzado", price: 150, recurring: false, description: "Para aparecer antes en las búsquedas de Google." },
  { id: "uiux", label: "Diseño premium a medida", price: 300, recurring: false, description: "Un diseño exclusivo y cuidado al detalle." },
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
  { label: "Ejemplos", href: "#ejemplos" },
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
  "Solo el sistema básico (300 € + 29 €/mes)",
  "Con algún extra (varios profesionales, señal online...)",
  "Aún no lo tengo claro, quiero que me asesoréis",
  "Tengo un proyecto más grande en mente",
];
