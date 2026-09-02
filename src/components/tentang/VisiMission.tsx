"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function VisionMission() {
  return (
    <section className="overflow-x-hidden py-20">
      <div className="mx-auto min-w-0 max-w-7xl px-6">
        <SectionHeader
          badge="Visi & Misi"
          title="Komitmen Kami Dalam Memberikan Pelayanan Terbaik"
          description="Landasan kami dalam bekerja untuk memberikan solusi AC yang profesional dan terpercaya."
        />

        <div className="mt-14 grid min-w-0 gap-8 md:grid-cols-2">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="min-w-0 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"
            >
              <Eye className="h-7 w-7 shrink-0" />
            </motion.div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">Visi</h3>

            <p className="leading-relaxed text-slate-600">
              Menjadi perusahaan jasa teknik elektronik yang profesional,
              terpercaya, inovatif, serta menjadi pilihan utama masyarakat dan
              dunia industri.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="min-w-0 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"
            >
              <Target className="h-7 w-7 shrink-0" />
            </motion.div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">Misi</h3>

            <ul className="space-y-3 text-slate-600">
              <li className="flex min-w-0 gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span className="min-w-0">Memberikan pelayanan terbaik.</span>
              </li>

              <li className="flex min-w-0 gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span className="min-w-0">Menjamin kualitas pekerjaan.</span>
              </li>

              <li className="flex min-w-0 gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span className="min-w-0">Mengembangkan kompetensi SDM.</span>
              </li>

              <li className="flex min-w-0 gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span className="min-w-0">
                  Menjalin hubungan jangka panjang dengan pelanggan.
                </span>
              </li>

              <li className="flex min-w-0 gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span className="min-w-0">
                  Mengikuti perkembangan teknologi.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
