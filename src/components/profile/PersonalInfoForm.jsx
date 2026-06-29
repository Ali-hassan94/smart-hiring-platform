"use client";

export default function PersonalInfoForm() {
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
      <h2
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Personal Information
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        gap-6
        "
      >
        <input
          placeholder="Full Name"
          className="
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />

        <input
          placeholder="Email"
          className="
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />

        <input
          placeholder="Phone"
          className="
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />

        <input
          placeholder="Location"
          className="
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />
      </div>
    </div>
  );
}