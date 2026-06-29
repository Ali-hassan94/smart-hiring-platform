"use client";

import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#040816]" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[180px]"
      />
    </>
  );
}