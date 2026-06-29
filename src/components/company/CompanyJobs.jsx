export default function CompanyJobs({
  company,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      mb-10
      "
    >
      <h2 className="text-3xl font-bold mb-6">
        Open Positions
      </h2>

      <div className="space-y-4">
        {company.jobs.map((job) => (
          <div
            key={job}
            className="
            p-5
            rounded-2xl
            bg-white/5
            "
          >
            {job}
          </div>
        ))}
      </div>
    </div>
  );
}