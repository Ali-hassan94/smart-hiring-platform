"use client";

import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function InterviewCard({
  interview,
  active,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      onClick={onClick}
      className={`
      w-full
      text-left
      p-5
      rounded-2xl
      border

      ${
        active
          ? "border-white bg-white/10"
          : "border-white/10"
      }
      `}
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {interview.candidate}
        </h3>

        <StatusBadge
          status={
            interview.status
          }
        />
      </div>

      <p className="opacity-70 mt-2">
        {interview.role}
      </p>

      <p className="text-sm opacity-50 mt-1">
        {interview.date}
      </p>
    </motion.button>
  );
}