const pages = [
  "Homepage",
  "Pricing",
  "About",
  "Terms",
  "Privacy",
];

export default function CMSPage() {
  return (
    <div>
      <h1
        className="
        text-5xl
        font-bold
        mb-8
        "
      >
        CMS Manager
      </h1>

      <div className="space-y-4">
        {pages.map((page) => (
          <div
            key={page}
            className="
            p-5
            rounded-2xl
            border
            border-white/10
            "
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}