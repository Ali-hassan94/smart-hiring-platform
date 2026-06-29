"use client";

import { motion } from "framer-motion";

export default function SuccessStep() {
  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className="
      text-center
      py-20
      "
    >
      <div className="text-7xl">
        🎉
      </div>

      <h2
        className="
        text-5xl
        font-bold
        mt-6
        "
      >
        Application Submitted
      </h2>

      <p className="mt-4">
        Recruiter will review your
        application.
      </p>
    </motion.div>
  );
}