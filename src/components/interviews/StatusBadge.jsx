export default function StatusBadge({ status = "Unknown" }) {
  const normalized = status?.toLowerCase();

  const styles = {
    scheduled: "bg-green-500/20 text-green-400",
    pending: "bg-yellow-500/20 text-yellow-400",
    completed: "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-xs sm:text-sm
        font-medium
        capitalize
        ${styles[normalized] || "bg-white/10 text-white/70"}
      `}
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}