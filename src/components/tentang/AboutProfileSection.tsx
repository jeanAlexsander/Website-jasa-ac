"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { profilePoints } from "../../data/tentang";

export default function ProfileSection() {
  return (
    <section className="overflow-x-hidden bg-slate-50 py-20">
      <div className="mx-auto min-w-0 max-w-7xl px-6">
        <SectionHeader
          badge="PROFIL PERUSAHAAN"
          title="Mitra Terpercaya Untuk Kebutuhan AC Anda"
          description="Kami berkomitmen memberikan layanan service AC yang profesional dengan mengutamakan kualitas pekerjaan dan kepuasan pelanggan."
        />

        <div className="mt-16 grid min-w-0 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <Image
              src="/images/pasang-ac-10.png"
              alt="CV Aneka Technic"
              width={600}
              height={450}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full max-w-full rounded-4xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
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
            className="min-w-0"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Tentang CV. Aneka Technic
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              CV. Aneka Technic merupakan perusahaan yang bergerak di bidang
              layanan service, perawatan, dan instalasi AC untuk kebutuhan
              rumah, kantor, ruko, maupun berbagai jenis bangunan lainnya.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Dengan dukungan teknisi yang berpengalaman, kami berusaha
              memberikan solusi AC yang cepat, tepat, dan berkualitas. Kami
              percaya bahwa pelayanan yang baik bukan hanya tentang memperbaiki
              masalah AC, tetapi juga memberikan kenyamanan dan kepercayaan
              kepada setiap pelanggan.
            </p>

            {/* Profile Points */}
            <div className="mt-8 space-y-4">
              {profilePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: false,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex min-w-0 items-center gap-3"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-orange-700" />

                    <span className="min-w-0 text-slate-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
