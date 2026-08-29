import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Tentang Kami
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Mengenal Lebih Dekat
            <span className="block text-orange-600">CV. Aneka Technic</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            CV. Aneka Technic merupakan penyedia jasa service, perawatan, dan
            instalasi AC yang berkomitmen memberikan pelayanan profesional,
            harga yang transparan, serta hasil pekerjaan yang berkualitas untuk
            rumah maupun bisnis.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <Image
            src="/images/pasang-ac-4.png"
            alt="Teknisi CV. Aneka Technic"
            width={650}
            height={500}
            priority
            className="rounded-4xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
