"use client";

import { motion } from "framer-motion";

export default function KpiCard({
  title,
  value,
  growth,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      "
    >
      <p className="opacity-60">
        {title}
      </p>

      <h2
        className="
        text-5xl
        font-bold
        mt-3
        "
      >
        {value}
      </h2>

      <span className="mt-4 block">
        ↑ {growth}
      </span>
    </motion.div>
  );
}