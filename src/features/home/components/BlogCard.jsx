import Link from "next/link";

/**
 * Blog card – matches the reference:
 *  - white rounded card (radius ~46px)
 *  - image is inset 20px on the sides and "pops out" 57px above the card
 *  - 2-line navy title (clamped with …) and "by <author>" below
 */
export default function BlogCard({ blog }) {
  return (
    <Link
      href={blog.href}
      className="group relative block mt-[57px] bg-white rounded-[46px] pb-9 shadow-[0_6px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:shadow-[0_14px_44px_rgba(15,23,42,0.12)] hover:-translate-y-1"
    >
      {/* Image: sticks out above the card */}
      <div className="relative -mt-[57px] mx-5 aspect-[368/307] overflow-hidden rounded-[40px] bg-[#e6f6fb]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Text */}
      <div className="px-10 pt-8">
        <h3
          className="text-[24px] xl:text-[26px] font-bold leading-[29px] mb-3 line-clamp-2"
          style={{ color: "#1e1b7a" }}
        >
          {blog.title}
        </h3>

        <p className="text-[17px] leading-6" style={{ color: "#555" }}>
          by{" "}
          <span className="font-semibold" style={{ color: "#333" }}>
            {blog.author}
          </span>
        </p>
      </div>
    </Link>
  );
}