"use client";

import {
  Calendar,
  Clock,
  User,
  Users,
  BriefcaseBusiness,
  Building2,
  Video,
  FileText,
  Download,
  Globe,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function InterviewDetails({
  interview,
}) {
  return (
    <div
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
      {/* Header */}

      <div
        className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        "
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Interview Details
          </h2>

          <p className="text-gray-400 mt-2">
            Complete interview schedule and candidate information.
          </p>
        </div>

        <StatusBadge status={interview.status} />
      </div>

      {/* Details */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        "
      >
        <Info
          icon={<User size={20} />}
          label="Candidate"
          value={interview.candidate}
        />

        <Info
          icon={<BriefcaseBusiness size={20} />}
          label="Position"
          value={interview.role}
        />

        <Info
          icon={<Users size={20} />}
          label="Interviewer"
          value={interview.interviewer}
        />

        <Info
          icon={<Building2 size={20} />}
          label="Company"
          value={interview.company || "HireFlow AI"}
        />

        <Info
          icon={<Calendar size={20} />}
          label="Interview Date"
          value={interview.date}
        />

        <Info
          icon={<Clock size={20} />}
          label="Time"
          value={interview.time}
        />

        <Info
          icon={<Clock size={20} />}
          label="Duration"
          value={interview.duration || "60 Minutes"}
        />

        <Info
          icon={<Video size={20} />}
          label="Round"
          value={interview.round || "Technical Round"}
        />

        <Info
          icon={<Globe size={20} />}
          label="Mode"
          value={interview.mode || "Online"}
        />

        <Info
          icon={<Video size={20} />}
          label="Platform"
          value={interview.platform || "Google Meet"}
        />
      </div>

      {/* Notes */}

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
        "
      >
        <div className="flex items-center gap-3 mb-3">
          <FileText className="text-cyan-400" />
          <h3 className="font-semibold text-lg">
            Interview Notes
          </h3>
        </div>

        <p className="text-gray-400 leading-7">
          {interview.notes ||
            "Candidate should be prepared to discuss React.js, Next.js, API integration, state management, performance optimization, responsive UI development, and system design. Coding assessment will be conducted during the session."}
        </p>
      </div>

      {/* Buttons */}

      <div
        className="
        mt-8
        flex
        flex-col
        sm:flex-row
        gap-4
        "
      >
        <a
          href={interview.meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex-1
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-6
          py-4
          font-semibold
          hover:scale-[1.02]
          transition
          "
        >
          <Video size={20} />
          Join Meeting
        </a>

        <button
          className="
          flex-1
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-cyan-500/30
          bg-white/5
          px-6
          py-4
          font-semibold
          hover:bg-cyan-500/10
          transition
          "
        >
          <Download size={20} />
          Download Resume
        </button>
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div
      className="
      flex
      items-start
      gap-4
      rounded-2xl
      border
      border-white/10
      bg-black/20
      p-4
      "
    >
      <div className="text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {label}
        </p>

        <p className="font-semibold mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}