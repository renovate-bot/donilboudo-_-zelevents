import Image from "next/image";
import { galleryPhotos } from "@/lib/site-config";

export default function Gallery() {
  const featured = galleryPhotos.slice(0, 5);

  return (
    <section id="galerie" className="py-24 md:py-28 px-6 bg-creme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label !text-or-sombre">Nos réalisations</span>
          <h2 className="section-title section-title-light">
            Découvrez nos plus beaux événements
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="gallery-scroll flex gap-5 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory">
          {featured.map((photo) => (
            <div
              key={photo.label}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-0 inset-x-0 p-4 font-serif text-blanc text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="/galerie" className="btn-outline-gold !border-or-sombre !text-or-sombre hover:!bg-or-sombre hover:!text-blanc hover:!border-or-sombre">
            Voir la galerie complète
          </a>
        </div>
      </div>
    </section>
  );
}
