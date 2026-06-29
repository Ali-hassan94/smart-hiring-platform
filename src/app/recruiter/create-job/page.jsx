export default function CreateJobPage() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-10">
        Create Job
      </h1>

      <form
        className="
        max-w-4xl
        space-y-6
        "
      >
        <input
          placeholder="Job Title"
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <input
          placeholder="Company Name"
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <textarea
          rows="8"
          placeholder="Job Description"
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <button
          className="
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          "
        >
          Publish Job
        </button>
      </form>
    </>
  );
}