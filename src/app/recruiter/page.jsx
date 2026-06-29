"use client";

import { useEffect, useState } from "react";
import { Menu, X, Bell, Search } from "lucide-react";

import RecruiterSidebar from "@/components/dashboard/RecruiterSidebar";

export default function RecruiterLayout({
  children,
}) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className="
      min-h-screen
      flex
      bg-gradient-to-br
      from-[#020617]
      via-[#081229]
      to-[#111827]
      text-white
      overflow-hidden
      "
    >
      {/* ================= Desktop Sidebar ================= */}

      <aside
        className="
        hidden
        lg:block
        w-[290px]
        shrink-0
        border-r
        border-white/10
        bg-black/20
        backdrop-blur-2xl
        "
      >
        <RecruiterSidebar />
      </aside>

      {/* ================= Mobile Sidebar ================= */}

      <div
        className={`
        fixed
        inset-0
        z-[999]
        lg:hidden
        transition-all
        duration-300
        ${
          open
            ? "bg-black/60 backdrop-blur-sm"
            : "pointer-events-none bg-transparent"
        }
        `}
      >
        <aside
          className={`
          absolute
          left-0
          top-0
          h-full
          w-[280px]
          bg-[#081223]
          border-r
          border-white/10
          shadow-2xl
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
          `}
        >
          <RecruiterSidebar />

          <button
            onClick={() => setOpen(false)}
            className="
            absolute
            top-5
            right-5
            p-2
            rounded-xl
            bg-white/10
            hover:bg-red-500
            transition
            "
          >
            <X size={20} />
          </button>
        </aside>

        <div
          className="w-full h-full"
          onClick={() => setOpen(false)}
        />
      </div>

      {/* ================= Right Side ================= */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}

        <header
          className="
          sticky
          top-0
          z-40
          h-16
          sm:h-20
          border-b
          border-white/10
          bg-[#050816]/70
          backdrop-blur-2xl
          px-4
          sm:px-6
          lg:px-10
          flex
          items-center
          justify-between
          "
        >
          {/* Left */}

          <div className="flex items-center gap-4">

            <button
              onClick={() => setOpen(true)}
              className="
              lg:hidden
              p-2
              rounded-xl
              bg-white/10
              hover:bg-cyan-500
              transition
              "
            >
              <Menu size={22} />
            </button>

            <h1
              className="
              text-lg
              sm:text-xl
              lg:text-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >
              Recruiter Dashboard
            </h1>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            <button
              className="
              hidden
              md:flex
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              bg-white/10
              hover:bg-cyan-500
              transition
              "
            >
              <Search size={20} />
            </button>

            <button
              className="
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              bg-white/10
              hover:bg-cyan-500
              transition
              "
            >
              <Bell size={20} />
            </button>

            <img
              src="https://i.pravatar.cc/100"
              alt="Recruiter"
              className="
              w-10
              h-10
              rounded-full
              border
              border-cyan-500
              object-cover
              "
            />

          </div>
        </header>

        {/* Page */}

        <main
          className="
          flex-1
          overflow-y-auto
          px-4
          py-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          "
        >
          <div
            className="
            max-w-[1700px]
            mx-auto
            "
          >
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}