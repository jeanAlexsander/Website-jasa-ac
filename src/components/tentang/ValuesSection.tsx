"use client";

import { motion } from "framer-motion";
import { companyValues } from "../../data/tentang";
import SectionHeader from "../ui/SectionHeader";

export default function ValuesSection() {
  return (
    <section className="overflow-x-hidden bg-white py-20">
      <div className="mx-auto min-w-0 max-w-7xl px-6">
        {/* Header */}
        <SectionHeader
          badge="Nilai Perusahaan"
          title="Prinsip Kami Dalam Melayani Pelanggan"
          description="Kami berkomitmen memberikan pelayanan terbaik melalui kualitas, kepercayaan, dan profesionalisme."
        />

        {/* Cards */}
        <div className="mt-16 grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group min-w-0 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-7 w-7 shrink-0" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
