"use client";

import { useState } from "react";
import { jobs } from "@/data/jobs";

import Navbar from "@/components/navbar/Navbar";
import JobCard from "@/components/cards/JobCard";
import JobsFilter from "@/components/jobs/JobsFilter";

export default function JobsPage() {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category
        ? job.category === category
        : true)
  );

  return (
    <>
      <Navbar />

      <section
        className="
        pt-40
        pb-20
        max-w-7xl
        mx-auto
        px-8
        "
      >
        <h1
          className="
          text-6xl
          font-bold
          mb-10
          "
        >
          Browse Jobs
        </h1>

        <JobsFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </section>
    </>
  );
}