"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "मीरा देवी",
    role: "स्व-सहायता समूह, सिलाई केंद्र",
    quote:
      "पहले घर खर्च के लिए दूसरों का मुँह देखती थी। अब महीने में चार हज़ार खुद कमाती हूँ — और बेटी को निजी स्कूल भेजती हूँ।",
    en: "From dependence to dignity — Meera now runs her own stitching unit.",
    accent: "from-terracotta-500 to-saffron-500",
  },
  {
    name: "रवि कुमार",
    role: "किसान, कक्षा 9 छात्र",
    quote:
      "मेरे गाँव में पहले बिजली नहीं थी। अब सोलर लैम्प से रोज़ रात पढ़ता हूँ — अगले साल कक्षा दस की परीक्षा देनी है।",
    en: "Solar lamps lit up Ravi's nights — and his dreams.",
    accent: "from-saffron-500 to-gold-500",
  },
  {
    name: "बीरबल यादव",
    role: "किसान, 3 एकड़ भूमि",
    quote:
      "मंडी रेट ऐप से पता चलता है किस दिन बेचना है। पिछले छह महीने में आमदनी बीस प्रतिशत बढ़ी है।",
    en: "Real-time mandi prices put Birbal's hands on the lever.",
    accent: "from-forest-500 to-gold-400",
  },
];

export function Stories() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-50 bg-grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
              <span className="w-6 h-px bg-terracotta-400/60" aria-hidden />
              असली कहानियाँ · Real Voices
            </div>
            <h2 className="mt-4 font-hindi text-[30px] sm:text-4xl md:text-5xl leading-[1.1] text-earth-600 max-w-2xl">
              जिनकी ज़िंदगी बदली —
              <br />
              <span className="text-terracotta-600">वो खुद बताते हैं।</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-cream-50 border border-earth-200/40 shadow-soft p-7 md:p-8 flex flex-col"
            >
              <div
                className={`absolute -top-20 -left-20 w-44 h-44 rounded-full blur-3xl opacity-25 bg-gradient-to-br ${s.accent}`}
                aria-hidden
              />
              <div className="relative">
                <div className="font-display text-5xl text-terracotta-500/70 leading-none">
                  &ldquo;
                </div>
                <blockquote className="mt-2 font-hindi text-[17px] md:text-lg text-earth-600 leading-relaxed">
                  {s.quote}
                </blockquote>
                <p className="mt-3 font-display italic text-sm text-earth-400">
                  {s.en}
                </p>
                <figcaption className="mt-6 pt-5 border-t border-earth-200/50 flex items-center gap-3">
                  <span
                    className={`inline-flex w-10 h-10 rounded-full bg-gradient-to-br ${s.accent} items-center justify-center text-cream font-display text-sm`}
                  >
                    {s.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-hindi text-earth-600 text-sm">
                      {s.name}
                    </span>
                    <span className="block font-hindiSans text-[12px] text-earth-400">
                      {s.role}
                    </span>
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
