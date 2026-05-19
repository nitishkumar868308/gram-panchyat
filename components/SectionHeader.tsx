import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  hindi,
  english,
  align = "left",
  tone = "earth",
}: {
  eyebrow?: string;
  hindi: ReactNode;
  english?: ReactNode;
  align?: "left" | "center";
  tone?: "earth" | "cream";
}) {
  const isCenter = align === "center";
  const isCream = tone === "cream";
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] ${
            isCream ? "text-saffron-200" : "text-terracotta-600"
          }`}
        >
          <span
            className={`w-6 h-px ${isCream ? "bg-saffron-300/60" : "bg-terracotta-400/60"}`}
            aria-hidden
          />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-4 font-hindi text-[30px] sm:text-4xl md:text-5xl leading-[1.12] ${
          isCream ? "text-cream" : "text-earth-600"
        }`}
      >
        {hindi}
      </h2>
      {english && (
        <p
          className={`mt-3 font-display italic text-base md:text-lg ${
            isCream ? "text-cream-100/75" : "text-earth-400"
          }`}
        >
          {english}
        </p>
      )}
    </div>
  );
}
