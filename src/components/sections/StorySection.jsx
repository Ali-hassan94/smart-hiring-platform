"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Search,
  FileCheck,
  CalendarCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: UserRound,
    title: "Create Professional Profile",
    subtitle: "Complete your hiring profile",
    desc: "Upload your resume, portfolio, skills, education, certifications and experience so recruiters instantly discover your profile.",
    color: "from-cyan-500 to-blue-600",
    button: "Create Profile",
  },

  {
    icon: Search,
    title: "Discover AI Recommended Jobs",
    subtitle: "Personalized opportunities",
    desc: "Our AI recommends jobs matching your skills, salary expectations and preferred locations automatically.",
    color: "from-purple-500 to-indigo-600",
    button: "Browse Jobs",
  },

  {
    icon: FileCheck,
    title: "Apply With One Click",
    subtitle: "Fast application process",
    desc: "Apply instantly using your saved profile. Recruiters receive your resume, portfolio and profile immediately.",
    color: "from-emerald-500 to-green-600",
    button: "Apply Now",
  },

  {
    icon: CalendarCheck,
    title: "Interview Scheduling",
    subtitle: "AI Powered Interview",
    desc: "Receive interview invitations, schedule meetings and attend online interviews directly from HireFlow AI.",
    color: "from-orange-500 to-red-500",
    button: "View Interviews",
  },

  {
    icon: BadgeCheck,
    title: "You're Hired 🎉",
    subtitle: "Congratulations",
    desc: "Accept offers, sign documents digitally and begin onboarding through one platform.",
    color: "from-pink-500 to-fuchsia-600",
    button: "View Offers",
  },
];

export default function StorySection() {
  return (
    <section className="relative py-24 lg:py-40 bg-gradient-to-b from-[#050816] via-[#081020] to-[#050816] overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full -top-20 -left-20" />

      <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[150px] rounded-full bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-24">

          <span className="text-cyan-400 uppercase tracking-[5px]">
            Hiring Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Your Complete Career Journey
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Everything from creating your profile to accepting your
            dream job happens inside HireFlow AI.
          </p>

        </div>

        <div className="space-y-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className="sticky top-24"
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .8,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                  rounded-[35px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  overflow-hidden
                  shadow-2xl
                  "
                >

                  <div className="grid lg:grid-cols-2">

                    <div className="p-8 md:p-14 flex flex-col justify-center">

                      <div
                        className={`
                        w-20
                        h-20
                        rounded-3xl
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-r
                        ${step.color}
                        `}
                      >
                        <Icon size={38} />
                      </div>

                      <p className="mt-10 text-cyan-400 uppercase tracking-[4px]">
                        Step {index + 1}
                      </p>

                      <h3 className="mt-3 text-3xl lg:text-5xl font-black">
                        {step.title}
                      </h3>

                      <h4 className="mt-4 text-xl text-white/80">
                        {step.subtitle}
                      </h4>

                      <p className="mt-8 text-gray-400 leading-8">
                        {step.desc}
                      </p>

                      <button
                        className={`
                        mt-10
                        w-fit
                        px-7
                        py-4
                        rounded-xl
                        flex
                        items-center
                        gap-3
                        bg-gradient-to-r
                        ${step.color}
                        hover:scale-105
                        transition
                        `}
                      >
                        {step.button}

                        <ArrowRight size={18} />
                      </button>

                    </div>

                    <div
                      className={`
                      min-h-[320px]
                      lg:min-h-[520px]
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      ${step.color}
                      `}
                    >

                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                        }}
                        className="
                        w-44
                        h-44
                        md:w-60
                        md:h-60
                        rounded-full
                        bg-white/20
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Icon size={90} />
                      </motion.div>

                    </div>

                  </div>

                </motion.div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}