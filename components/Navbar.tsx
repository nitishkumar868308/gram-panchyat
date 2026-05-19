"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";

const links = [
  { href: "/", label: "मुख्य पृष्ठ", en: "Home" },
  { href: "/about", label: "हमारी कहानी", en: "Our Story" },
  { href: "/initiatives", label: "विकास कार्य", en: "Initiatives" },
  { href: "/panchayat", label: "ई-पंचायत", en: "e-Panchayat" },
  { href: "/gallery", label: "झलकियाँ", en: "Gallery" },
  { href: "/contact", label: "जुड़िए", en: "Connect" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-earth-200/40 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="सूर्यपुरा होम"
        >
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-terracotta-500 shadow-soft">
            <Sun
              className="w-5 h-5 text-cream"
              strokeWidth={2.2}
              aria-hidden
            />
            <span className="absolute inset-0 rounded-full ring-1 ring-saffron-200/60" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-hindi text-[15px] md:text-base text-earth-600 tracking-wide">
              सूर्यपुरा
            </span>
            <span className="font-display text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-terracotta-600">
              Gram Vikas Portal
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex flex-col items-center"
            >
              <span className="font-hindiSans text-[13px] text-earth-500 group-hover:text-terracotta-600 transition-colors link-underline">
                {l.label}
              </span>
              <span className="font-display text-[10px] uppercase tracking-[0.15em] text-earth-400">
                {l.en}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-earth-600 text-cream text-sm font-medium hover:bg-terracotta-600 transition-colors shadow-soft"
          >
            सहयोग दें
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream/80 border border-earth-200/60"
          aria-label={open ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="w-5 h-5 text-earth-600" /> : <Menu className="w-5 h-5 text-earth-600" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-cream/95 backdrop-blur-md border-t border-earth-200/40`}
      >
        <nav className="px-5 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between py-3 px-3 rounded-xl hover:bg-terracotta-50 active:bg-terracotta-100 transition-colors"
            >
              <span className="font-hindi text-base text-earth-600">{l.label}</span>
              <span className="font-display text-[11px] uppercase tracking-[0.18em] text-earth-400">
                {l.en}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center px-4 py-3 rounded-full bg-terracotta-500 text-cream text-sm font-medium"
          >
            सहयोग दें — Support the mission
          </Link>
        </nav>
      </div>
    </header>
  );
}
