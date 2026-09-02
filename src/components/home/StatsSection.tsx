"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/home";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const isRating = value.includes("⭐");

  const numericValue = isRating
    ? parseFloat(value.replace("⭐", ""))
    : parseInt(value.replace(/\D/g, ""), 10);

  const suffix = isRating ? "⭐" : value.replace(/[\d.,]/g, "");

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;

    let start = 0;
    const duration = 1200;
    const intervalTime = 30;
    const increment = numericValue / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isRating
        ? displayValue.toFixed(1)
        : Math.floor(displayValue).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="overflow-x-hidden border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid min-w-0 grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
              className="min-w-0 text-center"
            >
              <h3 className="text-4xl font-extrabold text-orange-700">
                <AnimatedNumber value={item.value} />
              </h3>

              <p className="mt-2 text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
