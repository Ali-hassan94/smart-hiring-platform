export default function InterviewCalendar() {
  const days = Array.from(
    { length: 30 },
    (_, i) => i + 1
  );

  return (
    <div
      className="
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
        mb-6
        "
      >
        June 2026
      </h2>

      <div
        className="
        grid
        grid-cols-7
        gap-2
        "
      >
        {days.map((day) => (
          <button
            key={day}
            className="
            h-10
            rounded-lg
            bg-white/5
            hover:bg-white/10
            "
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}