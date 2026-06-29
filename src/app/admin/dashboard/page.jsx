import PageTransition from "@/components/animations/PageTransition";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="grid md:grid-cols-4 gap-8">
        <StatCard
          title="Users"
          value={1450}
        />

        <StatCard
          title="Recruiters"
          value={320}
        />

        <StatCard
          title="Jobs"
          value={980}
        />

        <StatCard
          title="Applications"
          value={5600}
        />
      </div>
    </PageTransition>
  );
}