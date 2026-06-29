export default function Timeline() {
  const events = [
    "Application Submitted",
    "Resume Reviewed",
    "Interview Scheduled",
    "Interview Completed",
    "Offer Sent",
  ];

  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      "
    >
      <h2 className="text-2xl font-bold mb-8">
        Hiring Timeline
      </h2>

      {events.map((item, index) => (
        <div
          key={index}
          className="
          flex
          items-center
          gap-4
          mb-6
          "
        >
          <div
            className="
            w-4
            h-4
            rounded-full
            bg-white
            "
          />

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}