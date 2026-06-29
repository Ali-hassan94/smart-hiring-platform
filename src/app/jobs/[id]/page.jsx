import { jobs } from "@/data/jobs";
import Navbar from "@/components/navbar/Navbar";

export default async function JobDetails({
  params
}) {
  const job = jobs.find(
    (item) =>
      item.id === Number(params.id)
  );

  if (!job) {
    return (
      <div className="p-20">
        Job Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section
        className="
        max-w-5xl
        mx-auto
        pt-40
        px-8
        "
      >
        <h1 className="text-6xl font-bold">
          {job.title}
        </h1>

        <p className="mt-6 text-xl">
          {job.company}
        </p>

        <p className="mt-4">
          {job.location}
        </p>

        <p className="mt-4">
          {job.salary}
        </p>

        <p className="mt-10 text-lg">
          {job.description}
        </p>

        <button
          className="
          mt-12
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          "
        >
          Apply Now
        </button>
      </section>
    </>
  );
}