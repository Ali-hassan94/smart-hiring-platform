const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "GSAP",
  "Framer Motion",
];

export default function SkillsSection() {
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
        Skills
      </h2>

      <div
        className="
        flex
        flex-wrap
        gap-4
        "
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="
            px-5
            py-3
            rounded-full
            bg-white/10
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}