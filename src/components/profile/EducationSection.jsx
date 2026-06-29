"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-3xl bg-slate-900/70 border border-cyan-500/20 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-8">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="Degree"
          className="input"
        />

        <input
          placeholder="Institute"
          className="input"
        />

        <input
          placeholder="Start Year"
          className="input"
        />

        <input
          placeholder="End Year"
          className="input"
        />

        <input
          placeholder="CGPA"
          className="input"
        />

        <input
          placeholder="City"
          className="input"
        />

      </div>
    </motion.div>
  );
}