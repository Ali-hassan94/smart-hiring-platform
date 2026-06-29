export default function MessageInput() {
  return (
    <div
      className="
      border-t
      border-white/10
      p-4
      flex
      gap-3
      "
    >
      <input
        placeholder="Type message..."
        className="
        flex-1
        p-4
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      />

      <button
        className="
        px-6
        rounded-xl
        bg-white
        text-black
        "
      >
        Send
      </button>
    </div>
  );
}