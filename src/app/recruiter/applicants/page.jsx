import { applicants } from "@/data/applicants";

export default function ApplicantsPage() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-10">
        Applicants
      </h1>

      <div className="grid gap-6">
        {applicants.map((item) => (
          <div
            key={item.id}
            className="
            p-6
            rounded-2xl
            border
            border-white/10
            "
          >
            <h3>{item.name}</h3>

            <p>{item.job}</p>
          </div>
        ))}
      </div>
    </>
  );
}