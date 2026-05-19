"use client";

import { motion } from "framer-motion";

const items = [
  { n: "12,400+", l: "ग्रामवासी जुड़े", en: "Citizens onboarded" },
  { n: "98%", l: "e-KYC सम्पन्न", en: "Digital identity coverage" },
  { n: "640", l: "किसान पंजीकृत", en: "Farmers registered" },
  { n: "11.2 KM", l: "पक्की सड़क", en: "Roads laid" },
  { n: "3", l: "स्मार्ट क्लासरूम", en: "Smart classrooms" },
  { n: "₹4.8 Cr", l: "पारदर्शी बजट", en: "Transparent budget" },
];

export function ImpactStrip() {
  return (
    <section className="relative py-20 md:py-28 bg-earth-600 text-cream overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-saffron-200">
              <span className="w-6 h-px bg-saffron-300/60" aria-hidden />
              Impact in numbers
            </div>
            <h2 className="mt-4 font-hindi text-[30px] sm:text-4xl md:text-5xl leading-[1.1] text-cream">
              आँकड़े नहीं —
              <br />
              <span className="text-saffron-200">हर अंक एक चेहरा है।</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-cream-100/80 leading-relaxed md:self-end">
            हर आँकड़े के पीछे एक माँ की मुस्कान, एक किसान की उम्मीद, और एक बच्चे
            की पहली किताब है। यह बस शुरुआत है।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-cream-100/15 rounded-3xl overflow-hidden border border-cream-100/15">
          {items.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-earth-600 p-6 md:p-7 flex flex-col items-start"
            >
              <div className="tabular font-display text-3xl md:text-4xl text-saffron-200">
                {s.n}
              </div>
              <div className="mt-3 font-hindi text-sm text-cream">{s.l}</div>
              <div className="font-display text-[10px] uppercase tracking-[0.18em] text-cream-100/55 mt-1">
                {s.en}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
