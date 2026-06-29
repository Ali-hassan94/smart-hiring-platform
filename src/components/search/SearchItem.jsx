"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SearchItem({
  item,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
    >
      <Link
        href={item.path}
        className="
        block
        p-4
        rounded-xl
        border
        border-white/10
        hover:bg-white/5
        "
      >
        <div className="flex justify-between">
          <h3>{item.title}</h3>

          <span
            className="
            text-xs
            uppercase
            opacity-60
            "
          >
            {item.type}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}