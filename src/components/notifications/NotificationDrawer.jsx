"use client";

import { notifications } from "@/data/notifications";

export default function NotificationDrawer() {
  return (
    <div
      className="
      absolute
      right-0
      mt-3
      w-[400px]
      rounded-3xl
      border
      border-white/10
      bg-black
      p-5
      "
    >
      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        Recent Notifications
      </h2>

      <div className="space-y-3">
        {notifications
          .slice(0, 4)
          .map((item) => (
            <div
              key={item.id}
              className="
              p-4
              rounded-xl
              bg-white/5
              "
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
}