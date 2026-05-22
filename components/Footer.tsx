import Logo from "@/components/Logo";
import { navLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-or/10 bg-noir py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="inline-block mb-5 group">
              <Logo variant="full" className="!h-36 md:!h-40 group-hover:opacity-90 transition-opacity" />
            </a>
          </div>

          <div>
            <h3 className="label-text text-or mb-5">
              Nous joindre
            </h3>
            <ul className="space-y-3 font-sans text-blanc/85 text-base">
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-or-clair transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-or-clair transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="label-text text-or mb-5">
              Suivez-nous
            </h3>
            <div className="flex flex-wrap gap-3">
              <SocialLink href={siteConfig.social.instagram} label="Instagram" />
              <SocialLink href={siteConfig.social.facebook} label="Facebook" />
              <SocialLink href={siteConfig.social.tiktok} label="TikTok" />
              <SocialLink href={siteConfig.social.whatsapp} label="WhatsApp" />
            </div>
          </div>

          <div>
            <h3 className="label-text text-or mb-5">
              Liens rapides
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Navigation pied de page">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-blanc/85 text-base hover:text-or-clair transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-px w-full bg-or/10 mb-8" />

        <p className="font-sans text-blanc/50 text-sm text-center">
          © {year} {siteConfig.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans text-xs font-medium tracking-[0.06em] uppercase text-or border border-or/30 px-3 py-1.5 hover:bg-or/10 transition-all"
    >
      {label}
    </a>
  );
}
