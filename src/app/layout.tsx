import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jasa Service AC Purwokerto | CV Aneka Technic",
    template: "%s | CV Aneka Technic",
  },

  description:
    "CV Aneka Technic menyediakan jasa service AC, cuci AC, perbaikan AC, instalasi AC, dan maintenance AC di Purwokerto dan sekitarnya. Hubungi kami: 0858-0133-0301 / 0852-2702-2999.",

  keywords: [
    "jasa service AC Purwokerto",
    "service AC Purwokerto",
    "cuci AC Purwokerto",
    "perbaikan AC Purwokerto",
    "instalasi AC Purwokerto",
    "maintenance AC Purwokerto",
    "teknisi AC Purwokerto",
    "CV Aneka Technic",
  ],

  authors: [{ name: "CV Aneka Technic" }],
  creator: "CV Aneka Technic",
  publisher: "CV Aneka Technic",

  verification: {
    google: "ou1Km54I3Ca-5taQo_64U0nvzKd6fDDwEUBKGbI0gTk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Jasa Service AC Purwokerto | CV Aneka Technic",
    description:
      "Layanan service AC, cuci AC, perbaikan AC, instalasi AC, dan maintenance AC di Purwokerto dan sekitarnya. Hubungi: 0858-0133-0301 / 0852-2702-2999.",
    type: "website",
    locale: "id_ID",
    siteName: "CV Aneka Technic",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Service AC Purwokerto | CV Aneka Technic",
    description:
      "Jasa service AC, cuci AC, perbaikan AC, instalasi AC, dan maintenance AC di Purwokerto. Hubungi: 0858-0133-0301 / 0852-2702-2999.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
