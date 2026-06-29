"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { jobs } from "@/data/jobs";

import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  MapPin,
  Building2,
  Briefcase,
} from "lucide-react";

export default function JobsPage() {
  const [search, setSearch] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      `${job.title} ${job.company} ${job.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Manage Jobs
          </h1>

          <p className="text-gray-400 mt-2">
            Create, update and monitor all job postings.
          </p>

        </div>

        <Link
          href="/recruiter/jobs/create"
          className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-cyan-500
          px-6
          py-3
          font-semibold
          hover:bg-cyan-400
          transition
          "
        >
          <Plus size={20} />
          Post New Job
        </Link>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Total Jobs</p>
          <h2 className="text-4xl font-bold mt-2">
            {jobs.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Active</p>
          <h2 className="text-4xl font-bold mt-2 text-green-400">
            {jobs.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Applications</p>
          <h2 className="text-4xl font-bold mt-2">
            842
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Interviews</p>
          <h2 className="text-4xl font-bold mt-2">
            58
          </h2>
        </div>

      </div>

      {/* Search */}

      <div
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        "
      >
        <Search size={20} className="text-cyan-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search jobs..."
          className="
          flex-1
          bg-transparent
          outline-none
          text-white
          "
        />
      </div>

      {/* Mobile Cards */}

      <div className="grid gap-5 lg:hidden">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            "
          >
            <h2 className="text-xl font-bold">
              {job.title}
            </h2>

            <div className="mt-4 space-y-2 text-gray-300">

              <div className="flex items-center gap-2">
                <Building2 size={18} />
                {job.company}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {job.location}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                Active
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button className="flex-1 rounded-xl bg-cyan-500 py-3 hover:bg-cyan-400 transition">
                View
              </button>

              <button className="flex-1 rounded-xl bg-yellow-500 py-3 hover:bg-yellow-400 transition">
                Edit
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Desktop Table */}

      <div
        className="
        hidden
        lg:block
        overflow-x-auto
        rounded-3xl
        border
        border-white/10
        bg-white/5
        "
      >
        <table className="w-full">

          <thead className="bg-white/10">

            <tr>

              <th className="text-left px-6 py-5">Title</th>

              <th className="text-left px-6 py-5">Company</th>

              <th className="text-left px-6 py-5">Location</th>

              <th className="text-left px-6 py-5">Status</th>

              <th className="text-center px-6 py-5">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredJobs.map((job) => (

              <tr
                key={job.id}
                className="border-t border-white/10 hover:bg-white/5"
              >

                <td className="px-6 py-5 font-semibold">
                  {job.title}
                </td>

                <td className="px-6 py-5">
                  {job.company}
                </td>

                <td className="px-6 py-5">
                  {job.location}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-500/20 px-4 py-1 text-green-400">
                    Active
                  </span>
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button className="rounded-lg bg-cyan-500 p-2 hover:bg-cyan-400">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-lg bg-yellow-500 p-2 hover:bg-yellow-400">
                      <Pencil size={18} />
                    </button>

                    <button className="rounded-lg bg-red-500 p-2 hover:bg-red-400">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}