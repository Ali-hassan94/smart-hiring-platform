const columns = {
  Applied: [
    "Ali Hassan",
    "Ahmed Khan",
  ],

  Interview: [
    "Sara Ali",
  ],

  Offer: [
    "Usman Tariq",
  ],
};

export default function PipelineBoard() {
  return (
    <div
      className="
      grid
      md:grid-cols-3
      gap-6
      "
    >
      {Object.entries(
        columns
      ).map(
        ([title, users]) => (
          <div
            key={title}
            className="
            rounded-3xl
            border
            border-white/10
            p-6
            "
          >
            <h2
              className="
              font-bold
              mb-6
              "
            >
              {title}
            </h2>

            {users.map((user) => (
              <div
                key={user}
                className="
                p-4
                rounded-xl
                bg-white/5
                mb-3
                "
              >
                {user}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}