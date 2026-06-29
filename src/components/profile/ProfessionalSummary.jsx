"use client";

import { motion } from "framer-motion";

export default function ProfessionalSummary() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Professional Summary
      </h2>

      <textarea
        rows={6}
        placeholder="Write something about yourself..."
        className="
        w-full
        rounded-2xl
        bg-slate-950/60
        border
        border-white/10
        p-5
        text-white
        placeholder:text-gray-500
        outline-none
        focus:border-cyan-400
        transition
        resize-none
        "
      />
    </motion.div>
  );
}