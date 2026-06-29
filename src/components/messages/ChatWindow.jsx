"use client";

export default function JobsFilter({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
}) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        gap-4
        mb-10
      "
    >
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/10
          w-full
        "
      />

      {/* CATEGORY FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/10
          w-full md:w-auto
        "
      >
        <option value="">All Job Types</option>

        <option value="Frontend">Frontend Developer</option>
        <option value="Backend">Backend Developer</option>
        <option value="Full Stack">Full Stack Developer</option>
        <option value="Mobile">Mobile App Developer</option>
        <option value="UI/UX">UI/UX Designer</option>
        <option value="Graphic Design">Graphic Designer</option>
        <option value="DevOps">DevOps Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Data Analyst">Data Analyst</option>
        <option value="AI/ML">AI / Machine Learning</option>
        <option value="Marketing">Digital Marketing</option>
        <option value="Sales">Sales</option>
        <option value="HR">HR / Human Resources</option>
        <option value="Internship">Internship</option>
        <option value="Freelance">Freelance</option>
      </select>

      {/* LOCATION FILTER (PAKISTAN FOCUSED) */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/10
          w-full md:w-auto
        "
      >
        <option value="">All Pakistan</option>

        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Faisalabad">Faisalabad</option>
        <option value="Multan">Multan</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Quetta">Quetta</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Sialkot">Sialkot</option>
        <option value="Remote">Remote (Pakistan)</option>
      </select>
    </div>
  );
}