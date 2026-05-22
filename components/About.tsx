import Image from "next/image";
import { aboutContent, siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="apropos" className="py-24 md:py-28 px-6 bg-noir">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="section-label">{aboutContent.label}</span>
          <h2 className="section-title section-title-dark mb-8">{aboutContent.title}</h2>
          <div className="gold-line mb-8" />
          <div className="space-y-5 mb-10">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
          <a href="#services" className="btn-outline-gold">
            En savoir plus
          </a>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden group">
          <Image
            src={siteConfig.aboutImage}
            alt="Décoration de table avec fleurs et verres pour un événement"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-noir/30 group-hover:bg-noir/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full border-2 border-or flex items-center justify-center bg-noir/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
              <span className="text-or text-xl ml-1" aria-hidden>
                ▶
              </span>
            </div>
            <span className="label-text text-or">
              Voir notre histoire
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
