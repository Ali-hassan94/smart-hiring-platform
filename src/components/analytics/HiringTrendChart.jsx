"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  hiringTrend,
} from "@/data/analyticsData";

export default function HiringTrendChart() {
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
        Hiring Trend
      </h2>

      <ResponsiveContainer>
        <LineChart
          data={hiringTrend}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            dataKey="hires"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}