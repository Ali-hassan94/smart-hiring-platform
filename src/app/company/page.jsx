import Link from "next/link";
import { companies } from "@/data/companies";

export default function CompanyListingPage() {
  return (
    <main className="max-w-7xl mx-auto py-20 px-8">

      <h1 className="text-5xl font-bold mb-10">
        Companies
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {companies.map((company) => (
          <Link
            key={company.slug}
            href={`/company/${company.slug}`}
            className="rounded-2xl border border-white/10 p-6 hover:border-cyan-500 transition"
          >
            <h2 className="text-2xl font-bold">
              {company.name}
            </h2>

            <p className="mt-3">
              {company.location}
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}