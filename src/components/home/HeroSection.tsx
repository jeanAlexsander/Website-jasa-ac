import Link from "next/link";
import Image from "next/image";
import { features } from "../../data/home";
import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              ⭐ Teknisi Profesional & Bergaransi
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Solusi
              <span className="block text-orange-600">Service AC</span>
              Untuk Rumah & Bisnis
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Kami menyediakan layanan cuci AC, perbaikan, instalasi, hingga
              maintenance berkala dengan teknisi berpengalaman dan harga yang
              transparan.
            </p>

            <Link
              href="/layanan"
              className="mt-10 inline-flex rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-800"
            >
              Lihat Semua Layanan
            </Link>

            {/* <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <Icon className="h-7 w-7 text-orange-600" />

                    <p className="mt-3 font-medium text-slate-700">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Foto Besar */}
            <div className="col-span-2">
              <Image
                src="/images/pasang-ac-8.png"
                alt="Service AC"
                width={700}
                height={700}
                priority
                className="h-full w-full rounded-4xl object-cover shadow-xl"
              />
            </div>

            {/* Foto Kecil */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/pasang-ac-5.png"
                alt="Instalasi AC"
                width={300}
                height={340}
                className="rounded-3xl object-cover shadow-lg"
              />

              <Image
                src="/images/pasang-ac-7.png"
                alt="Perawatan AC"
                width={300}
                height={340}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
