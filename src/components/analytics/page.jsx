import KpiCard from "@/components/analytics/KpiCard";

import HiringTrendChart from "@/components/analytics/HiringTrendChart";

import SourceChart from "@/components/analytics/SourceChart";

import HiringFunnel from "@/components/analytics/HiringFunnel";

import PipelineBoard from "@/components/analytics/PipelineBoard";

export default function AnalyticsPage() {
  return (
    <div>
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Recruiter Analytics
      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        mb-10
        "
      >
        <KpiCard
          title="Applications"
          value="420"
          growth="+18%"
        />

        <KpiCard
          title="Interviews"
          value="90"
          growth="+12%"
        />

        <KpiCard
          title="Offers"
          value="30"
          growth="+8%"
        />

        <KpiCard
          title="Hires"
          value="15"
          growth="+5%"
        />
      </div>

      <div
        className="
        grid
        lg:grid-cols-2
        gap-8
        mb-10
        "
      >
        <HiringTrendChart />

        <SourceChart />
      </div>

      <div className="mb-10">
        <HiringFunnel />
      </div>

      <PipelineBoard />
    </div>
  );
}