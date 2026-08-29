import SectionHeader from "../ui/SectionHeader";

export default function ContactHero() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Hubungi Kami
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Solusi Service AC
            <span className="text-orange-600"> Profesional </span>
            Untuk Kenyamanan Anda
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            CV. Aneka Technic siap membantu perawatan, perbaikan, dan pemasangan
            AC dengan teknisi berpengalaman serta layanan bergaransi.
          </p>
        </div>
      </div>
    </section>
  );
}
