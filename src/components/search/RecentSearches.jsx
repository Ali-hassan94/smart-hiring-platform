export default function RecentSearches() {
  const items = [
    "React Developer",
    "UI Designer",
    "Google",
  ];

  return (
    <div className="mt-6">
      <h3
        className="
        text-sm
        uppercase
        opacity-60
        mb-4
        "
      >
        Recent Searches
      </h3>

      <div className="flex gap-3 flex-wrap">
        {items.map((item) => (
          <div
            key={item}
            className="
            px-4
            py-2
            rounded-full
            bg-white/10
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}