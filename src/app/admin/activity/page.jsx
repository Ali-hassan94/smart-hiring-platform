const logs = [
  {
    action:
      "Job Created",
    user:
      "Recruiter",
  },

  {
    action:
      "Application Submitted",
    user:
      "Candidate",
  },

  {
    action:
      "User Deleted",
    user: "Admin",
  },
];

export default function ActivityPage() {
  return (
    <div>
      <h1
        className="
        text-5xl
        font-bold
        mb-8
        "
      >
        Activity Logs
      </h1>

      <div className="space-y-4">
        {logs.map(
          (log, index) => (
            <div
              key={index}
              className="
              p-5
              border
              border-white/10
              rounded-2xl
              "
            >
              {log.action}
              {" - "}
              {log.user}
            </div>
          )
        )}
      </div>
    </div>
  );
}