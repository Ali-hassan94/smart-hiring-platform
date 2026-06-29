"use client";

import { motion } from "framer-motion";

export default function SaveProfileButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="
      w-full
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      via-sky-500
      to-blue-600
      text-lg
      font-bold
      text-white
      shadow-lg
      hover:shadow-cyan-500/40
      transition
      "
    >
      Save Profile
    </motion.button>
  );
}