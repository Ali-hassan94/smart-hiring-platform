"use client";

import { motion } from "framer-motion";
import {
  FilePlus2,
  Users,
  CalendarCheck2,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: FilePlus2,
    title: "Create & Publish Jobs",
    description:
      "Create detailed job listings with skills, salary, experience and AI-powered recommendations. Publish instantly to attract qualified candidates.",
    stat: "10K+ Jobs Posted",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Review Applications",
    description:
      "Track applicants in one dashboard. Filter candidates by skills, experience, education and AI matching score.",
    stat: "250K+ Applications",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: CalendarCheck2,
    title: "Schedule Interviews",
    description:
      "Send interview invitations, manage schedules and collaborate with your hiring team using one platform.",
    stat: "50K+ Interviews",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BadgeCheck,
    title: "Hire Top Talent",
    description:
      "Finalize hiring, send offer letters and onboard candidates with a streamlined recruitment workflow.",
    stat: "18K+ Successful Hires",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function StickyCards() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Recruitment Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black">
            Hire Faster With
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}AI Recruitment
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Everything recruiters need—from creating jobs to onboarding new hires—
            in one intelligent hiring platform.
          </p>

        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="sticky top-24 mb-12"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-[#0B1220]/90
                backdrop-blur-xl
                overflow-hidden
                shadow-2xl
                "
              >
                <div className="grid lg:grid-cols-2">

                  {/* Left */}

                  <div className="p-8 md:p-12 flex flex-col justify-center">

                    <div
                      className={`
                      w-20
                      h-20
                      rounded-2xl
                      bg-gradient-to-r
                      ${step.gradient}
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      `}
                    >
                      <Icon size={36} className="text-white" />
                    </div>

                    <h3 className="mt-8 text-3xl md:text-4xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-6 text-gray-400 leading-8 text-lg">
                      {step.description}
                    </p>

                    <div
                      className="
                      mt-8
                      inline-flex
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      px-6
                      py-3
                      text-cyan-300
                      font-semibold
                      w-fit
                      "
                    >
                      {step.stat}
                    </div>

                  </div>

                  {/* Right */}

                  <div className="relative min-h-[320px] lg:min-h-[450px] flex items-center justify-center p-8">

                    <div
                      className={`
                      absolute
                      w-72
                      h-72
                      rounded-full
                      blur-[120px]
                      opacity-30
                      bg-gradient-to-r
                      ${step.gradient}
                      `}
                    />

                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                      className="
                      relative
                      w-full
                      max-w-md
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-8
                      "
                    >
                      <div className="flex items-center justify-between">

                        <h4 className="text-xl font-bold">
                          {step.title}
                        </h4>

                        <Icon className="text-cyan-400" />
                      </div>

                      <div className="mt-8 space-y-4">

                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-full w-[92%] rounded-full bg-cyan-400" />
                        </div>

                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-full w-[76%] rounded-full bg-blue-500" />
                        </div>

                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-full w-[58%] rounded-full bg-purple-500" />
                        </div>

                      </div>

                      <div className="mt-10 rounded-2xl bg-black/20 border border-white/10 p-5">

                        <p className="text-gray-300">
                          AI is processing candidate data and providing
                          recommendations based on skills, experience,
                          education and interview performance.
                        </p>

                      </div>

                    </motion.div>

                  </div>

                </div>
              </motion.div>
            </div>
          );
        })}

      </div>

    </section>
  );
}