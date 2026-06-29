"use client";

import { useEffect, useState } from "react";

export default function EyeLogo() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

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
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <div
          className="w-3 h-3 rounded-full bg-black"
          style={{
            transform: `translate(${pos.x * 0.002}px, ${pos.y * 0.002}px)`
          }}
        />
      </div>

      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <div
          className="w-3 h-3 rounded-full bg-black"
          style={{
            transform: `translate(${pos.x * 0.002}px, ${pos.y * 0.002}px)`
          }}
        />
      </div>
    </div>
  );
}