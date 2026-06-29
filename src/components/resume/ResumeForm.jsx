export default function ResumeForm() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-5
      sm:p-6
      lg:p-8
      "
    >
      <h2
        className="
        text-xl
        sm:text-2xl
        font-bold
        mb-6
        "
      >
        Resume Information
      </h2>

      <div className="space-y-4">

        <input
          placeholder="Full Name"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-3
          sm:p-4
          outline-none
          focus:border-cyan-400
          "
        />

        <input
          placeholder="Professional Title"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-3
          sm:p-4
          outline-none
          focus:border-cyan-400
          "
        />

        <textarea
          rows={6}
          placeholder="Professional Summary"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-3
          sm:p-4
          outline-none
          resize-none
          focus:border-cyan-400
          "
        />

      </div>
    </div>
  );
}