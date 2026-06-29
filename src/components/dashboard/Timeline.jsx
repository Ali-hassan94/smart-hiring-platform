"use client";

import {
  FileText,
  Search,
  CalendarCheck,
  Video,
  BadgeCheck,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Application Submitted",
    description: "Candidate applied for Frontend Developer position.",
    date: "12 Jun 2026 • 09:15 AM",
    status: "Completed",
    icon: FileText,
  },
  {
    id: 2,
    title: "Resume Reviewed",
    description: "Recruiter reviewed the uploaded resume.",
    date: "13 Jun 2026 • 11:30 AM",
    status: "Completed",
    icon: Search,
  },
  {
    id: 3,
    title: "Interview Scheduled",
    description: "Technical interview scheduled with hiring manager.",
    date: "15 Jun 2026 • 03:00 PM",
    status: "Upcoming",
    icon: CalendarCheck,
  },
  {
    id: 4,
    title: "Interview Completed",
    description: "Technical interview successfully completed.",
    date: "18 Jun 2026 • 02:00 PM",
    status: "Pending",
    icon: Video,
  },
  {
    id: 5,
    title: "Offer Sent",
    description: "Offer letter has been shared with the candidate.",
    date: "Waiting...",
    status: "Pending",
    icon: BadgeCheck,
  },
];

export default function Timeline() {
  return (
    <section
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      shadow-xl
      p-5
      sm:p-6
      lg:p-8
      "
    >
      <div className="mb-8">

        <h2
          className="
          text-2xl
          sm:text-3xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          bg-clip-text
          text-transparent
          "
        >
          Hiring Timeline
        </h2>

        <p className="text-gray-400 mt-2">
          Track every stage of the hiring process.
        </p>

      </div>

      <div className="relative">

        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <div
              key={event.id}
              className="relative flex gap-5 pb-10"
            >
              {/* Vertical Line */}

              {index !== events.length - 1 && (
                <div
                  className="
                  absolute
                  left-6
                  top-14
                  w-[2px]
                  h-full
                  bg-gradient-to-b
                  from-cyan-500
                  to-transparent
                  "
                />
              )}

              {/* Icon */}

              <div
                className="
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                shadow-lg
                "
              >
                <Icon size={20} />
              </div>

              {/* Card */}

              <div
                className="
                flex-1
                rounded-2xl
                border
                border-white/10
                bg-[#0d1729]/70
                p-5
                hover:border-cyan-400/50
                hover:shadow-lg
                transition-all
                "
              >
                <div
                  className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  "
                >
                  <h3 className="text-lg font-semibold">
                    {event.title}
                  </h3>

                  <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    w-fit
                    ${
                      event.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : event.status === "Upcoming"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                    }
                    `}
                  >
                    {event.status}
                  </span>
                </div>

                <p className="text-gray-400 mt-3 text-sm leading-6">
                  {event.description}
                </p>

                <p className="mt-4 text-xs text-cyan-400">
                  {event.date}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}