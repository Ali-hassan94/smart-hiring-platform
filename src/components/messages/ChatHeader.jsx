export default function ChatHeader({
  user,
}) {
  return (
    <div
      className="
      border-b
      border-white/10
      p-5
      flex
      justify-between
      "
    >
      <div>
        <h2 className="font-bold">
          {user.name}
        </h2>

        <p className="opacity-60">
          {user.role}
        </p>
      </div>

      <button
        className="
        px-4
        py-2
        rounded-xl
        border
        border-white/10
        "
      >
        View Profile
      </button>
    </div>
  );
}