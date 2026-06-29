"use client";

import { motion } from "framer-motion";

export default function ConversationItem({
  conversation,
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
      p-4
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
          {conversation.name}
        </h3>

        {conversation.unread > 0 && (
          <div
            className="
            h-6
            w-6
            rounded-full
            bg-white
            text-black
            text-xs
            flex
            items-center
            justify-center
            "
          >
            {conversation.unread}
          </div>
        )}
      </div>

      <p className="opacity-60 text-sm">
        {conversation.role}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <div
          className={`
          h-2
          w-2
          rounded-full

          ${
            conversation.online
              ? "bg-green-500"
              : "bg-gray-500"
          }
          `}
        />

        <span className="text-xs">
          {conversation.online
            ? "Online"
            : "Offline"}
        </span>
      </div>
    </motion.button>
  );
}