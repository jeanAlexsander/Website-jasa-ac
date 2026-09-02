"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { homeServices } from "../../data/home";
import SectionHeader from "../ui/SectionHeader";

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <SectionHeader
          badge="LAYANAN"
          title="Layanan Kami"
          description="Kami menyediakan berbagai layanan profesional untuk menjaga performa AC rumah, kantor, maupun tempat usaha Anda."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {homeServices.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-700">
                  <Icon className="h-8 w-8 text-orange-700 transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: homeServices.length * 0.1,
            ease: "easeOut",
          }}
          className="mt-16 text-center"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center rounded-full bg-orange-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-800"
          >
            Lihat Semua Layanan
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
