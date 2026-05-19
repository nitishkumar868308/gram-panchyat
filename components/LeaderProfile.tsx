"use client";

import { motion } from "framer-motion";
import { CornerOrnament, Mandala } from "./Motifs";
import { Quote, Award, Heart, Sprout } from "lucide-react";

export function LeaderProfile() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-paper">
      <Mandala className="absolute -left-32 top-10 w-[480px] h-[480px] text-terracotta-600/8" />
      <CornerOrnament className="absolute right-8 top-8 w-24 h-24 text-saffron-500/40" />
      <CornerOrnament className="absolute left-8 bottom-8 w-24 h-24 text-saffron-500/40 rotate-180" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Portrait — stylized SVG illustration to avoid photo licensing,
            keeps demo self-contained yet emotive. */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-soft border border-earth-200/40">
            {/* Photographic-style gradient with figurative composition */}
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta-700 via-terracotta-500 to-saffron-500" />
            <div className="absolute inset-0 hero-overlay opacity-60" />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              {/* Sun behind */}
              <circle cx="200" cy="160" r="120" fill="#FFE9C8" opacity="0.35" />
              <circle cx="200" cy="160" r="80" fill="#FFE9C8" opacity="0.55" />
              {/* Stylized figure — kurta-clad leader */}
              <g>
                {/* Body / kurta */}
                <path
                  d="M120 500 Q120 360 200 320 Q280 360 280 500 Z"
                  fill="#FAF5EB"
                  opacity="0.92"
                />
                {/* Shawl saffron */}
                <path
                  d="M150 360 Q200 380 250 360 L260 500 L140 500 Z"
                  fill="#D97706"
                  opacity="0.85"
                />
                {/* Neck */}
                <rect x="190" y="298" width="20" height="32" fill="#8E6727" />
                {/* Head */}
                <circle cx="200" cy="270" r="40" fill="#A87047" />
                {/* Turban */}
                <path
                  d="M158 268 Q160 218 200 210 Q242 218 244 268 Q244 246 200 240 Q156 246 158 268 Z"
                  fill="#B85042"
                />
                <path
                  d="M158 268 Q180 252 200 256 Q220 252 244 268"
                  fill="#7A2E27"
                />
                {/* Eyes hint */}
                <circle cx="186" cy="274" r="2.2" fill="#2C1810" />
                <circle cx="214" cy="274" r="2.2" fill="#2C1810" />
                {/* Smile */}
                <path
                  d="M188 290 Q200 298 212 290"
                  stroke="#2C1810"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Moustache subtle */}
                <path
                  d="M186 284 Q200 280 214 284"
                  stroke="#2C1810"
                  strokeWidth="1.6"
                  fill="none"
                />
              </g>
              {/* Foreground wheat sprigs */}
              <g stroke="#FAF5EB" strokeWidth="1" fill="none" opacity="0.5">
                <line x1="60" y1="490" x2="60" y2="430" />
                <path d="M60 450 Q50 446 46 440" />
                <path d="M60 450 Q70 446 74 440" />
                <line x1="340" y1="490" x2="340" y2="430" />
                <path d="M340 450 Q330 446 326 440" />
                <path d="M340 450 Q350 446 354 440" />
              </g>
            </svg>

            {/* Caption strip */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-earth-700/95 via-earth-700/60 to-transparent">
              <div className="font-display text-[10px] uppercase tracking-[0.22em] text-saffron-200">
                Development Ambassador
              </div>
              <div className="mt-1 font-hindi text-xl text-cream">
                श्री रघुवीर सिंह
              </div>
              <div className="text-cream-100/75 text-xs font-display italic">
                Shri Raghuveer Singh · Sarpanch
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
            <span className="w-6 h-px bg-terracotta-400/60" aria-hidden />
            The Visionary · दूरदर्शी नेतृत्व
          </div>
          <h2 className="mt-4 font-hindi text-[30px] sm:text-4xl md:text-5xl leading-[1.1] text-earth-600">
            एक किसान का बेटा,
            <br />
            <span className="text-terracotta-600">अब गाँव का सपना।</span>
          </h2>

          <div className="mt-7 relative pl-6 border-l-2 border-saffron-500/60">
            <Quote className="absolute -left-3 -top-1 w-5 h-5 text-saffron-500 bg-cream-50" />
            <p className="font-hindi text-lg md:text-xl text-earth-600 leading-relaxed">
              "जब मैं दस बरस का था, मेरी माँ चूल्हे की रोशनी में मुझे पढ़ाती
              थी। आज मैं चाहता हूँ कि सूर्यपुरा के हर बच्चे के पास पढ़ने की
              अपनी रौशनी हो।"
            </p>
            <p className="mt-3 text-earth-400 italic font-display text-sm">
              — Raghuveer Singh, on why he came back from the city to lead his
              village.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Award,
                label: "राज्य सरकार सम्मान",
                en: "State Recognition",
              },
              {
                icon: Heart,
                label: "9 वर्ष लोक-सेवा",
                en: "9 yrs in service",
              },
              { icon: Sprout, label: "जैविक खेती अग्रदूत", en: "Organic farming" },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.en}
                  className="rounded-2xl bg-cream-50 border border-earth-200/50 p-4 shadow-emboss"
                >
                  <Icon className="w-5 h-5 text-terracotta-600" strokeWidth={1.8} />
                  <div className="mt-3 font-hindi text-sm text-earth-600">
                    {b.label}
                  </div>
                  <div className="text-[11px] font-display uppercase tracking-wider text-earth-400 mt-0.5">
                    {b.en}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
