import { services } from "../../data/layanan";
import SectionHeader from "../ui/SectionHeader";

export default function ServiceList() {
  return (
    <section id="layanan" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="LAYANAN"
          title="Solusi AC Lengkap Untuk Anda"
          description="Kami menyediakan layanan AC profesional untuk rumah maupun bisnis."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-700">
                  <Icon className="h-8 w-8 text-orange-700 transition-all duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
