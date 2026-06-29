"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const links = [
  {
    title: "Dashboard",
    href: "/candidate/dashboard"
  },
  {
  title: "Resume Builder",
  href: "/candidate/resume"
},
  {
    title: "Applications",
    href: "/candidate/applications"
  },
  {
    title: "Saved Jobs",
    href: "/candidate/saved-jobs"
  },
  {
    title: "Profile",
    href: "/candidate/profile"
  }
];

export default function CandidateSidebar() {
  return (
    <aside
      className="
      w-[280px]
      min-h-screen
      border-r
      border-white/10
      bg-black/20
      backdrop-blur-xl
      "
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          Candidate Portal
        </h2>
      </div>

      <nav className="px-4">
        <motion.div
  whileHover={{
    x: 8,
  }}
>
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
            block
            px-4
            py-3
            rounded-xl
            hover:bg-white/10
            mb-2
            "
          >
            {item.title}
          </Link>
       
        ))}
 </motion.div>
      </nav>
 
    </aside>
  );
}