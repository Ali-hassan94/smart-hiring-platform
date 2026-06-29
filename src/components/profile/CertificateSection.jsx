"use client";

import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-3xl bg-slate-900/70 border border-cyan-500/20 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-8">
        Certifications
      </h2>

      <div className="space-y-5">

        <input
          placeholder="Certificate Name"
          className="input"
        />

        <input
          placeholder="Organization"
          className="input"
        />

        <input
          placeholder="Completion Date"
          className="input"
        />

      </div>
    </motion.div>
  );
}