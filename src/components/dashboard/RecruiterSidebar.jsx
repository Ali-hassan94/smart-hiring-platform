"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  BriefcaseBusiness,
  Users,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/recruiter/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Create Job",
    href: "/recruiter/create-job",
    icon: PlusCircle,
  },
  {
    title: "Manage Jobs",
    href: "/recruiter/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applicants",
    href: "/recruiter/applicants",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/recruiter/analytics",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    href: "/recruiter/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/recruiter/settings",
    icon: Settings,
  },
];

export default function RecruiterSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-[290px]
      min-h-screen
      bg-gradient-to-b
      from-[#071221]
      via-[#0a192f]
      to-[#050816]
      border-r
      border-white/10
      flex
      flex-col
      justify-between
      "
    >
      <div>
        <div className="p-8 border-b border-white/10">

          <div className="flex items-center gap-4">

            <div
              className="
              h-14
              w-14
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              flex
              items-center
              justify-center
              "
            >
              <Building2 size={28} className="text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                HireFlow AI
              </h2>

              <p className="text-gray-400 text-sm">
                Recruiter Portal
              </p>
            </div>

          </div>

        </div>

        <nav className="p-5 space-y-2">

          {links.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-300

                ${
                  active
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                }
                `}
              >
                <Icon size={22} />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}

        </nav>
      </div>

      <div className="p-5 border-t border-white/10">

        <div
          className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
          mb-5
          "
        >
          <p className="text-sm text-gray-400">
            Recruiter Account
          </p>

          <h3 className="font-semibold text-lg text-white mt-1">
            TechVerse Inc.
          </h3>

          <p className="text-xs text-cyan-400 mt-1">
            Premium Employer
          </p>
        </div>

        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-red-500
          py-3
          font-semibold
          hover:bg-red-600
          transition
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>
    </aside>
  );
}