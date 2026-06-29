"use client";

import { motion } from "framer-motion";

export default function ProfileCompletion() {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      "
    >
      <h2
        className="
        text-xl
        font-semibold
        mb-4
        "
      >
        Profile Completion
      </h2>

      <div
        className="
        h-4
        rounded-full
        bg-white/10
        overflow-hidden
        "
      >
        <div
          className="
          h-full
          w-[75%]
          bg-white
          "
        />
      </div>

      <p className="mt-4 text-gray-400">
        75% Completed
      </p>
    </motion.div>
  );
}