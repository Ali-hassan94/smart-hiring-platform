export default function StatusBadge({
  status,
}) {
  const styles = {
    Scheduled:
      "bg-green-500/20 text-green-400",

    Pending:
      "bg-yellow-500/20 text-yellow-400",

    Completed:
      "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`
      px-3
      py-1
      rounded-full
      text-sm

      ${
        styles[status] ||
        "bg-white/10"
      }
      `}
    >
      {status}
    </span>
  );
}