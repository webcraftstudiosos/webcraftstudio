# Webcraft Studios

Sitio web de la agencia Webcraft Studios: desarrollo y diseño web premium.

## Stack

- [Next.js](https://nextjs.org) (App Router, React, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- [Lucide React](https://lucide.dev)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — layout, página principal y estilos globales.
- `components/` — secciones de la página (`Navbar`, `Hero`, `Services`, `Portfolio`, `BudgetCalculator`, `Testimonials`, `ContactForm`, `Footer`) y primitivas reutilizables en `components/ui/`.
- `data/siteData.ts` — contenido del sitio (navegación, servicios, proyectos, testimonios, calculadora de presupuesto).
- `lib/utils.ts` — utilidades compartidas (`cn`, `formatCurrency`).

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm run start   # servir el build de producción
npm run lint    # ESLint
```
