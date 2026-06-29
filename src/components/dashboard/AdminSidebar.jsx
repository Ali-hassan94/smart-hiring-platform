"use client";

import Link from "next/link";
import PageWrapper from "@/components/animations/PageWrapper";

const links = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    title: "Users",
    href: "/admin/users",
  },
  {
    title: "Recruiters",
    href: "/admin/recruiters",
  },
  {
    title: "Jobs",
    href: "/admin/Jobs",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
    {
    title: "cms",
    href: "/admin/cms",
  },
   
  
  

];

export default function AdminSidebar() {
  return (
    <PageWrapper>
    <aside
      className="
      w-[280px]
      min-h-screen
      border-r
      border-white/10
      bg-black/20
      "
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          Admin Portal
        </h2>
      </div>

      <nav className="px-4">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
            block
            p-4
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
    </PageWrapper>
  );
}