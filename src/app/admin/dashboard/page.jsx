"use client";

import Link from "next/link";
import {
  Briefcase,
  Users,
  Building2,
  UserCheck,
  FileText,
  CalendarCheck,
  Bell,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Jobs",
    value: "1,248",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Candidates",
    value: "18,542",
    icon: Users,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Companies",
    value: "324",
    icon: Building2,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Recruiters",
    value: "186",
    icon: UserCheck,
    color: "from-orange-500 to-red-500",
  },
];

const quickActions = [
  {
    title: "Manage Jobs",
    desc: "Create, edit and delete jobs",
    icon: Briefcase,
    href: "/admin/jobs",
  },
  {
    title: "Companies",
    desc: "Verify company profiles",
    icon: Building2,
    href: "/admin/companies",
  },
  {
    title: "Candidates",
    desc: "Review candidate profiles",
    icon: Users,
    href: "/admin/candidates",
  },
  {
    title: "Applications",
    desc: "Monitor job applications",
    icon: FileText,
    href: "/admin/applications",
  },
];

const activities = [
  "Google posted a new Frontend Developer job.",
  "TechNova company verification completed.",
  "12 new candidates registered today.",
  "Amazon scheduled 4 interviews.",
  "Meta closed Backend Engineer position.",
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>
          <p className="text-cyan-400 font-semibold">
            Welcome Back 👋
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Monitor jobs, recruiters, companies and candidates from one
            central dashboard.
          </p>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold hover:scale-105 transition">
          + Create Job
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-500 transition"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-400">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-black mt-3">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                >
                  <Icon size={30} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Middle */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Quick Actions */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            {quickActions.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:border-cyan-500 transition group"
                >
                  <Icon
                    size={34}
                    className="text-cyan-400"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-cyan-400">
                    Open
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>
                </Link>
              );
            })}

          </div>

        </div>

        {/* Notifications */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="flex items-center gap-3">
            <Bell className="text-yellow-400" />
            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>
          </div>

          <div className="mt-8 space-y-5">

            {activities.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-gray-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Cards */}
      <div className="grid lg:grid-cols-3 gap-6">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8">
          <TrendingUp size={40} />
          <h2 className="text-2xl font-bold mt-6">
            Hiring Growth
          </h2>
          <p className="mt-3 text-white/80">
            +18% hiring growth compared to last month.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8">
          <CalendarCheck size={40} />
          <h2 className="text-2xl font-bold mt-6">
            Interviews
          </h2>
          <p className="mt-3 text-white/80">
            46 interviews are scheduled for this week.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 p-8">
          <Users size={40} />
          <h2 className="text-2xl font-bold mt-6">
            Active Users
          </h2>
          <p className="mt-3 text-white/80">
            8,540 users are active on the platform today.
          </p>
        </div>

      </div>

    </div>
  );
}