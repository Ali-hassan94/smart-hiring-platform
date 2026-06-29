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
      md:grid-cols-4
      gap-4
      "
    >
      {templates.map((template) => (
        <motion.button
          key={template}
          whileHover={{
            scale: 1.05,
          }}
          onClick={() =>
            setSelected(template)
          }
          className={`
          p-6
          rounded-2xl
          border

          ${
            selected === template
              ? "border-white"
              : "border-white/10"
          }
          `}
        >
          {template}
        </motion.button>
      ))}
    </div>
  );
}