"use client";

import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const keyDown = (e) => {
      if (
        e.ctrlKey &&
        e.key === "k"
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener(
      "keydown",
      keyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        keyDown
      );
  }, []);

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-start
      justify-center
      pt-40
      z-[9999]
      "
    >
      <div
        className="
        w-[700px]
        rounded-3xl
        bg-black
        p-8
        "
      >
        <input
          placeholder="Search..."
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          "
        />
      </div>
    </div>
  );
}