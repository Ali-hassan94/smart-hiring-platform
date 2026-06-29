"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

export default function Reveal({
  children,
}) {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      y: 100,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}