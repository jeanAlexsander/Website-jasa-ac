import { MapPinned } from "lucide-react";
import { serviceAreas } from "../../data/layanan";
import { coverage } from "../../data/layanan";
import SectionHeader from "../ui/SectionHeader";

export default function AreaSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="AREA LAYANAN"
          title="Kami Siap Melayani"
          description="Kami melayani kebutuhan service AC untuk rumah, kantor, ruko, maupun
            bangunan komersial di berbagai wilayah."
        />
        {/* Cakupan Layanan */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coverage.map((item) => {
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
        {/* Wilayah */}
        <div className="mt-16 rounded-3xl border border-orange-100 bg-orange-50 p-10">
          <div className="flex items-center gap-3">
            <MapPinned className="h-8 w-8 text-orange-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Wilayah Layanan
            </h3>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-orange-200 pt-6">
            <p className="font-medium text-slate-700">
              Belum menemukan wilayah Anda?
            </p>

            <p className="mt-2 text-slate-600">
              Jangan ragu menghubungi kami untuk memastikan apakah lokasi Anda
              termasuk dalam jangkauan layanan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
