return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">

    {/* Header */}

    <div className="mb-10">

      <h1 className="text-3xl sm:text-5xl font-black text-white">
        Resume Builder
      </h1>

      <p className="mt-3 text-gray-400 text-sm sm:text-base">
        Complete your profile to increase recruiter visibility and job matches.
      </p>

    </div>

    {/* Main Card */}

    <div
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-gradient-to-br
      from-[#071221]
      via-[#08152d]
      to-[#0b1834]
      backdrop-blur-2xl
      shadow-[0_25px_80px_rgba(0,255,255,.08)]
      p-5
      sm:p-8
      lg:p-10
      "
    >

      {/* Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          placeholder="Full Name"
          value={candidate.fullName}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              fullName:e.target.value
            })
          }
          className="
          w-full
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
          text-white
          placeholder:text-gray-500
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/40
          outline-none
          transition
          "
        />

        <input
          placeholder="Email Address"
          value={candidate.email}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              email:e.target.value
            })
          }
          className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-cyan-400 outline-none"
        />

        <input
          placeholder="Phone Number"
          value={candidate.phone}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              phone:e.target.value
            })
          }
          className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-cyan-400 outline-none"
        />

        <input
          placeholder="Skills (React, Next.js, .NET...)"
          value={candidate.skills}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              skills:e.target.value
            })
          }
          className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-cyan-400 outline-none"
        />

        <textarea
          rows={6}
          placeholder="Professional Experience"
          value={candidate.experience}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              experience:e.target.value
            })
          }
          className="
          md:col-span-2
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
          text-white
          resize-none
          placeholder:text-gray-500
          focus:border-cyan-400
          outline-none
          "
        />

        <textarea
          rows={6}
          placeholder="Education"
          value={candidate.education}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              education:e.target.value
            })
          }
          className="
          md:col-span-2
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
          text-white
          resize-none
          placeholder:text-gray-500
          focus:border-cyan-400
          outline-none
          "
        />

        <input
          placeholder="LinkedIn URL"
          value={candidate.linkedin}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              linkedin:e.target.value
            })
          }
          className="rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-cyan-400 outline-none"
        />

        <input
          placeholder="GitHub URL"
          value={candidate.github}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              github:e.target.value
            })
          }
          className="rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-cyan-400 outline-none"
        />

        <input
          placeholder="Portfolio Website"
          value={candidate.portfolio}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              portfolio:e.target.value
            })
          }
          className="
          md:col-span-2
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
          text-white
          placeholder:text-gray-500
          focus:border-cyan-400
          outline-none
          "
        />

      </div>

      {/* Upload */}

      <div
        className="
        mt-10
        rounded-3xl
        border-2
        border-dashed
        border-cyan-400/30
        bg-gradient-to-r
        from-cyan-500/10
        via-blue-500/10
        to-purple-500/10
        p-8
        sm:p-12
        text-center
        hover:border-cyan-400
        transition
        "
      >

        <div className="text-6xl mb-4">
          📄
        </div>

        <h2 className="text-2xl font-bold text-white">
          Upload Resume
        </h2>

        <p className="text-gray-400 mt-2">
          PDF • DOC • DOCX • Max 5MB
        </p>

        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={uploadResume}
        />

        <label
          htmlFor="resume"
          className="
          mt-8
          inline-flex
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-4
          font-bold
          text-white
          cursor-pointer
          hover:scale-105
          transition
          shadow-lg
          shadow-cyan-500/30
          "
        >
          Choose Resume
        </label>

        {resume && (
          <div className="mt-6">

            <p className="text-green-400 font-semibold break-all">
              ✅ {resume}
            </p>

          </div>
        )}

      </div>

      {/* Button */}

      <div className="mt-10 flex justify-center md:justify-end">

        <button
          onClick={saveResume}
          className="
          w-full
          md:w-auto
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          via-blue-600
          to-indigo-600
          px-10
          py-4
          font-bold
          text-white
          hover:scale-105
          transition
          shadow-xl
          shadow-cyan-500/30
          "
        >
          Save Resume
        </button>

      </div>

    </div>

  </div>
);