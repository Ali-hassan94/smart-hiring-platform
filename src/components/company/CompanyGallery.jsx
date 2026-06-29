export default function CompanyGallery({
  company,
}) {
  return (
    <div
      className="
      grid
      md:grid-cols-3
      gap-6
      mb-10
      "
    >
      {company.gallery.map(
        (image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="
            h-64
            w-full
            object-cover
            rounded-3xl
            hover:scale-105
            transition-all
            duration-500
            "
          />
        )
      )}
    </div>
  );
}