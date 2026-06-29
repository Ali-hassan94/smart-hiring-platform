export default function CompanyAbout({
  company,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      mb-10
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-4
        "
      >
        About Company
      </h2>

      <p className="opacity-80">
        {company.about}
      </p>
    </div>
  );
}