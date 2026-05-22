"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryPhotos } from "@/lib/site-config";

type GalleryPhoto = (typeof galleryPhotos)[number];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryPhotos.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const activePhoto = activeIndex === null ? null : galleryPhotos[activeIndex];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryPhotos.map((photo, index) => (
          <GalleryTile key={photo.src} photo={photo} onOpen={() => setActiveIndex(index)} />
        ))}
      </div>

      {activePhoto && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.label}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 font-sans text-sm tracking-[0.08em] uppercase text-blanc/80 hover:text-or-clair transition-colors"
            aria-label="Fermer"
          >
            Fermer
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-or/40 text-or hover:bg-or/10 transition-colors"
            aria-label="Photo précédente"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-or/40 text-or hover:bg-or/10 transition-colors"
            aria-label="Photo suivante"
          >
            ›
          </button>

          <figure
            className="relative w-full max-w-5xl aspect-[4/3] max-h-[85vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.label}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
              priority
            />
            <figcaption className="absolute -bottom-10 inset-x-0 text-center font-serif text-blanc text-lg">
              {activePhoto.label}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

function GalleryTile({ photo, onOpen }: { photo: GalleryPhoto; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[4/3] overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-or focus-visible:outline-offset-2"
    >
      <Image
        src={photo.src}
        alt={photo.label}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <p className="absolute bottom-0 inset-x-0 p-4 font-serif text-blanc text-base md:text-lg">
        {photo.label}
      </p>
    </button>
  );
}
