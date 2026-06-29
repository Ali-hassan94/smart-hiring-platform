"use client";

import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] =
    useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <>
      <div
        className="
        fixed
        w-12
        h-12
        rounded-full
        border
        border-white
        pointer-events-none
        z-[9999]
        "
        style={{
          left: pos.x - 24,
          top: pos.y - 24,
        }}
      />

      <div
        className="
        fixed
        w-2
        h-2
        rounded-full
        bg-white
        pointer-events-none
        z-[9999]
        "
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
        }}
      />
    </>
  );
}