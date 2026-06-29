import PageTransition from "@/components/animations/PageTransition";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <PageTransition>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="
            rounded-2xl
            border
            border-white/10
            p-6
            "
          >
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}