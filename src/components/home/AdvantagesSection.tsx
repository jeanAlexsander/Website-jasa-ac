import { advantages } from "../../data/home";
import SectionHeader from "../ui/SectionHeader";

export default function AdvantagesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <SectionHeader
          badge="KEUNGGULAN"
          title="Kenapa Memilih Kami?"
          description="Kami selalu mengutamakan kualitas layanan, kepuasan pelanggan, dan pengerjaan yang profesional."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-700">
                  <Icon className="h-8 w-8 text-orange-700 transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
