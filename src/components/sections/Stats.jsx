"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "@/lib/gsap";

import {
  BriefcaseBusiness,
  Users,
  Building2,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: 12500,
    suffix: "+",
    title: "Jobs Posted",
    description:
      "Companies actively hiring worldwide.",
    icon: BriefcaseBusiness,
    color: "from-cyan-500 to-blue-600",
  },
  {
    value: 265000,
    suffix: "+",
    title: "Candidates",
    description:
      "Verified professionals on the platform.",
    icon: Users,
    color: "from-purple-500 to-pink-600",
  },
  {
    value: 3200,
    suffix: "+",
    title: "Companies",
    description:
      "Trusted startups & enterprise clients.",
    icon: Building2,
    color: "from-emerald-500 to-green-600",
  },
  {
    value: 98,
    suffix: "%",
    title: "Hiring Success",
    description:
      "Average recruitment success rate.",
    icon: BadgeCheck,
    color: "from-orange-500 to-red-500",
  },
];

export default function Stats() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return;

      const value = Number(el.dataset.value);

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2.5,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: function () {
            el.innerHTML =
              Math.floor(this.targets()[0].innerText).toLocaleString();
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[150px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-20">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">

            <TrendingUp size={16} />

            Platform Analytics

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black">

            Trusted by

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

              {" "}Thousands

            </span>

          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">

            HireFlow AI helps companies recruit faster while giving
            professionals access to the world's best opportunities.

          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: .35,
                }}
                className="
                group
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                overflow-hidden
                "
              >

                <div
                  className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-10
                  transition
                  duration-500
                  bg-gradient-to-br
                  ${item.color}
                  `}
                />

                <div
                  className={`
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  `}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <div className="relative mt-8">

                  <h3
                    ref={(el) => (refs.current[index] = el)}
                    data-value={item.value}
                    className="text-5xl font-black tracking-tight"
                  >
                    0
                  </h3>

                  <span className="text-3xl font-bold text-cyan-400">

                    {item.suffix}

                  </span>

                </div>

                <h4 className="relative mt-4 text-2xl font-bold">

                  {item.title}

                </h4>

                <p className="relative mt-3 text-gray-400 leading-7">

                  {item.description}

                </p>

              </motion.div>

            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl p-8 lg:p-12">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <h3 className="text-3xl font-bold">

                Ready to hire your next superstar?

              </h3>

              <p className="mt-3 text-gray-300 max-w-2xl">

                Join thousands of recruiters and companies already using
                HireFlow AI to automate hiring and discover top talent.

              </p>

            </div>

            <button
              className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:scale-105
              transition
              font-semibold
              shadow-xl
              "
            >
              Get Started
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}