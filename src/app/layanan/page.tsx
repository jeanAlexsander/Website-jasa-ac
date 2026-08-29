import Link from "next/link";
import LayananHero from "../../components/layanan/LayananHeroSection";
import ServiceList from "../../components/layanan/ServiceListSection";
import PriceSection from "../../components/layanan/PriceSection";
import FAQSection from "../../components/layanan/FAQSection";
import AreaSection from "../../components/layanan/AreaSection";

export default function LayananPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <LayananHero />

      {/* Service List */}
      <ServiceList />

      {/* Price Section */}
      <PriceSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Area Section */}
      <AreaSection />
    </main>
  );
}
