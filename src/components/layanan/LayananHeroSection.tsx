import Image from "next/image";

export default function LayananHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-500">
      <div className="absolute inset-0">
        <Image
          src="/images/pasang-ac-4.png"
          alt="Layanan AC"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Layanan
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          Solusi Perawatan &
          <br />
          Perbaikan AC Profesional
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Kami menyediakan berbagai layanan AC mulai dari cuci AC, perbaikan,
          instalasi, hingga perawatan rutin untuk menjaga kenyamanan rumah dan
          bisnis Anda.
        </p>
      </div>
    </section>
  );
}
