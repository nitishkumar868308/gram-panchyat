"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunRays, Mandala, DiyaIcon } from "./Motifs";

/**
 * A full-screen, emotional page-transition loader.
 *
 * How it works:
 *  · Document-level event delegation catches every internal <Link> click.
 *  · Loader appears immediately (Date.now stamped).
 *  · `usePathname()` fires when navigation completes — we then hide
 *    the loader, BUT enforce a minimum 600ms dwell so quick navigations
 *    don't flash like a glitch. Feels intentional, not jittery.
 *  · A 4s safety timeout hides the loader if something stalls.
 */
export function PageTransitionLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const shownAtRef = useRef(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hide loader after pathname changes (with min dwell time)
  useEffect(() => {
    if (!show) return;
    const elapsed = Date.now() - shownAtRef.current;
    const remaining = Math.max(0, 650 - elapsed);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShow(false), remaining);
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [pathname, show]);

  // Safety: never let the loader stick longer than 4s
  useEffect(() => {
    if (!show) return;
    const safety = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(safety);
  }, [show]);

  // Intercept internal link clicks
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Skip modified clicks (new tab, save, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
        return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const rawHref = a.getAttribute("href");
      if (!rawHref) return;
      // External / mailto / tel / hash-only → skip
      if (
        rawHref.startsWith("http://") ||
        rawHref.startsWith("https://") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("#")
      )
        return;
      if (a.target === "_blank") return;
      // Same path → skip (scroll or no-op)
      try {
        const url = new URL(a.href, window.location.origin);
        if (url.pathname === pathname) return;
      } catch {
        return;
      }
      shownAtRef.current = Date.now();
      setShow(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-earth-700/95 backdrop-blur-md"
          aria-live="polite"
          aria-busy="true"
        >
          {/* Subtle dot grid */}
          <div className="absolute inset-0 dot-grid opacity-15" aria-hidden />

          {/* Faint rotating mandala backdrop */}
          <Mandala className="absolute w-[120vw] max-w-[1100px] aspect-square text-saffron-300/8 loader-mandala" />

          {/* Center stage */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Rotating sun rays + diya in center */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
              <SunRays className="absolute inset-0 w-full h-full text-saffron-300/55 loader-rays" />
              <SunRays className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] text-saffron-200/40 loader-rays-rev" />
              <div className="relative z-10 loader-diya">
                <DiyaIcon className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_24px_rgba(217,119,6,0.6)]" />
              </div>
            </div>

            <div className="mt-7 font-hindi text-3xl md:text-4xl text-cream tracking-wide">
              सूर्यपुरा
            </div>
            <div className="mt-2 font-display italic text-saffron-200/85 text-sm md:text-base">
              एक पल — light is on its way…
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="loader-dot w-2 h-2 rounded-full bg-saffron-300/80"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-300/60 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
