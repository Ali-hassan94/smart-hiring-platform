"use client";

export default function FeatureCard({
  title,
  description
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:scale-105
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,.15),transparent)]
        "
      />

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {description}
      </p>
    </div>
  );
}