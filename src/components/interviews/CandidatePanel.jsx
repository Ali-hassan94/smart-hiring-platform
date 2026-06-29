"use client";

import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Globe,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function CandidatePanel({ interview }) {
  const skills =
    interview.skills || [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      ".NET Core",
      "SQL Server",
      "Git",
      "REST API",
    ];

  return (
    <div
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      p-5
      sm:p-6
      lg:p-8
      shadow-xl
      "
    >
      {/* Profile */}

      <div className="flex flex-col sm:flex-row gap-5 items-center">

        <div
          className="
          h-24
          w-24
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          text-3xl
          font-bold
          "
        >
          {interview.candidate?.charAt(0)}
        </div>

        <div className="text-center sm:text-left">

          <h2 className="text-2xl font-bold">
            {interview.candidate}
          </h2>

          <p className="text-cyan-400 mt-1">
            {interview.role}
          </p>

          <span
            className="
            mt-3
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-green-500/20
            px-3
            py-1
            text-sm
            text-green-400
            "
          >
            <CheckCircle size={16} />
            Available for Hiring
          </span>

        </div>

      </div>

      {/* Details */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-4
        "
      >
        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="text-cyan-400" />
          <span>4+ Years Experience</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-cyan-400" />
          <span>Lahore, Pakistan</span>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap className="text-cyan-400" />
          <span>BS Computer Science</span>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign className="text-cyan-400" />
          <span>$2,000 / Month</span>
        </div>

        <div className="flex items-center gap-3 sm:col-span-2">
          <Globe className="text-cyan-400" />
          <span>English • Urdu</span>
        </div>
      </div>

      {/* Skills */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Technical Skills
        </h3>

        <div className="flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              hover:bg-cyan-500
              hover:text-white
              transition-all
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* About */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-3">
          Professional Summary
        </h3>

        <p className="text-gray-400 leading-7">
          Passionate Frontend Developer with experience building
          scalable web applications using React.js, Next.js,
          Tailwind CSS, .NET Core APIs, SQL Server and modern UI/UX
          practices. Strong understanding of performance optimization,
          responsive design, REST APIs, authentication and deployment.
        </p>

      </div>
    </div>
  );
}