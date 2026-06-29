"use client";

import Link from "next/link";

const links = [
  {
    title: "Dashboard",
    href: "/recruiter/dashboard",
  },
  {
    title: "Create Job",
    href: "/recruiter/create-job",
  },
  {
    title: "Manage Jobs",
    href: "/recruiter/jobs",
  },
  {
    title: "Applicants",
    href: "/recruiter/applicants",
  },
  {
    title: "Analytics",
    href: "/recruiter/analytics",
  },
];

export default function RecruiterSidebar() {
  return (
    <aside
      className="
      w-[280px]
      min-h-screen
      border-r
      border-white/10
      "
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          Recruiter
        </h2>
      </div>

      <nav className="px-4">
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
      </nav>
    </aside>
  );
}