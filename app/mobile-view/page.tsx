import Link from "next/link";
import { Sun, GraduationCap, Wheat, Route, Landmark, Fingerprint, ArrowRight, Battery, Wifi, Signal } from "lucide-react";
import { WarliBorder, SunRays } from "@/components/Motifs";

// A dedicated mobile-screenshot page: shows the village portal homepage
// rendered inside a realistic iPhone frame, with annotations.
// Open in any browser, screenshot, drop into a deck.

export default function MobileShowcasePage() {
  return (
    <div className="min-h-screen bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
            <span className="w-6 h-px bg-terracotta-400/60" /> Mobile preview
          </div>
          <h1 className="mt-3 font-hindi text-3xl md:text-5xl text-earth-600 leading-tight">
            जेब में पूरा गाँव।
          </h1>
          <p className="mt-3 text-earth-500 font-display italic">
            The entire village portal, in your pocket.
          </p>
          <p className="mt-4 text-earth-500 leading-relaxed max-w-2xl font-hindiSans">
            ज़्यादातर गाँववासी पहली बार वेब को मोबाइल पर देखेंगे — इसलिए हम
            mobile-first design पर ज़ोर देते हैं। 16px+ body text, 44px+ tap
            targets, और single-thumb navigation।
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Phone frame */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneFrame />
          </div>

          {/* Annotation panel */}
          <aside className="lg:col-span-6 space-y-6">
            <Note
              n="01"
              h="Cinematic video hero"
              hindi="भावनात्मक video hero"
              body="गाँव की हक़ीक़त — सूर्योदय, खेत, माँ की मुस्कान — visitor को पहली सेकंड में जोड़ देती है। Overlay gradient text-readability सुनिश्चित करता है।"
            />
            <Note
              n="02"
              h="Devanagari-first headline"
              hindi="हिंदी पहले, अंग्रेज़ी साथ"
              body="Tiro Devanagari Hindi typeface — एक classical, calligraphic feel जो premium भी है और जड़ों से जुड़ा भी। English subhead support के लिए, replacement नहीं।"
            />
            <Note
              n="03"
              h="Pillars in single-column stack"
              hindi="एक-कॉलम, बड़े tap targets"
              body="Mobile पर 5 स्तंभ vertical stack में — हर card 56px+ tap area, स्पष्ट icon + Hindi heading + English caption।"
            />
            <Note
              n="04"
              h="Bottom CTA always reachable"
              hindi="अंगूठे की पहुँच में CTA"
              body="'सहयोग दें' button hero और footer दोनों जगह — एक-हाथ scroll पर 3 सेकंड में reachable।"
            />
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-earth-600 text-cream text-sm font-medium hover:bg-terracotta-600 transition"
            >
              Full site देखें — Open desktop view
              <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Note({
  n,
  h,
  hindi,
  body,
}: {
  n: string;
  h: string;
  hindi: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-cream-50 border border-earth-200/40 p-5 md:p-6 shadow-soft">
      <div className="flex items-baseline gap-4">
        <span className="tabular font-display text-3xl text-terracotta-500">
          {n}
        </span>
        <div>
          <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
            {h}
          </div>
          <div className="mt-1 font-hindi text-lg text-earth-600">{hindi}</div>
        </div>
      </div>
      <p className="mt-3 text-earth-500 leading-relaxed text-[15px] font-hindiSans">
        {body}
      </p>
    </div>
  );
}

// =============================================================================
// Realistic phone frame with a hand-built mobile homepage inside.
// (We don't iframe the live site — at this scale we want curated mobile fidelity.)
// =============================================================================
function PhoneFrame() {
  return (
    <div className="relative">
      {/* Floor shadow */}
      <div
        aria-hidden
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-12 rounded-full blur-3xl bg-earth-600/30"
      />

      <div className="relative w-[320px] sm:w-[360px] h-[680px] sm:h-[760px] rounded-[52px] bg-earth-700 p-3 shadow-2xl">
        {/* Bezel */}
        <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-cream-50">
          {/* Status bar */}
          <div className="relative h-9 bg-earth-700 text-cream flex items-center justify-between px-6 z-20">
            <span className="tabular font-display text-xs">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-5 bg-earth-700 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Scrollable content */}
          <div className="relative h-[calc(100%-2.25rem)] overflow-hidden">
            {/* Hero */}
            <div className="relative h-72 bg-gradient-to-br from-earth-700 via-terracotta-700 to-saffron-600 text-cream p-5 overflow-hidden">
              <SunRays className="absolute -top-16 -right-16 w-60 h-60 text-saffron-200/25" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex w-8 h-8 rounded-full bg-gradient-to-br from-saffron-500 to-terracotta-500 items-center justify-center">
                    <Sun className="w-4 h-4 text-cream" strokeWidth={2.2} />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-hindi text-xs">सूर्यपुरा</span>
                    <span className="block font-display text-[8px] uppercase tracking-[0.18em] text-saffron-200">
                      Gram Vikas
                    </span>
                  </span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-cream/15 backdrop-blur border border-cream/25 font-display uppercase tracking-wider">
                  Menu
                </span>
              </div>
              <div className="relative mt-9">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cream/10 backdrop-blur border border-cream/20 text-[9px] font-display uppercase tracking-[0.2em]">
                  <span className="w-1 h-1 rounded-full bg-saffron-300" />
                  एक गाँव · अनेक सपने
                </span>
                <h2 className="mt-3 font-hindi text-[22px] leading-tight text-cream">
                  जहाँ सूरज उगता है,
                  <br />
                  <span className="text-saffron-200">वहीं उजाला</span> शुरू।
                </h2>
                <button className="mt-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-saffron-500 text-earth-700 text-xs font-semibold">
                  हमारी पहल
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <WarliBorder className="absolute bottom-0 left-0 w-full h-5 text-saffron-200/30" />
            </div>

            {/* Stats strip */}
            <div className="bg-cream-50 px-5 py-4 grid grid-cols-3 gap-3 border-b border-earth-200/40">
              {[
                { n: "12.4K", l: "जुड़े" },
                { n: "₹4.8Cr", l: "बजट" },
                { n: "98%", l: "e-KYC" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="tabular font-display text-base text-terracotta-600">
                    {s.n}
                  </div>
                  <div className="font-hindi text-[10px] text-earth-500">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Pillars list */}
            <div className="bg-cream-50 px-5 py-5 space-y-3">
              <div className="font-display text-[9px] uppercase tracking-[0.22em] text-terracotta-600">
                पाँच स्तंभ · Five Pillars
              </div>
              {[
                { I: GraduationCap, h: "शिक्षा", e: "Education", c: "from-saffron-500 to-terracotta-500" },
                { I: Wheat, h: "किसान", e: "Farmer welfare", c: "from-forest-500 to-gold-500" },
                { I: Route, h: "सड़क व जल", e: "Roads & water", c: "from-earth-400 to-earth-600" },
                { I: Landmark, h: "पंचायत", e: "e-Panchayat", c: "from-terracotta-500 to-gold-500" },
                { I: Fingerprint, h: "डिजिटल पहचान", e: "Digital identity", c: "from-saffron-400 to-forest-500" },
              ].map((p, i) => {
                const Icon = p.I;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-cream border border-earth-200/40"
                  >
                    <span
                      className={`inline-flex w-10 h-10 rounded-xl items-center justify-center bg-gradient-to-br ${p.c} text-cream shrink-0`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.7} />
                    </span>
                    <div className="flex-1">
                      <div className="font-hindi text-sm text-earth-600 leading-tight">
                        {p.h}
                      </div>
                      <div className="font-display text-[9px] uppercase tracking-[0.18em] text-earth-400">
                        {p.e}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-earth-400" />
                  </div>
                );
              })}
            </div>

            {/* Fade-out hint that there's more below */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream-50 to-transparent" />
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-earth-700/80" />
        </div>
      </div>
    </div>
  );
}
