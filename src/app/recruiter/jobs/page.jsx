import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-10">
        Manage Jobs
      </h1>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}