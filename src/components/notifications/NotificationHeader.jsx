export default function NotificationHeader() {
  return (
    <div
      className="
      flex
      justify-between
      items-center
      mb-8
      "
    >
      <div>
        <h1
          className="
          text-5xl
          font-bold
          "
        >
          Notifications
        </h1>

        <p className="opacity-60 mt-2">
          Stay updated with platform activity
        </p>
      </div>

      <button
        className="
        px-5
        py-3
        rounded-xl
        border
        border-white/10
        "
      >
        Mark All Read
      </button>
    </div>
  );
}