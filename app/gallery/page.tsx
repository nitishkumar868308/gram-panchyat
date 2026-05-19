"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";
import {
  SceneSunrise,
  SceneClassroom,
  SceneFarm,
  SceneWomenSHG,
  SceneSolarLamp,
  SceneRoad,
} from "@/components/VillageScene";

type Item = {
  Scene: React.ComponentType<{ className?: string }>;
  hindi: string;
  en: string;
  date: string;
  location: string;
  tag: string;
  tagColor: string;
  story: string;
  details: { label: string; value: string }[];
};

const items: Item[] = [
  {
    Scene: SceneSunrise,
    hindi: "सूर्योदय — एक नई शुरुआत",
    en: "Sunrise — every morning, a new promise",
    date: "मार्च 2025",
    location: "सूर्यपुरा, पीपल चौक से दृश्य",
    tag: "Identity",
    tagColor: "from-saffron-500 to-terracotta-500",
    story:
      "सूर्यपुरा का नाम ही 'सूर्य' से बना है। हर सुबह जब पहली किरण पीपल के पेड़ से होकर पंचायत भवन तक पहुँचती है, गाँव जाग उठता है — चूल्हे जल जाते हैं, बच्चे स्कूल जाते हैं, और किसान खेतों की ओर निकलते हैं। यह दृश्य हमारे लोगो में भी समाया है — हर पहल, हर वादा, हर भोर — इसी से शुरू होता है।",
    details: [
      { label: "स्थान", value: "पीपल चौक" },
      { label: "ऋतु", value: "वसंत" },
      { label: "समय", value: "प्रातः 5:42" },
      { label: "प्रासंगिक स्तंभ", value: "ब्रांड पहचान" },
    ],
  },
  {
    Scene: SceneClassroom,
    hindi: "स्मार्ट क्लासरूम",
    en: "Smart classrooms — where dreams find a screen",
    date: "जुलाई 2024",
    location: "राजकीय प्राथमिक विद्यालय, सूर्यपुरा",
    tag: "Education",
    tagColor: "from-saffron-500 to-terracotta-500",
    story:
      "तीन कक्षाओं को 'स्मार्ट क्लासरूम' में बदला गया — projector, tablet, और इंटरनेट के साथ। पहले जो पाठ काले बोर्ड पर एक चित्र से समझाया जाता था, अब वो video बन कर बच्चों की आँखों में उतर जाता है। 412 बच्चे — पहली बार सीख रहे हैं कि भारत के बाहर की दुनिया भी उनके हाथ में आ सकती है।",
    details: [
      { label: "कक्षाएँ", value: "3 स्मार्ट कमरे" },
      { label: "बच्चे", value: "412 नामांकित" },
      { label: "उपकरण", value: "Projector + 18 tablets" },
      { label: "शुरुआत", value: "जुलाई 2024" },
    ],
  },
  {
    Scene: SceneSolarLamp,
    hindi: "सोलर लैम्प — रोशन रातें",
    en: "Lit nights, lit dreams",
    date: "सितंबर 2024",
    location: "गली नं. 4 — पुराना मोहल्ला",
    tag: "Sustainability",
    tagColor: "from-saffron-400 to-forest-500",
    story:
      "240 सोलर स्ट्रीट लाइट लगने के बाद, गाँव की रातें पहली बार सुरक्षित और पढ़ने योग्य हुईं। सबसे बड़ा बदलाव — किशोरियाँ अब शाम 7 बजे भी बाहर निकल सकती हैं। और रवि जैसे बच्चे, जिनके घर बिजली नहीं — वो लैम्प पोस्ट के नीचे बैठ कर पढ़ाई करते हैं।",
    details: [
      { label: "लैम्प पोस्ट", value: "240 स्थापित" },
      { label: "कवरेज", value: "100% गलियाँ" },
      { label: "बचत", value: "₹2.4 लाख / वर्ष" },
      { label: "स्रोत", value: "सोलर — शून्य कार्बन" },
    ],
  },
  {
    Scene: SceneFarm,
    hindi: "खेत — हमारी पहचान",
    en: "Fields of identity",
    date: "अक्टूबर 2024",
    location: "उत्तरी खेत क्षेत्र",
    tag: "Farmer",
    tagColor: "from-forest-500 to-gold-500",
    story:
      "640 से अधिक किसान अब digital मंडी रेट SMS पर पाते हैं। मिट्टी जाँच साल में दो बार मुफ्त होती है, और जैविक खेती का प्रशिक्षण केंद्र हर शनिवार खुला है। पिछले छह महीने में औसत आमदनी 18-22% बढ़ी है — सिर्फ इसलिए कि किसान को पता है कौनसे दिन, कौनसा अनाज, किस मंडी में बेचना है।",
    details: [
      { label: "किसान", value: "640+ पंजीकृत" },
      { label: "औसत आय वृद्धि", value: "+20%" },
      { label: "जैविक रकबा", value: "84 एकड़" },
      { label: "सोलर पम्प", value: "47 स्थापित" },
    ],
  },
  {
    Scene: SceneWomenSHG,
    hindi: "स्व-सहायता समूह",
    en: "Women's collectives",
    date: "नवंबर 2024",
    location: "महिला सेवा केंद्र, सूर्यपुरा",
    tag: "Empowerment",
    tagColor: "from-terracotta-500 to-saffron-500",
    story:
      "27 महिला स्व-सहायता समूह — सिलाई, अचार, हस्तशिल्प, और जैविक बीज। 400+ महिलाएँ आज स्वयं कमाती हैं। मीरा देवी, जो पहले घर खर्च के लिए दूसरों का मुँह देखती थीं, अब महीने में ₹4,000 कमाती हैं और अपनी बेटी को निजी स्कूल भेजती हैं। यह सिर्फ आर्थिक आज़ादी नहीं — यह आत्मसम्मान का जन्म है।",
    details: [
      { label: "समूह", value: "27 सक्रिय" },
      { label: "महिलाएँ", value: "400+ जुड़ीं" },
      { label: "औसत आय", value: "₹3,800 / माह" },
      { label: "ऋण वितरण", value: "₹18.4 लाख" },
    ],
  },
  {
    Scene: SceneRoad,
    hindi: "पक्की सड़क — गरिमा की राह",
    en: "Roads of dignity",
    date: "दिसंबर 2024",
    location: "मुख्य मार्ग से अंतिम टोला",
    tag: "Infrastructure",
    tagColor: "from-earth-400 to-earth-600",
    story:
      "11.2 किमी पक्की सड़क — आख़िरी घर तक। बारिश में जब चप्पल कीचड़ में फँसती थी, तब समझा कि सड़क सिर्फ रास्ता नहीं, गरिमा भी है। आज एम्बुलेंस हर घर तक पहुँचती है। स्कूल बस गाँव के अंदर तक आती है। और शहर से लौटे लोग कहते हैं — 'अब अपना गाँव भी 'गाँव' नहीं लगता, घर लगता है।'",
    details: [
      { label: "लंबाई", value: "11.2 किमी" },
      { label: "घर जुड़े", value: "100% कवरेज" },
      { label: "एम्बुलेंस-योग्य", value: "हाँ" },
      { label: "बजट", value: "₹1.42 करोड़" },
    ],
  },
];

