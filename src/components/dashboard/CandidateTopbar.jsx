"use client";

import Link from "next/link";
import {
  Bell,
  Search,
  Mail,
  User,
  ChevronDown,
} from "lucide-react";

export default function CandidateTopbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-40
      w-full
      border-b
      border-white/10
      bg-[#050816]/80
      backdrop-blur-2xl
      "
    >
      <div
        className="
        max-w-[1700px]
        mx-auto
        h-16
        sm:h-20
        px-4
        sm:px-6
        lg:px-8
        flex
        items-center
        justify-between
        gap-4
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">

          <Link
            href="/"
            className="
            text-xl
            sm:text-2xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-indigo-500
            bg-clip-text
            text-transparent
            "
          >
            HireFlow AI
          </Link>

        </div>

        {/* Search */}

        <div
          className="
          hidden
          md:flex
          flex-1
          max-w-xl
          mx-8
          "
        >
          <div
            className="
            flex
            items-center
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            "
          >
            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search jobs..."
              className="
              w-full
              bg-transparent
              px-3
              py-3
              outline-none
              text-sm
              placeholder:text-gray-500
              "
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2 sm:gap-4">

          {/* Messages */}

          <button
            className="
            relative
            h-10
            w-10
            rounded-xl
            border
            border-white/10
            bg-white/5
            flex
            items-center
            justify-center
            hover:bg-cyan-500/20
            transition
            "
          >
            <Mail size={18} />

            <span
              className="
              absolute
              -top-1
              -right-1
              h-5
              w-5
              rounded-full
              bg-cyan-500
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
              "
            >
              3
            </span>
          </button>

          {/* Notification */}

          <button
            className="
            relative
            h-10
            w-10
            rounded-xl
            border
            border-white/10
            bg-white/5
            flex
            items-center
            justify-center
            hover:bg-cyan-500/20
            transition
            "
          >
            <Bell size={18} />

            <span
              className="
              absolute
              -top-1
              -right-1
              h-5
              w-5
              rounded-full
              bg-red-500
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
              "
            >
              5
            </span>
          </button>

          {/* Profile */}

          <button
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-2
            sm:px-3
            py-2
            hover:border-cyan-500
            transition
            "
          >
            <div
              className="
              h-10
              w-10
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              flex
              items-center
              justify-center
              "
            >
              <User size={20} />
            </div>

            <div className="hidden lg:block text-left">

              <h4 className="font-semibold text-sm">
                Ali Hassan
              </h4>

              <p className="text-xs text-green-400">
                ● Online
              </p>

            </div>

            <ChevronDown
              size={16}
              className="hidden lg:block"
            />
          </button>

        </div>

      </div>
    </header>
  );
}