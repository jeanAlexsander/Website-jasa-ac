"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LayananHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-300">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/pasang-ac-9.png"
          alt="Layanan AC"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto min-w-0 max-w-5xl px-6 py-28 text-center lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
        >
          Layanan
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="text-4xl font-bold leading-tight text-white sm:text-6xl"
        >
          Solusi Perawatan &
          <br />
          Perbaikan AC Profesional
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          Kami menyediakan berbagai layanan AC mulai dari cuci AC, perbaikan,
          instalasi, hingga perawatan rutin untuk menjaga kenyamanan rumah dan
          bisnis Anda.
        </motion.p>
      </div>
    </section>
  );
}
