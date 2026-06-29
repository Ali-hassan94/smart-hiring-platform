"use client";

import { useState } from "react";

export default function NotificationDrawer() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(!open)
        }
      >
        🔔
      </button>

      {open && (
        <div
          className="
          fixed
          right-0
          top-0
          h-screen
          w-[350px]
          bg-black
          border-l
          border-white/10
          p-8
          z-50
          "
        >
          <h2 className="text-2xl font-bold">
            Notifications
          </h2>
        </div>
      )}
    </>
  );
}