import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AdvantagesSection from "../components/home/AdvantagesSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <HeroSection />

      {/* STATISTIK */}
      <StatsSection />

      {/* KEUNGGULAN */}
      <AdvantagesSection />

      {/* LAYANAN */}
      <ServicesSection />

      {/* CARA KERJA */}
      <ProcessSection />
    </main>
  );
}
