import { Eye, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function VisionMission() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Visi & Misi"
          title="Komitmen Kami Dalam Memberikan Pelayanan Terbaik"
          description="Landasan kami dalam bekerja untuk memberikan solusi AC yang profesional dan terpercaya."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Visi */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Eye className="h-7 w-7" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">Visi</h3>

            <p className="leading-relaxed text-slate-600">
              Menjadi penyedia layanan AC terpercaya dengan pelayanan
              profesional, berkualitas, dan berorientasi pada kepuasan
              pelanggan.
            </p>
          </div>

          {/* Misi */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Target className="h-7 w-7" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">Misi</h3>

            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                Memberikan layanan AC yang cepat dan berkualitas.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                Mengutamakan kejujuran dan transparansi dalam pelayanan.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                Melakukan pengerjaan dengan standar aman dan rapi.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                Membangun hubungan jangka panjang dengan pelanggan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
