"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  Bookmark,
  UserCircle,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/candidate/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Resume Builder",
    href: "/candidate/resume",
    icon: FileText,
  },
  {
    title: "Applications",
    href: "/candidate/applications",
    icon: BriefcaseBusiness,
  },
  {
    title: "Saved Jobs",
    href: "/candidate/saved-jobs",
    icon: Bookmark,
  },
  {
    title: "Profile",
    href: "/candidate/profile",
    icon: UserCircle,
  },
  {
    title: "Notifications",
    href: "/candidate/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/candidate/settings",
    icon: Settings,
  },
];

export default function CandidateSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-[290px]
      h-screen
      sticky
      top-0
      overflow-y-auto
      hidden
      lg:flex
      flex-col
      bg-gradient-to-b
      from-[#061222]
      via-[#08152d]
      to-[#050816]
      border-r
      border-cyan-500/20
      backdrop-blur-3xl
      shadow-2xl
      "
    >
      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex items-center gap-4">

          <div
            className="
            h-14
            w-14
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            text-xl
            font-bold
            "
          >
            AH
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Malik Ali
            </h2>

            <p className="text-sm text-gray-400">
              Frontend Developer
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <motion.div
              whileHover={{
                x: 6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              key={item.href}
            >
              <Link
                href={item.href}
                className={`
                group
                flex
                items-center
                justify-between
                rounded-2xl
                px-4
                py-3.5
                transition-all
                duration-300

                ${
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                }
                `}
              >
                <div className="flex items-center gap-3">

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                <ChevronRight
                  size={16}
                  className="
                  opacity-0
                  group-hover:opacity-100
                  transition
                  "
                />

              </Link>
            </motion.div>
          );
        })}

      </nav>

      {/* Progress */}

      <div className="px-5">

        <div
          className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-5
          "
        >

          <div className="flex justify-between">

            <span className="text-sm text-gray-400">
              Profile
            </span>

            <span className="font-bold text-cyan-400">
              85%
            </span>

          </div>

          <div className="mt-3 h-2 rounded-full bg-white/10">

            <div
              className="
              h-full
              w-[85%]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              "
            />

          </div>

          <p className="mt-3 text-xs text-gray-400">
            Complete your profile to increase hiring chances.
          </p>

        </div>

      </div>

      {/* Logout */}

      <div className="p-5 mt-5 border-t border-white/10">

        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-500/10
          border
          border-red-500/20
          py-3
          text-red-400
          hover:bg-red-500
          hover:text-white
          transition-all
          duration-300
          "
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}