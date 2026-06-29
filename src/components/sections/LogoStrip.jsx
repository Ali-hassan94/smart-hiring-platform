"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Crown,
  Rocket,
} from "lucide-react";

const plans = [
  {
    icon: <Sparkles size={30} />,
    title: "Starter",
    price: "$29",
    desc: "Perfect for startups hiring occasionally.",
    popular: false,
    features: [
      "Up to 10 Active Jobs",
      "100 Applicants / Month",
      "Resume Management",
      "Candidate Dashboard",
      "Basic Analytics",
      "Email Support",
    ],
  },

  {
    icon: <Rocket size={32} />,
    title: "Professional",
    price: "$99",
    desc: "Designed for growing companies.",
    popular: true,
    features: [
      "Unlimited Jobs",
      "Unlimited Applicants",
      "AI Resume Screening",
      "Interview Scheduling",
      "Custom Career Page",
      "Advanced Analytics",
      "Priority Support",
      "Team Collaboration",
    ],
  },

  {
    icon: <Crown size={34} />,
    title: "Enterprise",
    price: "Custom",
    desc: "Complete recruitment solution.",
    popular: false,
    features: [
      "Everything in Professional",
      "Unlimited Recruiters",
      "AI Candidate Ranking",
      "SSO Login",
      "API Access",
      "Custom Integrations",
      "Dedicated Manager",
      "White Label Platform",
      "24/7 Premium Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#09132B] to-[#050816]" />

      <div className="relative max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[5px]">
            Pricing
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            Flexible Plans
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Scale your recruitment from startup to enterprise.
            Only pay for the features your team actually needs.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .8,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className={`
                relative
                rounded-[30px]
                border
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-500

                ${
                  plan.popular
                    ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_60px_rgba(6,182,212,.35)]"
                    : "border-white/10 bg-white/5"
                }
              `}
            >

              {plan.popular && (
                <div className="absolute right-5 top-5 px-4 py-1 rounded-full bg-cyan-500 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-10">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-8">
                  {plan.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {plan.title}
                </h3>

                <div className="mt-5">

                  <span className="text-5xl font-black">
                    {plan.price}
                  </span>

                  {plan.price !== "Custom" && (
                    <span className="text-gray-400 ml-2">
                      /month
                    </span>
                  )}

                </div>

                <p className="mt-5 text-gray-400">
                  {plan.desc}
                </p>

                <button
                  className={`
                    mt-10
                    w-full
                    py-4
                    rounded-2xl
                    font-semibold
                    transition

                    ${
                      plan.popular
                        ? "bg-cyan-500 hover:bg-cyan-400"
                        : "bg-white/10 hover:bg-white/20"
                    }
                  `}
                >
                  Get Started
                </button>

                <div className="mt-10 space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={18}
                        className="text-cyan-400 shrink-0"
                      />

                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 lg:p-10 text-center"
        >

          <h3 className="text-3xl font-bold">
            Need a custom hiring solution?
          </h3>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We provide enterprise onboarding, custom integrations,
            dedicated support, AI recruitment automation, ATS migration,
            and white-label recruitment platforms.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
            Contact Sales
          </button>

        </motion.div>

      </div>

    </section>
  );
} 