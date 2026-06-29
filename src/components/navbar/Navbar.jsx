 // "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import EyeLogo from "@/components/navbar/EyeLogo";
// import NotificationBell from "@/components/notifications/NotificationBell";
// import ScrollProgress from "@/components/animations/ScrollProgress";

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="
//       fixed
//       top-0
//       left-0
//       right-0
//       z-50
//       backdrop-blur-xl
//       border-b
//       border-white/10
//       "
//     >
//       <ScrollProgress />
//       <NotificationBell />
//       <EyeLogo />
//       <div
//         className="
//         max-w-7xl
//         mx-auto
//         px-8
//         py-5
//         flex
//         justify-between
//         items-center
//         "
//       >
//         <Link href="/">
//           <h1 className="text-2xl font-bold">
//             HireFlow AI
//           </h1>
//         </Link>

//         <div className="flex gap-8">
//           <Link href="/jobs">Jobs</Link>
//           <Link href="/company">
//             Companies
//           </Link>
//           <Link href="/jobs">
//   Jobs
// </Link>
//           <Link href="/contact">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Search,
  ChevronRight,
} from "lucide-react";

import ScrollProgress from "@/components/animations/ScrollProgress";
import NotificationBell from "@/components/notifications/NotificationBell";
import EyeLogo from "@/components/navbar/EyeLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "Companies", href: "/company" },
  { name: "Candidate", href: "/candidate" },
  { name: "Recruiter", href: "/recruiter" },
  { name: "Admin", href: "/admin" },
  { name: "Resume", href: "/resume" },
  { name: "Messages", href: "/messages" },
  { name: "Notifications", href: "/notifications" },
  { name: "Interview", href: "/interview" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollProgress />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-2xl
        bg-[#050816]/80
        border-b
        border-cyan-500/10
        "
      >
        <div
          className="
          max-w-[1700px]
          mx-auto
          h-20
          px-4
          sm:px-6
          lg:px-10
          flex
          items-center
          justify-between
          "
        >
          {/* Logo */}

          <Link href="/">
            <div className="flex items-center gap-3">

              <EyeLogo />

              <div>

                <h1 className="text-2xl font-black text-white">
                  HireFlow AI
                </h1>

                <p className="text-xs text-cyan-400">
                  AI Hiring Platform
                </p>

              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden xl:flex items-center gap-8">

            {navLinks.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className={`

                transition

                duration-300

                font-medium

                ${
                  pathname === item.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }

                `}
              >
                {item.name}
              </Link>

            ))}

          </div>

          {/* Search */}

          <div className="hidden lg:flex items-center">

            <div className="relative">

              <Search
                size={18}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                "
              />

              <input
                placeholder="Search jobs..."
                className="
                w-64
                pl-11
                pr-5
                py-2.5
                rounded-full
                bg-white/5
                border
                border-white/10
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-cyan-400
                transition
                "
              />

            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <NotificationBell />

            <Link
              href="/login"
              className="
              hidden
              lg:flex
              px-5
              py-2
              rounded-full
              border
              border-cyan-500
              text-cyan-400
              hover:bg-cyan-500
              hover:text-white
              transition
              "
            >
              Login
            </Link>

            <Link
              href="/candidate"
              className="
              hidden
              lg:flex
              px-5
              py-2
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:scale-105
              transition
              "
            >
              Dashboard
            </Link>

            {/* Mobile Menu */}

            <button
              onClick={() => setOpen(true)}
              className="xl:hidden"
            >
              <Menu size={30} />
            </button>

          </div>

        </div>
      </motion.nav>

      {/* Drawer */}

      <AnimatePresence>

        {open && (

          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
              fixed
              inset-0
              bg-black/60
              z-40
              "
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
              fixed
              top-0
              right-0
              h-screen
              w-[320px]
              bg-[#08101f]
              border-l
              border-white/10
              z-50
              overflow-y-auto
              "
            >
              <div
                className="
                flex
                items-center
                justify-between
                p-6
                border-b
                border-white/10
                "
              >
                <h2 className="text-2xl font-bold">
                  HireFlow AI
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="p-6">

                {navLinks.map((item) => (

                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-5
                    py-4
                    mb-3
                    transition

                    ${
                      pathname === item.href
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "hover:bg-white/5 text-gray-300"
                    }
                    `}
                  >
                    {item.name}

                    <ChevronRight size={18} />

                  </Link>

                ))}

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="
                  mt-8
                  block
                  text-center
                  rounded-xl
                  border
                  border-cyan-500
                  py-3
                  text-cyan-400
                  "
                >
                  Login
                </Link>

                <Link
                  href="/candidate"
                  onClick={() => setOpen(false)}
                  className="
                  mt-4
                  block
                  text-center
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  py-3
                  "
                >
                  Dashboard
                </Link>

              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

      {/* Navbar Space */}

      <div className="h-20"></div>
    </>
  );
}