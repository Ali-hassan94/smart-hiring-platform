"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

export default function StatCard({
  title,
  value
}) {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      innerText: value,
      duration: 2,
      snap: {
        innerText: 1
      }
    });
  }, [value]);

  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      "
    >
      <h3 className="text-gray-400">
        {title}
      </h3>

      <div
        ref={ref}
        className="
        text-5xl
        font-bold
        mt-4
        "
      >
        0
      </div>
    </div>
  );
}