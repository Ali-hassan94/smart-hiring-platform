"use client";

import { useState } from "react";

import {
  interviews,
} from "@/data/interviews";

import InterviewCalendar from "@/components/interviews/InterviewCalendar";
import InterviewCard from "@/components/interviews/InterviewCard";
import InterviewDetails from "@/components/interviews/InterviewDetails";
import CandidatePanel from "@/components/interviews/CandidatePanel";
import TimelineView from "@/components/interviews/TimelineView";

export default function InterviewsPage() {
  const [activeId, setActiveId] =
    useState(1);

  const activeInterview =
    interviews.find(
      (item) =>
        item.id === activeId
    );

  return (
    <div>
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Interview Scheduler
      </h1>

      <div
        className="
        grid
        lg:grid-cols-[320px_1fr]
        gap-8
        "
      >
        <div className="space-y-6">
          <InterviewCalendar />

          {interviews.map(
            (interview) => (
              <InterviewCard
                key={interview.id}
                interview={
                  interview
                }
                active={
                  activeId ===
                  interview.id
                }
                onClick={() =>
                  setActiveId(
                    interview.id
                  )
                }
              />
            )
          )}
        </div>

        <div className="space-y-8">
          <InterviewDetails
            interview={
              activeInterview
            }
          />

          <CandidatePanel
            interview={
              activeInterview
            }
          />

          <TimelineView />
        </div>
      </div>
    </div>
  );
}