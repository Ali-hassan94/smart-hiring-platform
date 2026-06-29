"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CircleCheckBig } from "lucide-react";

const companies = [
  { name: "Google", jobs: "185 Jobs", color: "bg-blue-500" },
  { name: "Microsoft", jobs: "142 Jobs", color: "bg-sky-500" },
  { name: "Amazon", jobs: "210 Jobs", color: "bg-orange-500" },
  { name: "Meta", jobs: "96 Jobs", color: "bg-indigo-500" },
  { name: "Netflix", jobs: "54 Jobs", color: "bg-red-500" },
  { name: "Tesla", jobs: "88 Jobs", color: "bg-gray-600" },
  { name: "Stripe", jobs: "61 Jobs", color: "bg-purple-500" },
  { name: "Adobe", jobs: "72 Jobs", color: "bg-pink-500" },
];

export default function Companies() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

            <CircleCheckBig size={16} />

            Trusted by Global Companies

          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">

            Companies Hiring Through

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}HireFlow AI
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">

            Thousands of startups and enterprise organizations trust
            HireFlow AI to recruit top talent faster.

          </p>

        </div>

        {/* Infinite Marquee */}

        <div className="mt-20 overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {[...companies, ...companies].map((company, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                min-w-[260px]
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`${company.color}
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    font-bold
                    text-white`}
                  >
                    {company.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">

                      {company.name}

                    </h3>

                    <p className="text-gray-400">

                      Technology Company

                    </p>

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400">
                      Open Positions
                    </p>

                    <h4 className="text-2xl font-bold text-cyan-400">

                      {company.jobs}

                    </h4>

                  </div>

                  <BriefcaseBusiness
                    size={34}
                    className="text-cyan-400"
                  />

                </div>

              </motion.div>

            ))}
          </motion.div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-4xl font-black text-cyan-400">3200+</h3>
            <p className="mt-2 text-gray-400">Companies</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-4xl font-black text-cyan-400">12K+</h3>
            <p className="mt-2 text-gray-400">Jobs Posted</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-4xl font-black text-cyan-400">265K+</h3>
            <p className="mt-2 text-gray-400">Candidates</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-4xl font-black text-cyan-400">98%</h3>
            <p className="mt-2 text-gray-400">Success Rate</p>
          </div>

        </div>

      </div>

    </section>
  );
}