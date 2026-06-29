"use client";

export default function JobsFilter({
  search,
  setSearch,
  category,
  setCategory
}) {
  return (
    <div
      className="
      flex
      flex-col
      md:flex-row
      gap-4
      mb-12
      "
    >
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
        px-4
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="
        px-4
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      >
        <option value="">
          All Categories
        </option>

        <option value="Frontend">
          Frontend
        </option>

        <option value="Backend">
          Backend
        </option>

        <option value="Full Stack">
          Full Stack
        </option>

        <option value="Design">
          Design
        </option>
      </select>
    </div>
  );
}