"use client";

import { motion } from "framer-motion";

export default function NotificationCard({
  notification,
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
      p-5
      rounded-2xl
      border

      ${
        !notification.read
          ? "border-white bg-white/10"
          : "border-white/10"
      }
      `}
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {notification.title}
        </h3>

        {!notification.read && (
          <div
            className="
            w-3
            h-3
            rounded-full
            bg-green-500
            "
          />
        )}
      </div>

      <p className="opacity-70 mt-2">
        {notification.message}
      </p>

      <p
        className="
        text-xs
        opacity-50
        mt-3
        "
      >
        {notification.time}
      </p>
    </motion.div>
  );
}