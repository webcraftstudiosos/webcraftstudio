import Link from "next/link";
import { footerLinks, legalLinks, socialLinks, type SocialLink } from "@/data/siteData";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const icons: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="max-w-sm text-sm text-text-muted">
              Creamos páginas web y tiendas online para negocios locales y
              online, rápidas y fáciles de gestionar.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Enlaces del footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = icons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:scale-105"
                >
                  <Icon className="size-6" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-text-faint sm:flex-row sm:items-center">
          <p>&copy; {year} WebcraftStudioSOS. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
