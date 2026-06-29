export default function QuestionsStep() {
  return (
    <div className="space-y-6">
      <div>
        <label>
          Years of Experience
        </label>

        <input
          className="
          w-full
          mt-2
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />
      </div>

      <div>
        <label>
          Expected Salary
        </label>

        <input
          className="
          w-full
          mt-2
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />
      </div>
    </div>
  );
}