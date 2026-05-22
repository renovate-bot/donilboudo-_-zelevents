import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Réalisations",
  description: `Découvrez les événements réalisés par ${siteConfig.name} : mariages, galas corporatifs, fêtes privées et décors sur mesure partout au Québec.`,
};

export default function GaleriePage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <section className="pt-[4.5rem] bg-noir border-b border-or/10">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
            <span className="section-label">Nos réalisations</span>
            <h1 className="section-title section-title-dark mb-6">
              Galerie complète
            </h1>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-text max-w-2xl mx-auto">
              Mariages, événements corporatifs et célébrations privées — un aperçu de
              notre savoir-faire à travers le Québec.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-creme">
          <div className="max-w-7xl mx-auto">
            <GalleryGrid />
          </div>
        </section>

        <section className="py-20 px-6 bg-noir border-t border-or/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title section-title-dark mb-6">
              Votre événement pourrait être le prochain
            </h2>
            <p className="body-text mb-10">
              Parlez-nous de votre projet et créons ensemble une expérience sur mesure.
            </p>
            <a href="/#contact" className="btn-outline-gold">
              Demander un devis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
