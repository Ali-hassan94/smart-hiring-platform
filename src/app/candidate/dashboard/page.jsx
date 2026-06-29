import StatCard from "@/components/dashboard/StatCard";
import Notifications from "@/components/dashboard/Notifications";
import Timeline from "@/components/dashboard/Timeline";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-10">
        Welcome Back
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <StatCard
          title="Applications"
          value={18}
        />

        <StatCard
          title="Saved Jobs"
          value={42}
        />

        <StatCard
          title="Interviews"
          value={6}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <Notifications />

        <Timeline />
      </div>
    </>
  );
}