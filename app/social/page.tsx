import { Sun, Quote, GraduationCap, Wheat, Fingerprint, Landmark, Route } from "lucide-react";
import { WarliBorder, SunRays, Mandala, DiyaIcon, WheatSpike } from "@/components/Motifs";

// Two square (1080x1080-equivalent) social posts shown side-by-side.
// You can screenshot each tile, or right-click → "save image" for export.

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <header className="max-w-2xl">
          <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
            <span className="w-6 h-px bg-terracotta-400/60" /> Social media kit
          </div>
          <h1 className="mt-3 font-hindi text-3xl md:text-5xl text-earth-600 leading-tight">
            दो पोस्ट — एक संदेश।
          </h1>
          <p className="mt-3 text-earth-500">
            Square 1:1 layouts (1080×1080 equivalent). Designed for Instagram /
            WhatsApp / X. Screenshot any tile to export.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* POST 1 — Quote / Emotional */}
          <div>
            <PostFrame label="Post 01 · Quote">
              <PostOne />
            </PostFrame>
          </div>

          {/* POST 2 — Stats / Pillars */}
          <div>
            <PostFrame label="Post 02 · Impact stats">
              <PostTwo />
            </PostFrame>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure>
      <div className="flex items-center justify-between mb-3">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-earth-400">
          {label}
        </span>
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-earth-400">
          1080 × 1080
        </span>
      </div>
      <div className="aspect-square rounded-3xl overflow-hidden shadow-soft border border-earth-200/40">
        {children}
      </div>
    </figure>
  );
}

// =============================================================================
// POST 1 — emotional quote, dawn palette
// =============================================================================
function PostOne() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-terracotta-700 via-terracotta-600 to-saffron-500 text-cream overflow-hidden p-10 flex flex-col justify-between">
      <SunRays className="absolute -top-32 -right-32 w-[520px] h-[520px] text-cream/15" />
      <Mandala className="absolute -bottom-40 -left-40 w-[460px] h-[460px] text-cream/8" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex w-10 h-10 rounded-full bg-cream/15 backdrop-blur items-center justify-center border border-cream/25">
            <Sun className="w-5 h-5 text-saffron-200" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-hindi text-base">सूर्यपुरा</span>
            <span className="block font-display text-[9px] uppercase tracking-[0.22em] text-saffron-100/85">
              Gram Vikas Portal
            </span>
          </span>
        </div>
        <DiyaIcon className="w-9 h-9" />
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote
          className="w-12 h-12 text-saffron-200/70 -mb-2"
          strokeWidth={1.4}
        />
        <p className="font-hindi text-[34px] sm:text-[40px] leading-[1.15]">
          "गाँव बदलेगा,
          <br />
          तभी देश बदलेगा।"
        </p>
        <p className="mt-4 font-display italic text-cream-100/85 text-sm">
          "A nation rises only when its village rises."
        </p>
      </div>

      {/* Footer */}
      <div className="relative">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-hindi text-cream text-sm">श्री रघुवीर सिंह</div>
            <div className="font-display text-[10px] uppercase tracking-[0.22em] text-saffron-100/75">
              Sarpanch · Development Ambassador
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-[10px] uppercase tracking-[0.22em] text-cream-100/70">
              suryapura.gov.in
            </div>
          </div>
        </div>
        <WarliBorder className="mt-5 w-full h-7 text-saffron-200/40" />
      </div>
    </div>
  );
}

// =============================================================================
// POST 2 — impact stats, cream + earth, premium editorial
// =============================================================================
function PostTwo() {
  const stats = [
    { icon: GraduationCap, n: "412", l: "बच्चे स्कूल में" },
    { icon: Wheat, n: "640+", l: "किसान पंजीकृत" },
    { icon: Route, n: "11.2km", l: "पक्की सड़क" },
    { icon: Fingerprint, n: "98%", l: "e-KYC कवरेज" },
  ];
  return (
    <div className="relative w-full h-full bg-cream-50 text-earth-600 overflow-hidden p-10 flex flex-col justify-between">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <WheatSpike className="absolute top-8 right-8 w-16 h-32 text-gold-500/50" />
      <WheatSpike className="absolute bottom-8 left-8 w-16 h-32 text-gold-500/50 -scale-x-100" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-terracotta-500 items-center justify-center">
            <Sun className="w-5 h-5 text-cream" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-hindi text-base text-earth-600">
              सूर्यपुरा
            </span>
            <span className="block font-display text-[9px] uppercase tracking-[0.22em] text-terracotta-600">
              Gram Vikas Portal
            </span>
          </span>
        </div>
        <div className="font-display text-[10px] uppercase tracking-[0.22em] text-earth-400">
          Annual · 2024–25
        </div>
      </div>

      {/* Heading */}
      <div className="relative">
        <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
          एक वर्ष का सफ़र · The year in numbers
        </div>
        <h2 className="mt-3 font-hindi text-[36px] sm:text-[44px] leading-[1.1] text-earth-600">
          आँकड़े नहीं —
          <br />
          <span className="text-terracotta-600">हर अंक एक चेहरा।</span>
        </h2>
      </div>

      {/* Stats grid */}
      <div className="relative grid grid-cols-2 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.l}
              className="rounded-2xl border border-earth-200/60 bg-cream p-4 shadow-emboss"
            >
              <Icon className="w-5 h-5 text-terracotta-600" strokeWidth={1.7} />
              <div className="mt-3 tabular font-display text-3xl text-earth-600">
                {s.n}
              </div>
              <div className="font-hindi text-earth-500 text-sm">{s.l}</div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between">
        <div className="font-hindi text-earth-500 text-sm max-w-[16ch] leading-snug">
          हर रुपये का हिसाब, हर सपने की गिनती।
        </div>
        <div className="font-display text-[10px] uppercase tracking-[0.22em] text-earth-400">
          suryapura.gov.in
        </div>
      </div>
    </div>
  );
}
