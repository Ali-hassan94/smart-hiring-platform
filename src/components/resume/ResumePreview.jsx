import { resumeData } from "@/data/resumeData";

export default function ResumePreview() {
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
      xl:p-10
      "
    >
      <h2
        className="
        text-2xl
        sm:text-3xl
        lg:text-4xl
        font-bold
        break-words
        "
      >
        {resumeData.personal.name}
      </h2>

      <p className="mt-2 text-sm sm:text-base text-gray-400">
        {resumeData.personal.title}
      </p>

      <section className="mt-8">
        <h3 className="mb-3 font-bold">Summary</h3>
        <p className="leading-7 text-gray-300">
          {resumeData.summary}
        </p>
      </section>

      <section className="mt-8">
        <h3 className="mb-3 font-bold">Skills</h3>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <span
              key={skill}
              className="
              rounded-full
              bg-white/10
              px-3
              py-2
              text-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="mb-3 font-bold">
          Experience
        </h3>

        <div className="space-y-4">
          {resumeData.experience.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold">
                {item.role}
              </h4>

              <p className="text-gray-400">
                {item.company}
              </p>

              <span className="text-sm text-gray-500">
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="mb-3 font-bold">
          Education
        </h3>

        <div className="space-y-4">
          {resumeData.education.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">
                {item.degree}
              </p>

              <p className="text-gray-400">
                {item.institute}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="mb-3 font-bold">
          Projects
        </h3>

        <div className="space-y-4">
          {resumeData.projects.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">
                {item.title}
              </p>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}