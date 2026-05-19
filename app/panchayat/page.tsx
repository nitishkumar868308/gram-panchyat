import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";
import {
  Calendar,
  FileText,
  ShieldCheck,
  QrCode,
  ArrowUpRight,
  Users,
  Wallet,
  IndianRupee,
} from "lucide-react";

const services = [
  { icon: FileText, h: "जन्म / मृत्यु प्रमाणपत्र", t: "5 दिन में डिजिटल कॉपी" },
  { icon: IndianRupee, h: "पेंशन व सब्सिडी", t: "DBT — सीधे खाते में" },
  { icon: ShieldCheck, h: "राशन कार्ड e-KYC", t: "घर से ही पूरा" },
  { icon: QrCode, h: "गाँव नागरिक कार्ड", t: "QR-आधारित डिजिटल पहचान" },
  { icon: Calendar, h: "खुली पंचायत बैठक", t: "हर दूसरा शनिवार · पीपल चौक" },
  { icon: Wallet, h: "बजट पारदर्शिता", t: "हर खर्च online — कोई परदा नहीं" },
];

const budget = [
  { head: "सड़क व नल", amount: 142, pct: 30 },
  { head: "शिक्षा", amount: 95, pct: 20 },
  { head: "स्वास्थ्य", amount: 71, pct: 15 },
  { head: "किसान सहायता", amount: 95, pct: 20 },
  { head: "स्वच्छता व सोलर", amount: 47, pct: 10 },
  { head: "प्रशासन", amount: 24, pct: 5 },
];

export default function PanchayatPage() {
  return (
    <>
      <PageHero
        eyebrow="ई-पंचायत · Digital Governance"
        hindi={
          <>
            खुली पंचायत —
            <br />
            <span className="text-saffron-200">हर रुपये का हिसाब।</span>
          </>
        }
        english="An open panchayat — every rupee accounted for."
        description="हम मानते हैं कि पारदर्शिता विश्वास की पहली ईंट है। नीचे आप हमारी हर सेवा, हर खर्च, और हर बैठक का विवरण देख सकते हैं।"
      />

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-cream-50 bg-grain">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
              <span className="w-6 h-px bg-terracotta-400/60" /> सेवाएँ · Services
            </div>
            <h2 className="mt-4 font-hindi text-3xl md:text-5xl text-earth-600 leading-tight">
              जो काम पहले शहर जाकर होता था —
              <br />
              <span className="text-terracotta-600">अब गाँव में।</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.h}
                  className="group rounded-2xl bg-cream-50 border border-earth-200/40 p-6 shadow-soft hover:shadow-glow transition-all"
                >
                  <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center bg-gradient-to-br from-saffron-500 to-terracotta-500 text-cream">
                    <Icon className="w-6 h-6" strokeWidth={1.7} />
                  </div>
                  <div className="mt-5 font-hindi text-lg text-earth-600">
                    {s.h}
                  </div>
                  <div className="mt-1 font-hindiSans text-sm text-earth-400">
                    {s.t}
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-terracotta-600 font-display text-[11px] uppercase tracking-[0.18em] group-hover:gap-2 transition-all">
                    सेवा प्राप्त करें{" "}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Budget transparency */}
      <section className="py-20 md:py-28 bg-earth-600 text-cream overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-saffron-200">
                <span className="w-6 h-px bg-saffron-300/60" /> Budget 2024–25
              </div>
              <h2 className="mt-4 font-hindi text-3xl md:text-5xl leading-tight">
                कुल बजट —
                <br />
                <span className="text-saffron-200 tabular">₹4.8 करोड़</span>
              </h2>
              <p className="mt-5 text-cream-100/80 leading-relaxed">
                हर शीर्ष का खर्च, हर महीने पंचायत बोर्ड पर लिखा जाता है — और
                यहाँ portal पर भी। अगर आपको कोई शंका हो — खुली पंचायत में
                पूछिए।
              </p>
              <div className="mt-7 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-cream/10 border border-cream/20 text-sm">
                <Users className="w-4 h-4 text-saffron-300" /> 1,840+ नागरिकों ने इस बजट का अवलोकन किया
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {budget.map((b) => (
                <div key={b.head}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-hindi text-cream">{b.head}</span>
                    <span className="tabular font-display text-saffron-200">
                      ₹{b.amount} लाख
                      <span className="ml-2 text-xs text-cream-100/60">
                        ({b.pct}%)
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-cream/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-saffron-400 to-terracotta-400"
                      style={{ width: `${b.pct * 3.3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open panchayat schedule */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="rounded-3xl border border-earth-200/40 bg-cream-50 shadow-soft p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl bg-saffron-500/20" />
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
                  Next open panchayat
                </div>
                <div className="mt-3 font-hindi text-2xl md:text-3xl text-earth-600 leading-tight">
                  अगली खुली पंचायत — दूसरे शनिवार,
                  <br />
                  <span className="text-terracotta-600">पीपल चौक, सूर्यपुरा</span>
                </div>
                <p className="mt-4 text-earth-500">
                  कोई भी ग्रामवासी अपनी समस्या / सुझाव खुले में रख सकता है। आइए
                  — और सुनिए, बोलिए, बदलिए।
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-earth-200/50 p-5 bg-cream">
                  <div className="font-display text-[10px] uppercase tracking-[0.22em] text-earth-400">
                    Saturday
                  </div>
                  <div className="mt-1 tabular font-display text-6xl text-terracotta-600">
                    14
                  </div>
                  <div className="font-hindi text-earth-600">जून · 4:30 बजे</div>
                  <button className="mt-5 w-full py-3 rounded-xl bg-earth-600 text-cream text-sm font-medium hover:bg-terracotta-600 transition">
                    Reminder लगाइए
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
