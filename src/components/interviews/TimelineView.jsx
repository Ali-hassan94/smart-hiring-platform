export default function TimelineView() {
  const events = [
    "Application Received",
    "Resume Reviewed",
    "Interview Scheduled",
  ];

  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        Candidate Timeline
      </h2>

      <div className="space-y-6">
        {events.map(
          (event) => (
            <div
              key={event}
              className="flex gap-4"
            >
              <div
                className="
                w-3
                h-3
                rounded-full
                bg-white
                mt-2
                "
              />

              <p>{event}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}