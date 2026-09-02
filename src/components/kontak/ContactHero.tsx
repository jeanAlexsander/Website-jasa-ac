"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="overflow-x-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto min-w-0 max-w-3xl text-center">
          {/* Badge */}
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
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600"
          >
            Hubungi Kami
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
              delay: 0.15,
              ease: "easeOut",
            }}
            className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl"
          >
            Solusi Service AC
            <span className="text-orange-600"> Profesional </span>
            Untuk Kenyamanan Anda
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
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          >
            CV. Aneka Technic siap membantu perawatan, perbaikan, dan pemasangan
            AC dengan teknisi berpengalaman serta layanan bergaransi.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
