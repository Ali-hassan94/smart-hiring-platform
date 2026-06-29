"use client";

import PageTransition from "@/components/animations/PageTransition";
import {
  Shield,
  Briefcase,
  UserPlus,
  Trash2,
  Settings,
  Clock3,
  Search,
} from "lucide-react";

const logs = [
  {
    id: 1,
    action: "Created a new Job Post",
    module: "Jobs",
    user: "Ali Hassan",
    role: "Recruiter",
    level: "Success",
    ip: "192.168.10.15",
    time: "2 mins ago",
  },
  {
    id: 2,
    action: "Candidate Applied",
    module: "Applications",
    user: "Ahmed Khan",
    role: "Candidate",
    level: "Info",
    ip: "192.168.10.22",
    time: "10 mins ago",
  },
  {
    id: 3,
    action: "Deleted User Account",
    module: "Users",
    user: "Super Admin",
    role: "Admin",
    level: "Danger",
    ip: "192.168.10.2",
    time: "35 mins ago",
  },
  {
    id: 4,
    action: "Updated Company Profile",
    module: "Companies",
    user: "Google HR",
    role: "Recruiter",
    level: "Warning",
    ip: "192.168.10.55",
    time: "1 hour ago",
  },
  {
    id: 5,
    action: "Changed Platform Settings",
    module: "Settings",
    user: "Admin",
    role: "Super Admin",
    level: "Info",
    ip: "192.168.10.1",
    time: "Today",
  },
];

function badge(level) {
  switch (level) {
    case "Success":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Danger":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "Warning":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
  }
}

function icon(module) {
  switch (module) {
    case "Jobs":
      return <Briefcase size={22} />;
    case "Users":
      return <Trash2 size={22} />;
    case "Settings":
      return <Settings size={22} />;
    case "Applications":
      return <UserPlus size={22} />;
    default:
      return <Shield size={22} />;
  }
}

export default function ActivityPage() {
  return (
    <PageTransition>
      <div className="space-y-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              Activity Logs
            </h1>

            <p className="text-gray-400 mt-2">
              Monitor every important activity happening across your hiring platform.
            </p>
          </div>

          <div className="relative w-full lg:w-96">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              placeholder="Search activity..."
              className="
              w-full
              rounded-2xl
              bg-white/5
              border
              border-white/10
              pl-12
              pr-4
              py-3
              outline-none
              focus:border-cyan-400
              "
            />
          </div>

        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-gray-400">Today's Logs</h3>
            <h2 className="text-4xl font-bold mt-3">128</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-gray-400">Recruiter Actions</h3>
            <h2 className="text-4xl font-bold mt-3">42</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-gray-400">Candidate Actions</h3>
            <h2 className="text-4xl font-bold mt-3">63</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-gray-400">Admin Events</h3>
            <h2 className="text-4xl font-bold mt-3">23</h2>
          </div>

        </div>

        <div className="space-y-5">

          {logs.map((log) => (
            <div
              key={log.id}
              className="
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-r
              from-white/5
              to-cyan-500/5
              backdrop-blur-xl
              p-6
              hover:border-cyan-400
              transition-all
              duration-300
              "
            >
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

                <div className="flex gap-5">

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    "
                  >
                    {icon(log.module)}
                  </div>

                  <div>

                    <h2 className="text-xl font-semibold">
                      {log.action}
                    </h2>

                    <p className="text-gray-400 mt-1">
                      Module : {log.module}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-400">

                      <span>User : {log.user}</span>

                      <span>Role : {log.role}</span>

                      <span>IP : {log.ip}</span>

                    </div>

                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-4">

                  <span
                    className={`
                    px-4
                    py-2
                    rounded-full
                    border
                    text-sm
                    ${badge(log.level)}
                    `}
                  >
                    {log.level}
                  </span>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock3 size={16} />
                    {log.time}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </PageTransition>
  );
}