"use client";

import Link from "next/link";
import { notifications } from "@/data/notifications";

export default function NotificationBell() {
  const unread =
    notifications.filter(
      (item) => !item.read
    ).length;

  return (
    <Link
      href="/notifications"
      className="
      relative
      p-3
      rounded-xl
      border
      border-white/10
      "
    >
      🔔

      {unread > 0 && (
        <span
          className="
          absolute
          -top-2
          -right-2
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
          {unread}
        </span>
      )}
    </Link>
  );
}