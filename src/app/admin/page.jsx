"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import CandidateSidebar from "@/components/dashboard/CandidateSidebar";
import CandidateTopbar from "@/components/dashboard/CandidateTopbar";
import RecruiterSidebar from "@/components/dashboard/RecruiterSidebar";
import StatCard from "@/components/dashboard/StatCard";
import Timeline from "@/components/dashboard/Timeline";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#081224] to-[#111827] text-white">

      {/* Topbar */}
      <CandidateTopbar />

      <div className="flex flex-col xl:flex-row">

        {/* Left Sidebars */}
        <div className="w-full xl:w-[320px] space-y-6 p-4 lg:p-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <AdminSidebar />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <CandidateSidebar />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <RecruiterSidebar />
          </div>

        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">

          {/* Dashboard Cards */}
          <div className="mb-8">
            <StatCard />
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <Timeline />
          </div>

          {/* Current Page */}
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-4
            sm:p-6
            lg:p-8
            backdrop-blur-xl
            "
          >
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}