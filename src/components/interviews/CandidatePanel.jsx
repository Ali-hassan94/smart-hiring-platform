export default function CandidatePanel({
  interview,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      "
    >
      <div
        className="
        w-20
        h-20
        rounded-full
        bg-white/10
        mb-6
        "
      />

      <h2 className="text-2xl font-bold">
        {interview.candidate}
      </h2>

      <p className="opacity-60">
        {interview.role}
      </p>

      <div className="mt-6 space-y-2">
        <p>
          Experience:
          {" "}
          4 Years
        </p>

        <p>
          Location:
          {" "}
          Lahore
        </p>

        <p>
          Skills:
          {" "}
          React, Next.js
        </p>
      </div>
    </div>
  );
}