"use client";

import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-3xl bg-slate-900/70 border border-cyan-500/20 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-8">
        Portfolio Projects
      </h2>

      <div className="space-y-5">

        <input
          placeholder="Project Name"
          className="input"
        />

        <input
          placeholder="Github URL"
          className="input"
        />

        <textarea
          rows={4}
          placeholder="Project Description"
          className="
          input
          resize-none
          "
        />

      </div>
    </motion.div>
  );
}