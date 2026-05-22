"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section id="temoignages" className="py-24 md:py-28 px-6 bg-noir border-t border-or/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Témoignages</span>
          <h2 className="section-title section-title-dark">Ce que nos clients disent</h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="relative flex items-center gap-4 md:gap-8">
          <CarouselButton direction="prev" onClick={prev} label="Témoignage précédent" />

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <article
                key={t.id}
                className={`border border-or/20 p-8 ${
                  index === active ? "block" : "hidden md:block"
                }`}
              >
                <p className="font-serif text-or text-5xl leading-none mb-4" aria-hidden>
                  &ldquo;
                </p>
                <blockquote className="body-text mb-8">
                  {t.quote}
                </blockquote>
                <footer>
                  <p className="font-serif text-blanc text-lg">{t.name}</p>
                  <p className="label-text text-or/80 mt-1 normal-case tracking-normal">
                    {t.event}
                  </p>
                </footer>
              </article>
            ))}
          </div>

          <CarouselButton direction="next" onClick={next} label="Témoignage suivant" />
        </div>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Afficher le témoignage ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-or" : "bg-blanc/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-or/40 text-or hover:bg-or hover:text-noir transition-all duration-300 text-xl"
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}
