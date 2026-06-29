"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  Building2,
  BarChart3,
  Settings,
  Activity,
  FileText,
  Bell,
  ShieldCheck,
  LogOut,
} from "lucide-react";

import { motion } from "framer-motion";

const links = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Recruiters",
    href: "/admin/recruiters",
    icon: Building2,
  },
  {
    title: "Jobs",
    href: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Activity",
    href: "/admin/activity",
    icon: Activity,
  },
  {
    title: "CMS",
    href: "/admin/cms",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-72
      min-h-screen
      sticky
      top-0
      overflow-y-auto
      bg-gradient-to-b
      from-[#061322]
      via-[#08182f]
      to-[#030712]
      border-r
      border-cyan-500/20
      shadow-2xl
      text-white
      "
    >
      {/* Logo */}

      <div className="p-7 border-b border-white/10">

        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            shadow-lg
            "
          >
            <ShieldCheck size={28} />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              HireFlow AI
            </h2>

            <p className="text-sm text-gray-400">
              Admin Portal
            </p>

          </div>

        </div>

      </div>

      {/* Admin Card */}

      <div className="p-6">

        <div
          className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-5
          "
        >
          <div className="flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="
              w-14
              h-14
              rounded-full
              "
            />

            <div>

              <h3 className="font-bold">
                Super Admin
              </h3>

              <p className="text-sm text-gray-400">
                admin@hireflow.ai
              </p>

            </div>

          </div>

          <div className="mt-5 flex justify-between">

            <div>

              <h4 className="font-bold text-xl">
                584
              </h4>

              <p className="text-xs text-gray-400">
                Users
              </p>

            </div>

            <div>

              <h4 className="font-bold text-xl">
                91
              </h4>

              <p className="text-xs text-gray-400">
                Jobs
              </p>

            </div>

            <div>

              <h4 className="font-bold text-xl">
                15
              </h4>

              <p className="text-xs text-gray-400">
                Alerts
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="px-5 pb-6">

        {links.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <motion.div
              key={item.href}
              whileHover={{
                x: 5,
              }}
            >

              <Link
                href={item.href}
                className={`
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-2xl
                mb-3
                transition-all
                duration-300

                ${
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                    : "hover:bg-white/10"
                }
                `}
              >
                <div className="flex items-center gap-4">

                  <Icon size={21} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                {item.title === "Activity" && (
                  <span
                    className="
                    text-xs
                    bg-red-500
                    px-2
                    py-1
                    rounded-full
                    "
                  >
                    5
                  </span>
                )}

                {item.title === "Users" && (
                  <span
                    className="
                    text-xs
                    bg-cyan-500
                    px-2
                    py-1
                    rounded-full
                    "
                  >
                    124
                  </span>
                )}

              </Link>

            </motion.div>

          );

        })}

      </nav>

      {/* Bottom */}

      <div className="mt-auto p-6 border-t border-white/10">

        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          py-4
          bg-red-500
          hover:bg-red-600
          transition
          font-semibold
          "
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </aside>
  );
}