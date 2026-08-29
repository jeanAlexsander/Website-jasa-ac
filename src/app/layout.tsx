import type { Metadata } from "next";
import "./globals.css";
// Ganti bagian ini dengan jalur relatif (mundur satu folder ke src, lalu masuk ke components)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Jasa Service AC Profesional",
  description: "Layanan perbaikan dan cuci AC bergaransi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
