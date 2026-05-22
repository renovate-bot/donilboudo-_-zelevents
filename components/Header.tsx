"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noir/95 backdrop-blur-md border-b border-or/10 shadow-lg"
          : "bg-noir/30 backdrop-blur-sm border-b border-blanc/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.5rem] grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a href="/" className="flex items-center group justify-self-start">
          <Logo priority className="h-14 sm:h-16 group-hover:opacity-90 transition-opacity" />
        </a>

        <nav
          className="hidden lg:flex items-center justify-center gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium tracking-[0.08em] uppercase text-blanc/90 hover:text-or-clair transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex justify-self-end">
          <a href="/#contact" className="btn-outline-gold !py-2.5 !px-6">
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden col-start-3 justify-self-end flex flex-col gap-1.5 p-2"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px bg-or transition-all duration-200 origin-center ${
                i === 0 && menuOpen ? "rotate-45 translate-y-[7px]" : ""
              } ${i === 1 && menuOpen ? "opacity-0" : ""} ${
                i === 2 && menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          ))}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-or/10 bg-noir/98 ${
          menuOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-6 py-8 flex flex-col gap-5" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-sans text-base tracking-[0.08em] uppercase text-blanc/90 hover:text-or-clair transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" onClick={closeMenu} className="btn-outline-gold text-center mt-2">
            Demander un devis
          </a>
        </nav>
      </div>
    </header>
  );
}
