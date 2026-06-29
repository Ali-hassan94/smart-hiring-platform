export default function CompanyBenefits({
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
      <h2 className="text-3xl font-bold mb-6">
        Benefits & Perks
      </h2>

      <div className="flex flex-wrap gap-4">
        {company.benefits.map(
          (benefit) => (
            <div
              key={benefit}
              className="
              px-5
              py-3
              rounded-full
              bg-white/10
              "
            >
              {benefit}
            </div>
          )
        )}
      </div>
    </div>
  );
}