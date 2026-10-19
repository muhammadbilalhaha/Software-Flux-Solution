import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blogs";

/**
 * White polka-dot pattern (two staggered layers of big soft white dots)
 * on a warm off-white background – like the reference.
 */
const dotsBg = {
  backgroundColor: "#f7f6f3",
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.95) 6px, transparent 6.5px), radial-gradient(circle, rgba(255,255,255,0.95) 6px, transparent 6.5px)",
  backgroundSize: "104px 104px",
  backgroundPosition: "0 0, 52px 52px",
};

export default function LatestBlogs() {
  return (
    <section
      className="relative py-20 lg:pt-[100px] lg:pb-[120px] overflow-hidden"
      style={dotsBg}
    >
      <Container className="relative z-10">
        {/* Heading */}
        <h2
          className="text-center text-[34px] sm:text-[38px] lg:text-[40px] font-extrabold tracking-[-0.01em] mb-6 lg:mb-[38px]"
          style={{ color: "#1e1b7a" }}
        >
          Our Latest Blogs
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-6 mb-12 lg:mb-[50px]">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center">
          <Button
            href="/blog"
            variant="primary"
            className="!h-[55px] !min-w-[201px] !px-8 !py-0 !text-[17px] !font-bold !text-white !bg-gradient-to-r !from-[#b948c4] !to-[#85208f]"
          >
            View All Blogs
          </Button>
        </div>
      </Container>
    </section>
  );
}