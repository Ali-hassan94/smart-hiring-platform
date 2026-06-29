"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl p-10 shadow-2xl"
    >
      <h1 className="text-4xl font-bold text-white mb-2">
        Welcome Back
      </h1>

      <p className="text-gray-400 mb-8">
        Login to your HireFlow AI account
      </p>

      <form className="space-y-5">
        <div className="relative">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white outline-none focus:border-cyan-500"
          />
        </div>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white outline-none focus:border-cyan-500"
          />

          <Eye
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            Remember Me
          </label>

          <Link
            href="/forgot-password"
            className="hover:text-cyan-400"
          >
            Forgot Password?
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white hover:bg-cyan-600 transition"
        >
          Login
        </motion.button>

        <div className="relative py-2">
          <div className="border-t border-white/10"></div>

          <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#0b1020] px-4 text-gray-400">
            OR
          </span>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 py-3 hover:bg-white/10 transition"
        >
          <FaGoogle size={20} />
          Continue with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 py-3 hover:bg-white/10 transition"
        >
          <FaGithub size={20} />
          Continue with GitHub
        </button>

        <p className="text-center text-gray-400 pt-4">
          Don't have an account?

          <Link
            href="/signup"
            className="ml-2 text-cyan-400 hover:text-cyan-300"
          >
            Create Account
          </Link>
        </p>
      </form>
    </motion.div>
  );
}