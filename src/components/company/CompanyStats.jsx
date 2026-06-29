export default function CompanyStats({
  company,
}) {
  const stats = [
    {
      label: "Employees",
      value: company.employees,
    },

    {
      label: "Founded",
      value: company.founded,
    },

    {
      label: "Rating",
      value: company.rating,
    },

    {
      label: "Open Jobs",
      value: company.openJobs,
    },
  ];

  return (
    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      mb-10
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
          rounded-2xl
          border
          border-white/10
          p-6
          "
        >
          <p className="opacity-60">
            {item.label}
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-2
            "
          >
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}