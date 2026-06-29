"use client";

import { motion } from "framer-motion";

const templates = [
  "Modern",
  "Corporate",
  "Creative",
  "Minimal",
];

export default function ResumeTemplates({
  selected,
  setSelected,
}) {
  return (
    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-4
      gap-4
      "
    >
      {templates.map((template) => (
        <motion.button
          key={template}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelected(template)}
          className={`
          w-full
          rounded-2xl
          border
          p-4
          sm:p-5
          lg:p-6
          text-sm
          sm:text-base
          font-semibold
          transition

          ${
            selected === template
              ? "border-white bg-white/10"
              : "border-white/10 hover:border-white/30"
          }
          `}
        >
          {template}
        </motion.button>
      ))}
    </div>
  );
}