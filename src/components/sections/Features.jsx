"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "@/lib/gsap";

import {
  Sparkles,
  Brain,
  Search,
  ShieldCheck,
  MessageSquareMore,
  BarChart3,
  FileText,
  CalendarCheck2,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Candidate Matching",
    description:
      "Our AI analyzes skills, experience, education and job requirements to recommend the best candidates instantly.",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Smart Resume Screening",
    description:
      "Automatically rank resumes based on keywords, experience and AI relevance scores.",
    icon: FileText,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Advanced Job Search",
    description:
      "Powerful filters help candidates discover the perfect opportunities in seconds.",
    icon: Search,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 4,
    title: "Interview Scheduling",
    description:
      "Schedule interviews, send invitations and manage availability from one dashboard.",
    icon: CalendarCheck2,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Real-Time Messaging",
    description:
      "Recruiters and candidates communicate securely through built-in chat.",
    icon: MessageSquareMore,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 6,
    title: "Recruitment Analytics",
    description:
      "Track hiring performance with interactive reports and real-time dashboards.",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-700",
  },
  {
    id: 7,
    title: "Enterprise Security",
    description:
      "Secure authentication, encrypted data and enterprise-grade protection.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 8,
    title: "AI Hiring Assistant",
    description:
      "Generate interview questions, evaluate candidates and automate recruitment workflows.",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Features() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.from(cardsRef.current.children, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/3 top-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-[150px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm">

            <Sparkles size={16} />

            Platform Features

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black">

            Everything You Need

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

              {" "}To Hire Smarter

            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8">

            HireFlow AI combines artificial intelligence, automation and modern recruitment tools into one enterprise hiring platform.

          </p>

        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.id}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  duration: .3,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${feature.color}`}
                />

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-xl`}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="relative mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="relative mt-4 text-gray-400 leading-7">
                  {feature.description}
                </p>

                <div className="relative mt-8 flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition">

                  Learn More →

                </div>

              </motion.div>

            );

          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-xl p-10 lg:p-16 text-center"
        >

          <h3 className="text-3xl lg:text-4xl font-bold">

            Start Hiring With AI Today

          </h3>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto">

            From intelligent resume screening to interview scheduling and analytics,
            HireFlow AI provides everything needed to streamline modern recruitment.

          </p>

          <button
            className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
          >
            Explore Platform
          </button>

        </motion.div>

      </div>

    </section>
  );
}