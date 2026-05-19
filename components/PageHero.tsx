import { ReactNode } from "react";
import { SunRays, WarliBorder } from "./Motifs";

export function PageHero({
  eyebrow,
  hindi,
  english,
  description,
  children,
}: {
  eyebrow: string;
  hindi: ReactNode;
  english?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden text-cream bg-gradient-to-br from-earth-700 via-earth-600 to-terracotta-700">
      <SunRays className="absolute -top-32 -right-32 w-[520px] h-[520px] text-saffron-200/20" />
      <div className="absolute inset-0 dot-grid opacity-15" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-[11px] font-display uppercase tracking-[0.22em]">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-300" />
            {eyebrow}
          </div>
          <h1 className="mt-5 font-hindi text-4xl sm:text-5xl md:text-[68px] leading-[1.06] text-cream">
            {hindi}
          </h1>
          {english && (
            <p className="mt-4 font-display italic text-lg md:text-xl text-saffron-100/85">
              {english}
            </p>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-cream-100/80 leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
      <WarliBorder className="absolute bottom-0 left-0 w-full h-9 text-saffron-200/25" />
    </section>
  );
}
