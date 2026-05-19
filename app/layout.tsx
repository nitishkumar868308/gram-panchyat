import type { Metadata } from "next";
import { Fraunces, Inter, Tiro_Devanagari_Hindi, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tiroHindi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-tiro-hindi",
  display: "swap",
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-noto-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "सूर्यपुरा ग्राम विकास पोर्टल — Suryapura Village Development",
  description:
    "एक गाँव, अनेक सपने। शिक्षा, किसान, सड़क, पंचायत और डिजिटल पहचान — सूर्यपुरा का सम्पूर्ण विकास।",
  openGraph: {
    title: "सूर्यपुरा ग्राम विकास पोर्टल",
    description: "एक गाँव, अनेक सपने।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${fraunces.variable} ${inter.variable} ${tiroHindi.variable} ${notoHindi.variable}`}
    >
      <body className="bg-paper text-earth-600 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PageTransitionLoader />
      </body>
    </html>
  );
}
