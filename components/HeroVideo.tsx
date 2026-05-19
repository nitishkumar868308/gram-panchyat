"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { SunRays, WarliBorder } from "./Motifs";
import { AnimatedVillageScene } from "./AnimatedVillageScene";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Probe for an optional local hero video with a HEAD request *first*.
  // If the file isn't there, we never render the <source>, so no 404 noise
  // in the dev terminal or browser console. Animated SVG scene stays as-is.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const path of ["/hero.mp4", "/hero.webm"]) {
        try {
          const r = await fetch(path, { method: "HEAD", cache: "no-store" });
          if (r.ok) {
            if (!cancelled) setVideoSrc(path);
            return;
          }
        } catch {
          // network blip — fall through to animated scene
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoSrc) return;
    const onReady = () => setVideoReady(true);
    const onError = () => setVideoReady(false);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("error", onError);
    };
  }, [videoSrc]);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden text-cream">
      {/* Layer 1: always-on animated village scene — zero network deps */}
      <AnimatedVillageScene className="absolute inset-0 w-full h-full" />

      {/* Layer 2: local video overlay — only rendered if a HEAD probe found
          /hero.mp4 (or .webm). Drop a 1080p village clip in `public/hero.mp4`
          and it will fade in over the animated scene. */}
      {videoSrc && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          src={videoSrc}
        />
      )}

      {/* Cinematic overlay for text readability */}
      <div className="absolute inset-0 hero-overlay" aria-hidden />

      {/* Decorative sun-ray watermark */}
      <SunRays className="absolute -top-24 -right-24 w-[420px] h-[420px] text-saffron-200/25" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-28 md:pt-44 pb-16 md:pb-32 min-h-[100svh] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-[11px] font-display uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-300 animate-pulse" />
            एक गाँव · अनेक सपने · A village reborn
          </div>

          <h1 className="mt-5 md:mt-6 font-hindi text-[36px] leading-[1.1] sm:text-[52px] md:text-[76px] md:leading-[1.05] font-normal text-cream">
            जहाँ सूरज उगता है,
            <br />
            <span className="text-saffron-300">वहीं से उजाला</span> शुरू होता है।
          </h1>

          <p className="mt-5 md:mt-6 max-w-xl text-[15px] md:text-lg text-cream-100/90 leading-relaxed">
            <span className="font-hindi">सूर्यपुरा ग्राम विकास पोर्टल</span> —
            शिक्षा, किसान, सड़क, पंचायत और डिजिटल पहचान के पाँच स्तंभों पर
            खड़ा एक सम्पूर्ण विकास का सपना।
          </p>
          <p className="mt-2 max-w-xl text-sm text-cream-100/70 italic">
            "Where the sun rises, light begins — bringing dignity to every door."
          </p>

          <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/initiatives"
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-saffron-500 text-earth-700 font-semibold hover:bg-saffron-400 transition-all shadow-glow text-sm md:text-base"
            >
              हमारी पहल देखें
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/25 text-cream hover:bg-cream/20 transition-all text-sm md:text-base"
            >
              <Play className="w-4 h-4 fill-current" /> कहानी सुनिए
            </Link>
          </div>
        </motion.div>

        {/* Bottom row — stats + scroll hint */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-8 grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 max-w-2xl"
          >
            {[
              { n: "12,400+", l: "ग्रामवासी" },
              { n: "5", l: "स्तंभ" },
              { n: "₹4.8 Cr", l: "बजट" },
            ].map((s) => (
              <div key={s.l} className="border-l border-cream/25 pl-3 sm:pl-4">
                <div className="tabular font-display text-xl sm:text-2xl md:text-3xl text-saffron-200">
                  {s.n}
                </div>
                <div className="font-hindiSans text-[11px] sm:text-xs md:text-sm text-cream-100/75 mt-0.5 sm:mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="md:col-span-4 hidden md:flex items-end justify-end"
          >
            <div className="flex flex-col items-center gap-2 text-cream-100/70">
              <span className="font-display text-[10px] uppercase tracking-[0.25em]">
                Scroll
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Warli border at bottom — symbolic of grounding in folk identity */}
      <WarliBorder className="absolute bottom-0 left-0 w-full h-8 md:h-10 text-saffron-200/30" />
    </section>
  );
}
