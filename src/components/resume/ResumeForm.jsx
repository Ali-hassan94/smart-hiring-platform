export default function ResumeForm() {
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
        Resume Information
      </h2>

      <div className="space-y-4">
        <input
          placeholder="Full Name"
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />

        <input
          placeholder="Professional Title"
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          border
          border-white/10
          "
        />

        <textarea
          rows="5"
          placeholder="Professional Summary"
          className="
          w-full
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