import Link from "next/link";

/**
 * Card: image on top (large radius), then 2-line navy title, then "by <author>".
 */
export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* Image */}
      <div className="overflow-hidden rounded-[40px] aspect-[295/246] bg-[#e6f6fb]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Title + author */}
      <div className="px-[17px] pt-[30px]">
        <h3
          className="text-[20px] xl:text-[21px] font-bold leading-[23px] line-clamp-2 min-h-[46px] mb-[10px] transition-colors duration-300 group-hover:text-[#8a2490]"
          style={{ color: "#1e1b7a" }}
        >
          {post.title}
        </h3>

        <p className="text-[14px] leading-5" style={{ color: "#555" }}>
          by{" "}
          <span className="font-semibold" style={{ color: "#333" }}>
            {post.author || "Software Flux"}
          </span>
        </p>
      </div>
    </Link>
  );
}