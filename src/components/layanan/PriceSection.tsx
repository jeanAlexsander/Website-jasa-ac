import { prices } from "../../data/layanan";
import SectionHeader from "../ui/SectionHeader";

export default function PriceSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="ESTIMASI HARGA"
          title="Harga Layanan AC"
          description="Berikut perkiraan harga layanan kami. Harga dapat menyesuaikan
            kondisi unit dan tingkat pekerjaan."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {prices.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 transition-colors duration-300 group-hover:bg-orange-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                {/* Price List */}
                <div className="mt-4 flex-1 border-t border-slate-100 pt-4">
                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-0 sm:pb-0"
                      >
                        <span className="min-w-0 text-sm leading-6 text-slate-600">
                          {feature.name}
                        </span>

                        <span className="shrink-0 text-sm font-semibold text-orange-700 sm:text-right">
                          {feature.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button className="mt-8 w-full rounded-xl border border-orange-700 px-4 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-700 hover:text-white">
                  Pesan Sekarang
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          *Harga dapat berubah sesuai tipe AC, lokasi, sparepart, dan tingkat
          kerusakan.
        </p>
      </div>
    </section>
  );
}
