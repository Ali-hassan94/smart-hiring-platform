import { resumeData } from "@/data/resumeData";

export default function ResumePreview({
  template,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-10
      "
    >
      <h2
        className="
        text-4xl
        font-bold
        "
      >
        {resumeData.personal.name}
      </h2>

      <p className="text-gray-400">
        {resumeData.personal.title}
      </p>

      <div className="mt-10">
        <h3 className="font-bold mb-3">
          Summary
        </h3>

        <p>{resumeData.summary}</p>
      </div>

      <div className="mt-10">
        <h3 className="font-bold mb-3">
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map(
            (skill) => (
              <span
                key={skill}
                className="
                px-3
                py-2
                rounded-full
                bg-white/10
                "
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold mb-3">
          Experience
        </h3>

        {resumeData.experience.map(
          (item, index) => (
            <div key={index}>
              <h4>{item.role}</h4>

              <p>
                {item.company}
              </p>

              <span>
                {item.duration}
              </span>
            </div>
          )
        )}
      </div>

      <div className="mt-10">
        <h3 className="font-bold mb-3">
          Education
        </h3>

        {resumeData.education.map(
          (item, index) => (
            <div key={index}>
              <p>{item.degree}</p>
              <p>
                {item.institute}
              </p>
            </div>
          )
        )}
      </div>

      <div className="mt-10">
        <h3 className="font-bold mb-3">
          Projects
        </h3>

        {resumeData.projects.map(
          (item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>
                {item.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}