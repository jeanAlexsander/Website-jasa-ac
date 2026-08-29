import Link from "next/link";
import HeroSection from "../../components/tentang/HeroSection";
import AboutSection from "../../components/tentang/AboutProfileSection";
import ValuesSection from "../../components/tentang/ValuesSection";
import VisionMission from "../../components/tentang/VisiMission";

export default function TentangPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <HeroSection />
      {/* About */}
      <AboutSection />
      {/* Values */}
      <ValuesSection />
      {/* Vision & Mission */}
      <VisionMission />
    </main>
  );
}
