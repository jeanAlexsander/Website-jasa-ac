"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="overflow-x-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="min-w-0">
          {/* Badge */}
          <motion.span
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
            className="inline-flex max-w-full rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
          >
            Tentang Kami
          </motion.span>

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
            className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
          >
            Mengenal Lebih Dekat
            <span className="block text-orange-600">CV. Aneka Technic</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
          >
            CV Aneka Technic merupakan perusahaan yang bergerak di bidang jasa
            instalasi, perawatan, perbaikan, dan pemeliharaan berbagai peralatan
            elektronik rumah tangga maupun komersial. Perusahaan berfokus pada
            kualitas pelayanan, ketepatan waktu, serta kepuasan pelanggan dengan
            didukung tenaga teknisi yang kompeten.
          </motion.p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative min-w-0"
        >
          <Image
            src="/images/pasang-ac-8.png"
            alt="Teknisi CV. Aneka Technic"
            width={650}
            height={500}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full max-w-full rounded-4xl object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
