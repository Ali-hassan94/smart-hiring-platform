"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      h-[3px]
      z-[9999]
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-purple-500
      shadow-[0_0_20px_rgba(34,211,238,0.8)]
      "
      animate={{
        width: `${progress}%`,
      }}
      transition={{
        duration: 0.1,
        ease: "linear",
      }}
    />
  );
}