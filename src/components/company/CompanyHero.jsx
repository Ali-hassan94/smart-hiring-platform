"use client";

import { motion } from "framer-motion";

export default function CompanyHero({
  company,
}) {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      p-10
      mb-10
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <img
          src={company.logo}
          alt={company.name}
          className="
          w-24
          h-24
          rounded-2xl
          object-cover
          "
        />

        <h1
          className="
          text-6xl
          font-bold
          mt-6
          "
        >
          {company.name}
        </h1>

        <p
          className="
          text-xl
          opacity-70
          mt-3
          "
        >
          {company.tagline}
        </p>
      </motion.div>
    </section>
  );
}