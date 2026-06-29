import { notifications } from "@/data/database";

export default function Notifications() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Notifications
      </h2>

      {notifications.map((item) => (
        <div
          key={item.id}
          className="
          border-b
          border-white/10
          py-4
          "
        >
          <p>{item.title}</p>

          <span className="text-gray-400 text-sm">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}