import Link from "next/link";
import { Sun, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-earth-600 text-cream-100 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-saffron-500 to-terracotta-500">
                <Sun className="w-5 h-5 text-cream" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <div className="font-hindi text-lg">सूर्यपुरा</div>
                <div className="font-display text-[11px] uppercase tracking-[0.18em] text-saffron-200">
                  Gram Vikas Portal
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md font-hindi text-cream-100/85 leading-relaxed">
              एक गाँव, अनेक सपने। शिक्षा से लेकर डिजिटल पहचान तक — सूर्यपुरा हर
              घर, हर आँगन तक विकास की रौशनी पहुँचाने का संकल्प है।
            </p>
            <p className="mt-3 text-sm text-cream-100/60 max-w-md">
              A fictional rural development portal — designed with dignity,
              built for impact.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-[11px] uppercase tracking-[0.2em] text-saffron-200">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/about", label: "हमारी कहानी" },
                { href: "/initiatives", label: "विकास कार्य" },
                { href: "/panchayat", label: "ई-पंचायत" },
                { href: "/gallery", label: "झलकियाँ" },
                { href: "/contact", label: "जुड़िए" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-hindiSans text-cream-100/85 hover:text-saffron-200 transition-colors link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-[11px] uppercase tracking-[0.2em] text-saffron-200">
              Reach the Panchayat
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-saffron-300 shrink-0" />
                <span className="text-cream-100/85">
                  ग्राम पंचायत भवन, सूर्यपुरा,
                  <br />
                  जिला — सरसपुर, भारत — 322001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-saffron-300 shrink-0" />
                <span className="tabular text-cream-100/85">+91 90000 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-saffron-300 shrink-0" />
                <a
                  href="mailto:hello@suryapura.gov.in"
                  className="text-cream-100/85 hover:text-saffron-200 link-underline"
                >
                  hello@suryapura.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream-100/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-cream-100/55">
          <p>© {new Date().getFullYear()} सूर्यपुरा ग्राम विकास पोर्टल · Design demo</p>
          <p className="font-display tracking-[0.18em] uppercase">
            Built with गाँव की मिट्टी & modern code
          </p>
        </div>
      </div>
    </footer>
  );
}
