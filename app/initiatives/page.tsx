import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";
import {
  GraduationCap,
  Wheat,
  Route,
  Landmark,
  Fingerprint,
  CheckCircle2,
} from "lucide-react";

const initiatives = [
  {
    id: "education",
    icon: GraduationCap,
    hindi: "शिक्षा — हर बच्चा स्कूल जाए",
    en: "Education",
    accent: "from-saffron-500 to-terracotta-500",
    intro:
      "एक बच्चे को पढ़ाना, एक पीढ़ी को बदलना है। सूर्यपुरा का स्कूल अब वो पुराना सरकारी ढाँचा नहीं — यहाँ डिजिटल कक्षा है, पुस्तकालय है, और हर बच्चे के लिए एक शिक्षक का दिल है।",
    points: [
      "3 स्मार्ट क्लासरूम — projector, tablet, और इंटरनेट के साथ",
      "गाँव-पुस्तकालय — 1,200+ किताबें, हिंदी और अंग्रेज़ी दोनों",
      "लड़कियों के लिए विशेष छात्रवृत्ति — कक्षा 9 के बाद",
      "बाल-वाटिका — 3 से 6 साल के बच्चों के लिए मुफ्त शिक्षा",
    ],
    stat: { n: "412", l: "बच्चे नामांकित" },
  },
  {
    id: "farmer",
    icon: Wheat,
    hindi: "किसान — खेत से बाज़ार तक",
    en: "Farmer Welfare",
    accent: "from-forest-500 to-gold-500",
    intro:
      "हमारा किसान सिर्फ अनाज नहीं उगाता — वो परम्परा उगाता है। उसी परम्परा को तकनीक के साथ जोड़ना ही हमारी कोशिश है।",
    points: [
      "Live मंडी रेट SMS — रोज़ सुबह 6 बजे",
      "निःशुल्क मिट्टी जाँच — साल में दो बार",
      "सोलर पम्प सब्सिडी — 70% सरकार + 20% पंचायत",
      "जैविक खेती प्रशिक्षण केंद्र — कृषि विज्ञान केंद्र के सहयोग से",
    ],
    stat: { n: "640+", l: "किसान पंजीकृत" },
  },
  {
    id: "infra",
    icon: Route,
    hindi: "सड़क व जल — हर घर तक",
    en: "Roads & Water",
    accent: "from-earth-400 to-earth-600",
    intro:
      "बारिश में जब चप्पल कीचड़ में फँसी, तब समझा — सड़क सिर्फ रास्ता नहीं, गरिमा भी है।",
    points: [
      "11.2 किमी पक्की सड़क — आख़िरी टोले तक",
      "हर घर नल — जल जीवन मिशन के अंतर्गत 100% कवरेज",
      "वर्षा-जल संचयन — 18 छोटे चेक डैम",
      "सोलर स्ट्रीट लाइट — 240 लैम्प पोस्ट",
    ],
    stat: { n: "100%", l: "घर तक नल" },
  },
  {
    id: "panchayat",
    icon: Landmark,
    hindi: "ई-पंचायत — खुली पंचायत",
    en: "e-Panchayat",
    accent: "from-terracotta-500 to-gold-500",
    intro:
      "जब हर रुपये का हिसाब पारदर्शी हो, तब विश्वास बनता है। हमारी पंचायत बंद कमरे में नहीं — पीपल के पेड़ के नीचे चलती है।",
    points: [
      "हर महीने की खुली पंचायत — दूसरे शनिवार",
      "ऑनलाइन शिकायत पोर्टल — 72 घंटे में जवाब",
      "बजट की पूर्ण पारदर्शिता — हर एक खर्च online",
      "QR कोड से नागरिक सेवा — आधार से जोड़कर",
    ],
    stat: { n: "₹4.8 Cr", l: "पारदर्शी बजट" },
  },
  {
    id: "digital",
    icon: Fingerprint,
    hindi: "डिजिटल पहचान — गाँव का अपना कार्ड",
    en: "Digital Identity",
    accent: "from-saffron-400 to-forest-500",
    intro:
      "पहचान सिर्फ कागज़ नहीं — गरिमा का प्रमाण है। सूर्यपुरा का डिजिटल नागरिक कार्ड, इसी विश्वास का छोटा सा रूप।",
    points: [
      "98% e-KYC सम्पन्न — आधार-लिंक्ड",
      "गाँव का अपना डिजिटल नागरिक कार्ड — QR कोड के साथ",
      "स्वास्थ्य रिकॉर्ड — एक क्लिक में डॉक्टर तक",
      "सरकारी योजनाओं की Auto-eligibility जाँच",
    ],
    stat: { n: "98%", l: "e-KYC कवरेज" },
  },
];

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="विकास कार्य · Initiatives"
        hindi={
          <>
            पाँच स्तंभ —
            <br />
            <span className="text-saffron-200">एक मज़बूत गाँव।</span>
          </>
        }
        english="Five pillars holding up the dream of Suryapura."
        description="हर पहल के पीछे एक कहानी है, एक चेहरा है। नीचे पढ़िए कि हम वास्तव में क्या कर रहे हैं — और कैसे।"
      />

      <div className="bg-cream-50 bg-grain">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
          {initiatives.map((it, i) => {
            const Icon = it.icon;
            const reverse = i % 2 === 1;
            return (
              <section
                key={it.id}
                id={it.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div
                    className={`relative aspect-square w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-soft bg-gradient-to-br ${it.accent}`}
                  >
                    <div className="absolute inset-0 dot-grid opacity-25" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="w-32 h-32 md:w-40 md:h-40 text-cream/90"
                        strokeWidth={1.2}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-earth-700/85 to-transparent">
                      <div className="tabular font-display text-4xl text-cream">
                        {it.stat.n}
                      </div>
                      <div className="font-hindi text-cream-100/90 text-sm">
                        {it.stat.l}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="font-display text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
                    {`0${i + 1}`} · {it.en}
                  </div>
                  <h2 className="mt-3 font-hindi text-3xl md:text-[44px] leading-tight text-earth-600">
                    {it.hindi}
                  </h2>
                  <p className="mt-5 font-hindiSans text-earth-500 leading-relaxed text-[17px] max-w-2xl">
                    {it.intro}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {it.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 font-hindi text-earth-600"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-forest-500 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <CallToAction />
    </>
  );
}
