"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { prices } from "../../data/layanan";
import SectionHeader from "../ui/SectionHeader";
import { MessageCircle } from "lucide-react";

export default function PriceSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setSelectedService(null);
    };

    if (selectedService) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedService]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="ESTIMASI HARGA"
          title="Harga Layanan AC"
          description="Berikut perkiraan harga layanan kami. Harga dapat menyesuaikan
            kondisi unit dan tingkat pekerjaan."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {prices.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-700 hover:shadow-xl"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 transition-colors duration-300 group-hover:bg-orange-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                {/* Price List */}
                <div className="mt-4 flex-1 border-t border-slate-100 pt-4">
                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-0 sm:pb-0"
                      >
                        <span className="min-w-0 text-sm leading-6 text-slate-600">
                          {feature.name}
                        </span>

                        <span className="shrink-0 text-sm font-semibold text-orange-700 sm:text-right">
                          {feature.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button + Contact Selection */}
                <div ref={contactRef} className="relative mt-8">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      setSelectedService(
                        selectedService === item.title ? null : item.title,
                      );
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-700 px-4 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-700 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan Sekarang
                  </button>

                  {selectedService === item.title && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-full left-0 z-20 mb-3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                    >
                      <div className="px-3 py-2">
                        <p className="text-sm font-semibold text-slate-900">
                          Pilih Kontak WhatsApp
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Pilih admin yang ingin Anda hubungi
                        </p>
                      </div>

                      {/* Admin 1 */}
                      <a
                        href={`https://wa.me/6285801330301?text=${encodeURIComponent(
                          `Hai kak, saya tertarik dengan layanan ${item.title}. Bisa info lebih lanjut?`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSelectedService(null)}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-orange-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">
                          <MessageCircle className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Admin 1
                          </p>

                          <p className="text-xs text-slate-500">
                            0858-0133-0301
                          </p>
                        </div>
                      </a>

                      {/* Admin 2 */}
                      <a
                        href={`https://wa.me/6285227022999?text=${encodeURIComponent(
                          `Hai kak, saya tertarik dengan layanan ${item.title}. Bisa info lebih lanjut?`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSelectedService(null)}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-orange-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">
                          <MessageCircle className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Admin 2
                          </p>

                          <p className="text-xs text-slate-500">
                            0852-2702-2999
                          </p>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: prices.length * 0.15,
            ease: "easeOut",
          }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          *Harga dapat berubah sesuai tipe AC, lokasi, sparepart, dan tingkat
          kerusakan.
        </motion.p>
      </div>
    </section>
  );
}
