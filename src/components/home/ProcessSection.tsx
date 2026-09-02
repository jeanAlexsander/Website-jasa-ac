"use client";

import { motion } from "framer-motion";
import { processSteps } from "../../data/home";
import { ArrowRight, ArrowDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="overflow-x-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <SectionHeader
          badge="PROSES KERJA"
          title="Cara Kerja Kami"
          description="Hanya dalam 4 langkah mudah, AC Anda kembali dingin dan nyaman."
        />

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="grid min-w-0 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative min-w-0 text-center transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Nomor */}
                  <div className="mb-5">
                    <span className="rounded-full bg-orange-700 px-4 py-2 text-sm font-bold tracking-wider text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-orange-100 bg-white shadow-md transition-all duration-300 group-hover:border-orange-700 group-hover:bg-orange-700 group-hover:shadow-xl">
                    <Icon className="h-9 w-9 shrink-0 text-orange-700 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  </div>

                  {/* Panah Desktop */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      className="
                        absolute
                        top-[4.5rem]
                        -right-6
                        hidden
                        h-7
                        w-7
                        text-orange-300
                        transition-all
                        duration-300
                        lg:block
                        group-hover:translate-x-1
                        group-hover:text-orange-700
                      "
                    />
                  )}

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-700">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>

                  {/* Panah Mobile */}
                  {index < processSteps.length - 1 && (
                    <ArrowDown
                      className="
                        mx-auto mt-8
                        h-6 w-6
                        text-orange-300
                        transition-all
                        duration-300
                        group-hover:translate-y-1
                        group-hover:text-orange-700
                        lg:hidden
                      "
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
