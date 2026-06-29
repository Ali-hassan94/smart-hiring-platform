export default function CompanyReviews() {
  const reviews = [
    {
      name: "Ali Hassan",
      review:
        "Amazing workplace and growth opportunities.",
    },

    {
      name: "Sara Khan",
      review:
        "Supportive team and excellent culture.",
    },
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
      <h2 className="text-3xl font-bold mb-6">
        Employee Reviews
      </h2>

      <div className="space-y-4">
        {reviews.map((item) => (
          <div
            key={item.name}
            className="
            p-5
            rounded-2xl
            bg-white/5
            "
          >
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="opacity-70 mt-2">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}