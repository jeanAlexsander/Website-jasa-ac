"use client";

import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import { serviceAreas, coverage } from "../../data/layanan";
import SectionHeader from "../ui/SectionHeader";

export default function AreaSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="AREA LAYANAN"
          title="Kami Siap Melayani"
          description="Kami melayani kebutuhan service AC untuk rumah, kantor, ruko, maupun
            bangunan komersial di berbagai wilayah."
        />

        {/* Cakupan Layanan */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coverage.map((item, index) => {
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

        {/* Wilayah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.7,
            delay: coverage.length * 0.1,
            ease: "easeOut",
          }}
          className="mt-16 rounded-3xl border border-orange-100 bg-orange-50 p-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.1,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex items-center gap-3"
          >
            <MapPinned className="h-8 w-8 text-orange-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Wilayah Layanan
            </h3>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.3 + index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {area}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.1,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="mt-8 border-t border-orange-200 pt-6"
          >
            <p className="font-medium text-slate-700">
              Belum menemukan wilayah Anda?
            </p>

            <p className="mt-2 text-slate-600">
              Jangan ragu menghubungi kami untuk memastikan apakah lokasi Anda
              termasuk dalam jangkauan layanan kami.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
