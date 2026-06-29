"use client";

import { motion } from "framer-motion";

export default function SVGLine() {
  return (
    <svg
      width="100%"
      height="200"
    >
      <motion.path
        d="M10 100 Q500 10 1000 100"
        stroke="white"
        fill="transparent"
        strokeWidth="2"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 3,
        }}
      />
    </svg>
  );
}