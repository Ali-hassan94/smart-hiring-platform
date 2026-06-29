"use client";

import { motion } from "framer-motion";

export default function MessageBubble({
  message,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`
      flex

      ${
        message.sender === "me"
          ? "justify-end"
          : "justify-start"
      }
      `}
    >
      <div
        className="
        max-w-md
        rounded-2xl
        p-4
        bg-white/10
        "
      >
        <p>{message.text}</p>

        <span
          className="
          text-xs
          opacity-50
          "
        >
          {message.time}
        </span>
      </div>
    </motion.div>
  );
}