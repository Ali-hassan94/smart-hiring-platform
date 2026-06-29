"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "from-cyan-500 to-blue-600",
  change = "+12%",
  positive = true,
}) {
  const valueRef = useRef(null);

  useEffect(() => {
    if (!valueRef.current) return;

    gsap.fromTo(
      valueRef.current,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        ease: "power3.out",
        snap: {
          innerText: 1,
        },
      }
    );
  }, [value]);

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      sm:p-6
      lg:p-7
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/40
      hover:shadow-[0_15px_45px_rgba(34,211,238,.18)]
      "
    >
      {/* Background Glow */}
      <div
        className={`
        absolute
        -top-16
        -right-16
        h-40
        w-40
        rounded-full
        bg-gradient-to-r
        ${color}
        opacity-10
        blur-3xl
        `}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm sm:text-base">
            {title}
          </p>

          <h2
            ref={valueRef}
            className="
            mt-3
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            "
          >
            0
          </h2>
        </div>

        <div
          className={`
          h-14
          w-14
          rounded-2xl
          bg-gradient-to-r
          ${color}
          flex
          items-center
          justify-center
          shadow-lg
          `}
        >
          {Icon && <Icon size={28} />}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span
          className={`
          flex
          items-center
          gap-2
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          ${
            positive
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400"
          }
          `}
        >
          {positive ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}

          {change}
        </span>

        <span className="text-xs text-gray-500">
          Last 30 Days
        </span>
      </div>
    </div>
  );
}