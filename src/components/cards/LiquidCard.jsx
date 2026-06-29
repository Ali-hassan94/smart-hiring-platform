"use client";

import { motion } from "framer-motion";

export default function LiquidCard({
  title,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      className="
      rounded-3xl
      p-10
      border
      border-white/10
      bg-white/5
      relative
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        hover:opacity-100
        transition
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        "
      />

      <h2 className="text-3xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}