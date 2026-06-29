import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-10">
        Recruiter Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        <StatCard
          title="Active Jobs"
          value={18}
        />

        <StatCard
          title="Applicants"
          value={145}
        />

        <StatCard
          title="Interviews"
          value={24}
        />

        <StatCard
          title="Hired"
          value={9}
        />
      </div>
    </>
  );
}