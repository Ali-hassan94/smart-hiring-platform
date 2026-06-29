"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    hires: 20,
  },
  {
    month: "Feb",
    hires: 40,
  },
  {
    month: "Mar",
    hires: 60,
  },
  {
    month: "Apr",
    hires: 90,
  },
];

export default function HiringChart() {
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
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="hires"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}