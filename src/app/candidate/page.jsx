"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import CandidateSidebar from "@/components/dashboard/CandidateSidebar";
import CandidateTopbar from "@/components/dashboard/CandidateTopbar";

export default function CandidateLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#050816]
      via-[#08152d]
      to-[#050816]
      text-white
      flex
      "
    >
      {/* Desktop Sidebar */}

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
        <CandidateSidebar />
      </aside>

      {/* Mobile Sidebar */}

      <div
        className={`
        fixed
        inset-0
        z-50
        lg:hidden
        transition-all
        duration-300
        ${
          open
            ? "bg-black/70 backdrop-blur-sm"
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
          bg-[#071221]
          border-r
          border-white/10
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
          `}
        >
          <CandidateSidebar />

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

      {/* Right Section */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* Sticky Topbar */}

        <header
          className="
          sticky
          top-0
          z-40
          border-b
          border-white/10
          bg-[#08152d]/80
          backdrop-blur-xl
          "
        >
          <div className="flex items-center">

            <button
              onClick={() => setOpen(true)}
              className="
              lg:hidden
              ml-4
              p-2
              rounded-xl
              bg-white/10
              hover:bg-cyan-500
              transition
              "
            >
              <Menu size={22} />
            </button>

            <div className="flex-1">
              <CandidateTopbar />
            </div>

          </div>
        </header>

        {/* Page */}

        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          sm:p-6
          md:p-8
          lg:p-10
          "
        >
          <div
            className="
            max-w-[1700px]
            mx-auto
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,.35)]
            p-4
            sm:p-6
            lg:p-10
            "
          >
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}