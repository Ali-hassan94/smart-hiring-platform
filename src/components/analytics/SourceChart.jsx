"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  hiringSources,
} from "@/data/analyticsData";

export default function SourceChart() {
  return (
    <div
      className="
      h-[400px]
      rounded-3xl
      border
      border-white/10
      p-6
      "
    >
      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        Candidate Sources
      </h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={hiringSources}
            dataKey="value"
            nameKey="name"
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}