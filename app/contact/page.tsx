import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MapPin, MessageCircle, Heart, Users, type LucideIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="जुड़िए · Get involved"
        hindi={
          <>
            एक चिट्ठी, एक हाथ,
            <br />
            <span className="text-saffron-200">एक उम्मीद।</span>
          </>
        }
        english="A letter, a hand, a hope — we welcome you all."
        description="चाहे आप सहायता देना चाहें, स्वयंसेवक बनना चाहें, या सिर्फ अपनी कहानी सुनाना चाहें — हम सुनने को तैयार हैं।"
      />

      <section className="py-16 md:py-24 bg-cream-50 bg-grain">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-cream-50 border border-earth-200/40 shadow-soft p-6 md:p-10">
              <h2 className="font-hindi text-2xl md:text-3xl text-earth-600">
                हमें संदेश भेजिए
              </h2>
              <p className="mt-2 font-display italic text-earth-400 text-sm">
                Send us a message — we respond within 48 hours.
              </p>

              <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="आपका नाम" en="Your name" type="text" />
                <Field label="मोबाइल नंबर" en="Phone" type="tel" />
                <div className="md:col-span-2">
                  <Field label="ईमेल" en="Email" type="email" />
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="font-hindi text-sm text-earth-600">
                      आप कैसे जुड़ना चाहते हैं?
                    </span>
                    <span className="block font-display text-[11px] uppercase tracking-[0.18em] text-earth-400">
                      How would you like to help?
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["स्वयंसेवक", "सहयोग", "साझेदारी", "कहानी सुनाएँ"].map(
                        (opt, i) => (
                          <label
                            key={opt}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-200 bg-cream hover:bg-saffron-50 cursor-pointer transition-colors"
                          >
                            <input
                              type="radio"
                              name="help"
                              defaultChecked={i === 0}
                              className="accent-terracotta-500"
                            />
                            <span className="font-hindi text-sm text-earth-600">
                              {opt}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="font-hindi text-sm text-earth-600">
                      आपका संदेश
                    </span>
                    <span className="block font-display text-[11px] uppercase tracking-[0.18em] text-earth-400">
                      Your message
                    </span>
                    <textarea
                      rows={5}
                      placeholder="कुछ कहना है... (Share your thoughts)"
                      className="mt-2 w-full rounded-xl border border-earth-200 bg-cream px-4 py-3 text-earth-600 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-terracotta-400 transition"
                    />
                  </label>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-terracotta-600 text-cream font-semibold hover:bg-terracotta-700 transition-colors shadow-soft"
                  >
                    <MessageCircle className="w-4 h-4" /> भेजें — Send message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <ContactCard
              icon={Phone}
              h="पंचायत हेल्पलाइन"
              en="Panchayat helpline"
              value="+91 1234567890"
              sub="सुबह 9 बजे — शाम 6 बजे"
            />
            <ContactCard
              icon={Mail}
              h="ईमेल"
              en="Email"
              value="hello@suryapura.gov.in"
              sub="48 घंटे में जवाब"
            />
            <ContactCard
              icon={MapPin}
              h="पंचायत भवन"
              en="Panchayat office"
              value="पीपल चौक, सूर्यपुरा"
              sub="जिला — सरसपुर, भारत — 322001"
            />

            <div
              id="volunteer"
              className="scroll-mt-24 rounded-3xl p-6 bg-gradient-to-br from-forest-500 to-forest-700 text-cream shadow-soft relative overflow-hidden"
            >
              <div className="absolute inset-0 dot-grid opacity-15" />
              <div className="relative">
                <Users className="w-6 h-6 text-saffron-200" />
                <div className="mt-3 font-hindi text-xl">
                  स्वयंसेवक बनिए
                </div>
                <p className="mt-2 text-cream-100/85 text-sm leading-relaxed">
                  हफ़्ते में सिर्फ़ 4 घंटे — पढ़ाइए, सिखाइए, या बस सुनिए। आपके
                  कौशल का गाँव को इंतज़ार है।
                </p>
                <button className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cream text-forest-700 text-sm font-semibold hover:bg-saffron-100 transition">
                  <Heart className="w-4 h-4" /> Volunteer registration
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  en,
  type,
}: {
  label: string;
  en: string;
  type: string;
}) {
  return (
    <label className="block">
      <span className="font-hindi text-sm text-earth-600">{label}</span>
      <span className="block font-display text-[11px] uppercase tracking-[0.18em] text-earth-400">
        {en}
      </span>
      <input
        type={type}
        className="mt-2 w-full rounded-xl border border-earth-200 bg-cream px-4 py-3 text-earth-600 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-terracotta-400 transition"
      />
    </label>
  );
}

function ContactCard({
  icon: Icon,
  h,
  en,
  value,
  sub,
}: {
  icon: LucideIcon;
  h: string;
  en: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-earth-200/40 bg-cream-50 p-5 shadow-soft flex items-start gap-4">
      <div className="inline-flex w-11 h-11 rounded-xl items-center justify-center bg-gradient-to-br from-saffron-500 to-terracotta-500 text-cream shrink-0">
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>
      <div>
        <div className="font-hindi text-earth-600">{h}</div>
        <div className="font-display text-[11px] uppercase tracking-[0.18em] text-earth-400">
          {en}
        </div>
        <div className="mt-2 tabular font-medium text-terracotta-600">
          {value}
        </div>
        {sub && (
          <div className="font-hindiSans text-xs text-earth-400 mt-0.5">
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}
