"use client";

export default function ApplyProgress({
  step,
}) {
  const percent =
    (step / 5) * 100;

  return (
    <div className="mb-10">
      <div
        className="
        flex
        justify-between
        mb-4
        "
      >
        <span>
          Application Progress
        </span>

        <span>
          {percent}%
        </span>
      </div>

      <div
        className="
        h-3
        rounded-full
        bg-white/10
        "
      >
        <div
          className="
          h-full
          bg-white
          rounded-full
          transition-all
          duration-500
          "
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}