export default function GalleryPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () =>
      setOpenIdx((i) => (i === null ? null : (i + 1) % items.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i - 1 + items.length) % items.length,
      ),
    [],
  );

  // Keyboard: Esc / arrows
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, next, prev]);

  const open = openIdx !== null ? items[openIdx] : null;

  return (
    <>
      <PageHero
        eyebrow="झलकियाँ · Glimpses"
        hindi={
          <>
            कुछ पल —
            <br />
            <span className="text-saffron-200">जो शब्दों से बड़े हैं।</span>
          </>
        }
        english="Moments that speak louder than words."
        description="हर तस्वीर एक यात्रा है। किसी भी झलक पर click कीजिए — पूरी कहानी, तारीख, स्थान, और आँकड़े खुल जाएँगे।"
      />

      <section className="py-16 md:py-24 bg-cream-50 bg-grain">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* UNIFORM grid — same aspect ratio for every tile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {items.map((it, i) => {
              const Scene = it.Scene;
              return (
                <motion.button
                  key={i}
                  onClick={() => setOpenIdx(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group text-left relative overflow-hidden rounded-2xl border border-earth-200/40 shadow-soft bg-cream-50 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-2 focus:ring-offset-cream-50"
                  aria-label={`${it.hindi} — पूरी कहानी खोलें`}
                >
                  {/* Fixed aspect ratio — every card is identical */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Scene className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    {/* Always-visible tag pill */}
                    <span
                      className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-sm text-[10px] font-display uppercase tracking-[0.18em] text-earth-600 border border-cream/40`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${it.tagColor}`}
                      />
                      {it.tag}
                    </span>
                    {/* Gradient bottom for caption readability */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-earth-700/85 via-earth-700/30 to-transparent" />
                  </div>

                  {/* Caption strip — always visible (not just on hover) */}
                  <div className="p-5 border-t border-earth-200/40 bg-cream-50">
                    <div className="font-hindi text-lg text-earth-600 leading-tight">
                      {it.hindi}
                    </div>
                    <div className="mt-1 font-display italic text-sm text-earth-400">
                      {it.en}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-hindiSans text-earth-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {it.date}
                      </span>
                      <span className="text-terracotta-600 font-display uppercase tracking-[0.18em] group-hover:underline">
                        View story →
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <p className="mt-10 text-center font-display italic text-earth-400 text-sm">
            Tap / click any tile to read the full story.
          </p>
        </div>
      </section>

      {/* ──── Modal / Lightbox ──── */}
      <AnimatePresence>
        {open && openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            {/* Scrim */}
            <div
              className="absolute inset-0 bg-earth-700/85 backdrop-blur-md"
              onClick={close}
              aria-hidden
            />

            {/* Dialog */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl md:rounded-3xl bg-cream-50 shadow-2xl grid grid-cols-1 md:grid-cols-12"
            >
              {/* Close button */}
              <button
                onClick={close}
                aria-label="बंद करें"
                className="absolute top-3 right-3 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream/95 hover:bg-cream text-earth-600 shadow-soft border border-earth-200/50 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="पिछली कहानी"
                className="hidden md:inline-flex absolute left-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-cream/90 hover:bg-cream text-earth-600 shadow-soft border border-earth-200/50 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="अगली कहानी"
                className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-cream/90 hover:bg-cream text-earth-600 shadow-soft border border-earth-200/50 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image side */}
              <div className="md:col-span-7 relative overflow-hidden bg-earth-200">
                <div className="aspect-[4/3] md:aspect-auto md:h-full">
                  <open.Scene className="absolute inset-0 w-full h-full" />
                </div>
                <span
                  className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/90 backdrop-blur-sm text-[10px] font-display uppercase tracking-[0.2em] text-earth-600 border border-cream/40`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${open.tagColor}`}
                  />
                  {open.tag}
                </span>
              </div>

              {/* Detail side — scrollable */}
              <div className="md:col-span-5 max-h-[55vh] md:max-h-[92vh] overflow-y-auto bg-cream-50 p-6 md:p-8">
                <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
                  {open.tag} · {open.date}
                </div>
                <h2
                  id="gallery-modal-title"
                  className="mt-3 font-hindi text-2xl md:text-3xl text-earth-600 leading-tight"
                >
                  {open.hindi}
                </h2>
                <p className="mt-1 font-display italic text-earth-400">
                  {open.en}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-earth-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                    {open.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                    {open.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-terracotta-500" />
                    {open.tag}
                  </span>
                </div>

                <div className="my-6 divider-tear" />

                <p className="font-hindiSans text-earth-600 leading-relaxed text-[15px]">
                  {open.story}
                </p>

                <div className="mt-7">
                  <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
                    विवरण · At a glance
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-3">
                    {open.details.map((d) => (
                      <div
                        key={d.label}
                        className="rounded-xl bg-cream border border-earth-200/50 p-3"
                      >
                        <dt className="font-hindiSans text-[11px] text-earth-400">
                          {d.label}
                        </dt>
                        <dd className="font-hindi text-earth-600 text-sm mt-0.5">
                          {d.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Mobile prev/next */}
                <div className="md:hidden mt-7 flex items-center justify-between gap-3">
                  <button
                    onClick={prev}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-full border border-earth-200 text-earth-600 text-sm"
                  >
                    <ChevronLeft className="w-4 h-4" /> पिछली
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-full bg-terracotta-600 text-cream text-sm"
                  >
                    अगली <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="mt-6 text-[11px] text-earth-400 font-display tracking-wider uppercase">
                  {openIdx + 1} / {items.length} · Esc / arrow keys to navigate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CallToAction />
    </>
  );
}
