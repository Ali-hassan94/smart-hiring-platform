export default function NotificationFilters({
  active,
  setActive,
}) {
  const filters = [
    "all",
    "application",
    "message",
    "interview",
    "offer",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() =>
            setActive(filter)
          }
          className={`
          px-4
          py-2
          rounded-full

          ${
            active === filter
              ? "bg-white text-black"
              : "bg-white/10"
          }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}