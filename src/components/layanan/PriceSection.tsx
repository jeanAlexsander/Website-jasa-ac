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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {prices.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

              <p className="mt-5 text-sm text-slate-500">Mulai dari</p>

              <p className="mt-1 text-3xl font-bold text-orange-700">
                {item.price}
              </p>

              <p className="mt-5 flex-1 leading-7 text-slate-600">
                {item.desc}
              </p>

              <button className="mt-6 w-full rounded-xl border border-orange-700 px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-700 hover:text-white">
                Pesan Sekarang
              </button>
            </div>
          ))}
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
