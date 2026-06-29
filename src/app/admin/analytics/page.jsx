"use client";

import PageTransition from "@/components/animations/PageTransition";
import {
  Briefcase,
  Users,
  UserCheck,
  TrendingUp,
  Activity,
  Clock,
  Building2,
  BarChart3,
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
    value: "18,426",
    icon: Users,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Recruiters",
    value: "312",
    icon: Building2,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Hiring Rate",
    value: "92%",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

const recentActivity = [
  {
    title: "Google posted Senior React Developer",
    time: "5 min ago",
  },
  {
    title: "Meta hired Muhammad Ali",
    time: "20 min ago",
  },
  {
    title: "Amazon scheduled interview",
    time: "35 min ago",
  },
  {
    title: "Netflix approved recruiter",
    time: "1 hour ago",
  },
];

const topRecruiters = [
  {
    name: "Google",
    jobs: 48,
  },
  {
    name: "Microsoft",
    jobs: 39,
  },
  {
    name: "Amazon",
    jobs: 31,
  },
  {
    name: "Tesla",
    jobs: 26,
  },
];

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Analytics Dashboard
            </h1>

            <p className="mt-2 text-gray-400">
              Monitor platform growth, hiring activity and recruiter performance.
            </p>
          </div>

          <button
            className="
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-6
            py-3
            font-semibold
            hover:scale-105
            transition
            "
          >
            Export Report
          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-cyan-500/40
                transition
                "
              >
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-gray-400">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                      {item.value}
                    </h2>

                  </div>

                  <div
                    className={`
                    h-16
                    w-16
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                    flex
                    items-center
                    justify-center
                    `}
                  >
                    <Icon size={30} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-3 gap-6">

          <div
            className="
            lg:col-span-2
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-cyan-400" />
              <h2 className="text-2xl font-bold">
                Hiring Analytics
              </h2>
            </div>

            <div
              className="
              h-[360px]
              rounded-2xl
              border
              border-dashed
              border-cyan-500/30
              bg-gradient-to-br
              from-cyan-500/10
              to-blue-600/10
              flex
              items-center
              justify-center
              text-gray-400
              "
            >
              Connect Chart.js / Recharts Here
            </div>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <h2 className="text-2xl font-bold mb-6">
              Hiring Funnel
            </h2>

            <div className="space-y-5">

              {[
                ["Applications", "18,426"],
                ["Reviewed", "12,500"],
                ["Interviews", "3,420"],
                ["Offers", "932"],
                ["Hired", "615"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-400">
                    {title}
                  </span>

                  <span className="font-bold">
                    {value}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-6">

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-green-400" />
              <h2 className="text-2xl font-bold">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-4">

              {recentActivity.map((item) => (
                <div
                  key={item.title}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  "
                >
                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                      <Clock size={14} />
                      {item.time}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-cyan-400" />
              <h2 className="text-2xl font-bold">
                Top Recruiters
              </h2>
            </div>

            <div className="space-y-4">

              {topRecruiters.map((item) => (
                <div
                  key={item.name}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  "
                >
                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Active Recruiter
                    </p>

                  </div>

                  <span
                    className="
                    rounded-full
                    bg-cyan-500/20
                    px-4
                    py-2
                    text-cyan-300
                    font-semibold
                    "
                  >
                    {item.jobs} Jobs
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}