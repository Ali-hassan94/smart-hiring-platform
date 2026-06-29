// import {
//   companies,
// } from "@/data/companies";

// import CompanyHero from "@/components/company/CompanyHero";

// import CompanyStats from "@/components/company/CompanyStats";

// import CompanyAbout from "@/components/company/CompanyAbout";

// import CompanyBenefits from "@/components/company/CompanyBenefits";

// import CompanyJobs from "@/components/company/CompanyJobs";

// import CompanyGallery from "@/components/company/CompanyGallery";

// import CompanyReviews from "@/components/company/CompanyReviews";

// export default function CompanyPage({
//   params,
// }) {
//   const company =
//     companies.find(
//       (c) =>
//         c.slug === params.slug
//     );

//   if (!company) {
//     return (
//       <div>
//         Company not found
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-10">
//       <CompanyHero
//         company={company}
//       />

//       <CompanyStats
//         company={company}
//       />

//       <CompanyAbout
//         company={company}
//       />

//       <CompanyBenefits
//         company={company}
//       />

//       <CompanyJobs
//         company={company}
//       />

//       <CompanyGallery
//         company={company}
//       />

//       <CompanyReviews />
//     </div>
//   );
// }

import { companies } from "@/data/companies";

import CompanyHero from "@/components/company/CompanyHero";
import CompanyStats from "@/components/company/CompanyStats";
import CompanyAbout from "@/components/company/CompanyAbout";
import CompanyBenefits from "@/components/company/CompanyBenefits";
import CompanyJobs from "@/components/company/CompanyJobs";
import CompanyGallery from "@/components/company/CompanyGallery";
import CompanyReviews from "@/components/company/CompanyReviews";

export default async function CompanyPage({ params }) {

  const { slug } = await params;

  const company = companies.find(
    (c) => c.slug === slug
  );

  if (!company) {
    return <h1 className="text-4xl p-20">Company not found : {slug}</h1>;
  }

  return (
    <div className="space-y-10">
      <CompanyHero company={company} />
      <CompanyStats company={company} />
      <CompanyAbout company={company} />
      <CompanyBenefits company={company} />
      <CompanyJobs company={company} />
      <CompanyGallery company={company} />
      <CompanyReviews />
    </div>
  );
}