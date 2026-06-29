"use client";

import { motion } from "framer-motion";

export default function StepWrapper({
  children,
}) {
  return (
    <motion.div
      key={Math.random()}
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}