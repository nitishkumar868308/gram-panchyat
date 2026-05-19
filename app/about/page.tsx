import { PageHero } from "@/components/PageHero";
import { LeaderProfile } from "@/components/LeaderProfile";
import { CallToAction } from "@/components/CallToAction";
import { CornerOrnament } from "@/components/Motifs";

const timeline = [
  {
    year: "2014",
    hindi: "वापसी का साल",
    en: "The return",
    body: "रघुवीर दिल्ली से अपने गाँव लौटे — अपनी डिग्री और दो सूटकेस के साथ। पहली बात जो खटकी — गाँव की सड़कें और स्कूल वैसे ही थे जैसे बीस साल पहले।",
  },
  {
    year: "2016",
    hindi: "पहली पंचायत",
    en: "First panchayat term",
    body: "27 वर्ष की उम्र में सबसे युवा सरपंच बने। पहली ही बैठक में 'खुली पंचायत' की परम्परा शुरू हुई — कोई बंद कमरा नहीं।",
  },
  {
    year: "2019",
    hindi: "डिजिटल पहल",
    en: "Digital leap",
    body: "गाँव में पहला कॉमन सर्विस सेंटर खुला। आधार, राशन कार्ड, e-KYC — सब काम घर के पास।",
  },
  {
    year: "2022",
    hindi: "स्व-सहायता क्रांति",
    en: "Self-help revolution",
    body: "27 महिला स्व-सहायता समूह बने — सिलाई, अचार, हस्तशिल्प। 400+ महिलाएँ आर्थिक रूप से स्वतंत्र।",
  },
  {
    year: "2024",
    hindi: "स्मार्ट सूर्यपुरा",
    en: "Smart Suryapura",
    body: "स्मार्ट क्लासरूम, सोलर स्ट्रीट लाइट, और गाँव की वेबसाइट — आज जिस portal को आप देख रहे हैं।",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="हमारी कहानी · Our Story"
        hindi={
          <>
            एक गाँव की यात्रा —
            <br />
            <span className="text-saffron-200">मिट्टी से सपनों तक।</span>
          </>
        }
        english="From soil to dreams — the story of Suryapura."
        description="सूर्यपुरा का बदलाव किसी एक रात में नहीं हुआ। यह दस वर्षों की मेहनत, हज़ार छोटे फ़ैसलों और एक ज़िद का परिणाम है। चलिए, यह कहानी शुरू से बताते हैं।"
      />

      <LeaderProfile />

      {/* Timeline */}
      <section className="relative py-20 md:py-28 bg-cream-50 overflow-hidden">
        <CornerOrnament className="absolute top-12 right-12 w-20 h-20 text-saffron-500/40" />
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
              <span className="w-6 h-px bg-terracotta-400/60" /> The Journey ·
              यात्रा
            </div>
            <h2 className="mt-4 font-hindi text-3xl md:text-5xl text-earth-600 leading-tight">
              दस वर्ष, एक स्वप्न,
              <br />
              <span className="text-terracotta-600">अनेक पड़ाव।</span>
            </h2>
          </div>

          <ol className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-saffron-300 via-terracotta-400 to-forest-500 md:-translate-x-px" />
            {timeline.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={t.year}
                  className={`relative mb-12 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className={`${isLeft ? "md:text-right md:pr-10" : "md:pl-10"} pl-12 md:pl-0`}>
                    <div className="tabular font-display text-terracotta-600 text-sm tracking-widest">
                      {t.year}
                    </div>
                    <div className="mt-1 font-hindi text-2xl text-earth-600">
                      {t.hindi}
                    </div>
                    <div className="font-display italic text-sm text-earth-400">
                      {t.en}
                    </div>
                    <p className="mt-3 font-hindiSans text-earth-500 leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-saffron-500 ring-4 ring-cream-50 md:-translate-x-1.5" />
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { h: "पारदर्शिता", e: "Transparency", d: "हर रुपये का हिसाब — पंचायत बोर्ड पर, और पोर्टल पर।" },
              { h: "सम्मान", e: "Dignity", d: "हर नागरिक का सम्मान। कतार में नहीं, सेवा में।" },
              { h: "सहभागिता", e: "Participation", d: "खुली पंचायत — हर निवासी की आवाज़।" },
              { h: "स्थायित्व", e: "Sustainability", d: "सोलर, जैविक, और लोक-शिल्प — पर्यावरण के साथ विकास।" },
            ].map((v) => (
              <div
                key={v.e}
                className="rounded-2xl bg-cream-50 border border-earth-200/40 p-6 shadow-soft"
              >
                <div className="font-hindi text-xl text-earth-600">{v.h}</div>
                <div className="font-display text-[11px] uppercase tracking-[0.18em] text-terracotta-600 mt-1">
                  {v.e}
                </div>
                <p className="mt-3 text-earth-500 text-sm leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
