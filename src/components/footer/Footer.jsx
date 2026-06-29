"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

const candidates = [
  { name: "Find Jobs", href: "/jobs" },
  { name: "Companies", href: "/company" },
  { name: "Resume Builder", href: "/candidate/resume" },
  { name: "Profile", href: "/candidate/profile" },
  { name: "Saved Jobs", href: "/candidate/saved-jobs" },
];

const recruiters = [
  { name: "Post Job", href: "/recruiter/jobs/create" },
  { name: "Manage Jobs", href: "/recruiter/jobs" },
  { name: "Candidates", href: "/recruiter/candidates" },
  { name: "Interviews", href: "/interview" },
  { name: "Analytics", href: "/recruiter/analytics" },
];

const support = [
  { name: "Help Center", href: "/help" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
  { name: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-cyan-500/10 bg-[#040816]">

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          <div>

            <h2 className="text-4xl font-black text-white">
              HireFlow AI
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Modern AI-powered recruitment platform helping
              companies hire faster and candidates build
              successful careers worldwide.
            </p>

           <div className="flex gap-4 mt-8">

  <motion.a whileHover={{ y: -4 }} href="#">
    <FaFacebookF className="text-cyan-400 text-xl" />
  </motion.a>

  <motion.a whileHover={{ y: -4 }} href="#">
    <FaXTwitter className="text-cyan-400 text-xl" />
  </motion.a>

  <motion.a whileHover={{ y: -4 }} href="#">
    <FaLinkedinIn className="text-cyan-400 text-xl" />
  </motion.a>

  <motion.a whileHover={{ y: -4 }} href="#">
    <FaInstagram className="text-cyan-400 text-xl" />
  </motion.a>

  <motion.a whileHover={{ y: -4 }} href="#">
    <FaYoutube className="text-cyan-400 text-xl" />
  </motion.a>

</div>

          </div>

          <FooterColumn title="Company" links={company} />

          <FooterColumn title="Candidates" links={candidates} />

          <FooterColumn title="Recruiters" links={recruiters} />

          <div>

            <h3 className="text-xl font-bold mb-6">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-5">
              Get weekly hiring news and job alerts.
            </p>

            <input
              placeholder="Enter your email"
              className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-500
              "
            />

            <button
              className="
              mt-4
              w-full
              rounded-xl
              bg-cyan-500
              py-3
              font-semibold
              hover:bg-cyan-600
              transition
              "
            >
              Subscribe
            </button>

            <div className="mt-10">

              <h3 className="font-bold mb-5">
                Support
              </h3>

              <div className="space-y-3">

                {support.map((item) => (

                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center lg:text-left">
            © 2026 HireFlow AI. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400">
              Privacy
            </Link>

            <Link href="/terms" className="text-gray-400 hover:text-cyan-400">
              Terms
            </Link>

            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400">
              Cookies
            </Link>

            <Link href="/security" className="text-gray-400 hover:text-cyan-400">
              Security
            </Link>

          </div>

          <motion.button
            whileHover={{ y: -4 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            p-3
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            "
          >
            <ArrowUp />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3 className="text-xl font-bold mb-6">
        {title}
      </h3>

      <div className="space-y-4">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
            block
            text-gray-400
            hover:text-cyan-400
            transition
            "
          >
            {link.name}
          </Link>
        ))}

      </div>

    </div>
  );
}