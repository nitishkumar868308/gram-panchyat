"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Wheat,
  Route,
  Landmark,
  Fingerprint,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    hindi: "शिक्षा",
    en: "Education",
    desc: "हर बच्चा स्कूल जाए — डिजिटल कक्षा, छात्रवृत्ति, और गाँव-पुस्तकालय।",
    tag: "3 नए स्मार्ट क्लासरूम",
    href: "/initiatives#education",
    accent: "from-saffron-500 to-terracotta-500",
  },
  {
    icon: Wheat,
    hindi: "किसान",
    en: "Farmer Welfare",
    desc: "मंडी रेट, मिट्टी टेस्ट, सोलर पम्प और जैविक खेती की पाठशाला।",
    tag: "640+ किसान पंजीकृत",
    href: "/initiatives#farmer",
    accent: "from-forest-500 to-gold-500",
  },
  {
    icon: Route,
    hindi: "सड़क व जल",
    en: "Roads & Water",
    desc: "हर घर तक पक्की सड़क और नल — जल जीवन मिशन के अंतर्गत।",
    tag: "11.2 किमी पक्की सड़क",
    href: "/initiatives#infra",
    accent: "from-earth-400 to-earth-600",
  },
  {
    icon: Landmark,
    hindi: "पंचायत",
    en: "e-Panchayat",
    desc: "खुली बैठक, ऑनलाइन शिकायत, और बजट की पूर्ण पारदर्शिता।",
    tag: "हर माह खुली सभा",
    href: "/panchayat",
    accent: "from-terracotta-500 to-gold-500",
  },
  {
    icon: Fingerprint,
    hindi: "डिजिटल पहचान",
    en: "Digital Identity",
    desc: "आधार, e-KYC, और गाँव का अपना डिजिटल नागरिक कार्ड।",
    tag: "98% e-KYC सम्पन्न",
    href: "/initiatives#digital",
    accent: "from-saffron-400 to-forest-500",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="relative py-20 md:py-28 bg-cream-50 bg-grain"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
              <span className="w-6 h-px bg-terracotta-400/60" aria-hidden />
              पाँच स्तंभ · Five Pillars
            </div>
            <h2 className="mt-4 font-hindi text-[30px] sm:text-4xl md:text-5xl leading-[1.1] text-earth-600 max-w-2xl">
              जिन पाँच नींवों पर खड़ा है
              <span className="text-terracotta-600"> सूर्यपुरा का सपना।</span>
            </h2>
          </div>
          <p className="max-w-md text-earth-500 leading-relaxed">
            हर स्तंभ एक वादा है — मिट्टी से जुड़ा, लोगों से जुड़ा। यहाँ क्लिक
            करके किसी भी पहल की पूरी कहानी पढ़िए।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              >
                <Link
                  href={p.href}
                  className="group block h-full relative overflow-hidden rounded-3xl bg-cream-50 border border-earth-200/40 p-7 md:p-8 shadow-soft hover:shadow-glow transition-all duration-500"
                >
                  <div
                    className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${p.accent} group-hover:opacity-40 transition-opacity duration-700`}
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} text-cream shadow-soft`}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.7} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-earth-400 group-hover:text-terracotta-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="relative mt-7 font-hindi text-2xl md:text-[28px] text-earth-600">
                    {p.hindi}
                  </h3>
                  <p className="relative font-display italic text-sm text-terracotta-600 mt-0.5">
                    {p.en}
                  </p>
                  <p className="relative mt-4 text-earth-500 leading-relaxed font-hindiSans text-[15px]">
                    {p.desc}
                  </p>
                  <div className="relative mt-6 pt-5 border-t border-earth-200/50 flex items-center justify-between">
                    <span className="font-hindiSans text-xs text-forest-600 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200/60">
                      {p.tag}
                    </span>
                    <span className="font-display text-[10px] uppercase tracking-[0.18em] text-earth-400">
                      Read more
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Spotlight card — sixth slot showcases the visionary */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl p-7 md:p-8 bg-earth-600 text-cream shadow-soft"
          >
            <div className="absolute inset-0 dot-grid opacity-15" aria-hidden />
            <div className="relative">
              <div className="font-display text-[10px] uppercase tracking-[0.22em] text-saffron-200">
                The Visionary
              </div>
              <h3 className="mt-3 font-hindi text-2xl md:text-[28px]">
                "गाँव बदलेगा, तभी देश बदलेगा।"
              </h3>
              <p className="mt-4 text-cream-100/85 leading-relaxed">
                — विकास अंबासडर <span className="font-hindi">श्री रघुवीर सिंह</span>, सूर्यपुरा के
                स्वप्नद्रष्टा और सरपंच।
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-saffron-200 hover:text-saffron-300 font-display tracking-wider uppercase text-xs link-underline"
              >
                उनकी कहानी पढ़ें
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
