"use client";

import { motion } from "framer-motion";

const languages = [
  "English",
  "Urdu",
  "Arabic"
];

export default function LanguageSection() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-slate-900/70 border border-cyan-500/20 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-8">
        Languages
      </h2>

      <div className="flex flex-wrap gap-4">

        {languages.map((lang) => (
          <span
            key={lang}
            className="
            px-5
            py-3
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/30
            "
          >
            {lang}
          </span>
        ))}

      </div>
    </motion.div>
  );
}