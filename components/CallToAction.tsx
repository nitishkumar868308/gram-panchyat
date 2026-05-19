"use client";

import Link from "next/link";
import { ArrowRight, HandHeart, Users } from "lucide-react";
import { SunRays } from "./Motifs";

export function CallToAction() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-terracotta-700 via-terracotta-600 to-saffron-600 text-cream p-8 md:p-16 shadow-glow">
          <SunRays className="absolute -right-24 -top-24 w-[560px] h-[560px] text-cream/15" />
          <div className="absolute inset-0 dot-grid opacity-10" aria-hidden />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-saffron-100">
                <span className="w-6 h-px bg-cream/40" aria-hidden />
                जुड़िए · Join the mission
              </div>
              <h2 className="mt-4 font-hindi text-3xl sm:text-4xl md:text-[52px] leading-[1.08]">
                आप भी इस यात्रा का
                <br />
                <span className="text-saffron-100">हिस्सा बनिए।</span>
              </h2>
              <p className="mt-5 max-w-xl text-cream-100/90 leading-relaxed">
                स्वयंसेवक, सहयोग, या एक छोटी सी आवाज़ — सूर्यपुरा हर रूप में
                आपका स्वागत करता है। एक गाँव का बदलाव, सबकी हिस्सेदारी से ही
                सम्भव है।
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-earth-700 font-semibold hover:bg-saffron-100 transition-all shadow-soft"
                >
                  <HandHeart className="w-4 h-4" /> सहयोग दें
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact#volunteer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-all"
                >
                  <Users className="w-4 h-4" /> स्वयंसेवक बनें
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl bg-cream/10 backdrop-blur-md border border-cream/20 p-6">
                <div className="font-display text-[10px] uppercase tracking-[0.22em] text-saffron-100">
                  Quick pledge
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {["₹501", "₹1,100", "₹5,100"].map((v) => (
                    <button
                      key={v}
                      className="tabular py-3 rounded-xl bg-cream/15 hover:bg-cream/25 border border-cream/20 transition-colors"
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <button className="mt-4 w-full py-3.5 rounded-xl bg-cream text-earth-700 font-semibold hover:bg-saffron-100 transition-colors">
                  एक दीप जलाइए
                </button>
                <p className="mt-3 text-[11px] text-cream-100/70 text-center">
                  Every contribution lights one home for a month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
