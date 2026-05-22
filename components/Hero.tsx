import Image from "next/image";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <Image
        src={siteConfig.heroImage}
        alt="Salle de réception élégamment décorée pour un événement"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />

      <div className="absolute inset-0 hero-overlay" aria-hidden />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="animate-fade-up flex justify-center mb-8">
          <Logo priority className="!h-20 sm:!h-24 md:!h-28" />
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 font-serif text-blanc text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] mb-6 text-balance">
          {siteConfig.tagline}
        </h1>

        <div className="animate-fade-up animate-fade-up-delay-1 gold-line mx-auto mb-8" />

        <p className="animate-fade-up animate-fade-up-delay-2 body-text text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Demander un devis
          </a>
          <a href="#galerie" className="btn-outline-light">
            Découvrir nos réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
