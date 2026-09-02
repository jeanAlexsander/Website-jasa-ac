"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="overflow-x-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid min-w-0 items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-flex max-w-full items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
            >
              ⭐ Teknisi Profesional & Bergaransi
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
            >
              Solusi
              <span className="block text-orange-600">Service AC</span>
              Untuk Rumah & Bisnis
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
            >
              Kami menyediakan layanan cuci AC, perbaikan, instalasi, hingga
              maintenance berkala dengan teknisi berpengalaman dan harga yang
              transparan.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <Link
                href="/layanan"
                className="mt-10 inline-flex rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-800"
              >
                Lihat Semua Layanan
              </Link>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="grid min-w-0 grid-cols-3 gap-4"
          >
            {/* Foto Besar */}
            <div className="col-span-2 min-w-0">
              <Image
                src="/images/pasang-ac-8.png"
                alt="Service AC"
                width={700}
                height={700}
                priority
                sizes="(max-width: 1024px) 66vw, 40vw"
                className="h-full w-full rounded-4xl object-cover shadow-xl"
              />
            </div>

            {/* Foto Kecil */}
            <div className="flex min-w-0 flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="min-w-0"
              >
                <Image
                  src="/images/pasang-ac-5.png"
                  alt="Instalasi AC"
                  width={300}
                  height={340}
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  className="h-full w-full rounded-3xl object-cover shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="min-w-0"
              >
                <Image
                  src="/images/pasang-ac-7.png"
                  alt="Perawatan AC"
                  width={300}
                  height={340}
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  className="h-full w-full rounded-3xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
