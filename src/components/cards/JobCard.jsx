"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JobCard({ job }) {
  return (
    <motion.div
     whileHover={{
  y: -10,
  scale: 1.04,
}}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      "
    >
      <h3 className="text-2xl font-bold">
        {job.title}
      </h3>

      <p className="mt-2 text-gray-400">
        {job.company}
      </p>

      <p className="mt-4">
        {job.location}
      </p>

      <p className="mt-2">
        {job.salary}
      </p>

      <Link
        href={`/jobs/${job.id}`}
        className="
        inline-block
        mt-6
        px-6
        py-3
        border
        rounded-full
        "
      >
        View Details
      </Link>
    </motion.div>
  );
}