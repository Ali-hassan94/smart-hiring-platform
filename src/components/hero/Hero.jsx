"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Sparkles,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import gsap from "@/lib/gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
      });

      gsap.to(titleRef.current, {
        y: -120,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      bg-gradient-to-br
      from-[#030712]
      via-[#08111f]
      to-[#111827]
      px-5
      sm:px-8
      lg:px-10
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-cyan-300
              text-sm
              mb-8
              "
            >
              <Sparkles size={16} />
              Trusted by 500+ Global Companies
            </motion.div>

            <h1
              ref={titleRef}
              className="
              text-5xl
              sm:text-6xl
              xl:text-7xl
              font-black
              leading-tight
              text-white
              "
            >
              Hire the
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}Best Talent{" "}
              </span>
              Faster with AI.
            </h1>

            <div ref={contentRef}>

              <p className="mt-8 text-lg text-gray-400 max-w-xl leading-8">
                AI-powered recruitment platform connecting
                companies with verified professionals worldwide.
                Search, apply, interview and hire in one place.
              </p>

              {/* Search */}

              <div
                className="
                mt-10
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-3
                flex
                flex-col
                md:flex-row
                gap-3
                "
              >
                <div className="relative flex-1">

                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    placeholder="Job title or keyword"
                    className="
                    w-full
                    bg-transparent
                    pl-11
                    pr-4
                    py-4
                    outline-none
                    "
                  />

                </div>

                <div className="relative flex-1">

                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    placeholder="Location"
                    className="
                    w-full
                    bg-transparent
                    pl-11
                    pr-4
                    py-4
                    outline-none
                    "
                  />

                </div>

                <MagneticButton>
                  Search Jobs
                </MagneticButton>

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <Link href="/jobs">
                  <MagneticButton>
                    Explore Jobs
                  </MagneticButton>
                </Link>

                <Link href="/recruiter">
                  <button
                    className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-cyan-500
                    hover:bg-cyan-500
                    transition
                    "
                  >
                    Hire Talent
                  </button>
                </Link>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-6 mt-14">

                <Stat
                  icon={<Users size={24} />}
                  number="120K+"
                  text="Candidates"
                />

                <Stat
                  icon={<BriefcaseBusiness size={24} />}
                  number="8K+"
                  text="Jobs"
                />

                <Stat
                  icon={<Sparkles size={24} />}
                  number="500+"
                  text="Companies"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative hidden lg:block">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              "
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                alt="Team"
                className="rounded-2xl"
              />

              <div className="mt-6">

                <h3 className="text-2xl font-bold">
                  AI Matching Score
                </h3>

                <div className="mt-5 h-3 rounded-full bg-white/10">

                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

                </div>

                <p className="mt-4 text-gray-400">
                  92% Candidate Match
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Stat({ icon, number, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-cyan-400">{icon}</div>
      <h3 className="text-3xl font-bold mt-3">{number}</h3>
      <p className="text-gray-400 mt-1">{text}</p>
    </div>
  );
}