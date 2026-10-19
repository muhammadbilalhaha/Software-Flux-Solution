import Container from "../../../components/ui/Container";
import BlogCard from "./BlogCard";
import { blogPosts } from "../data/posts";

export default function BlogGrid({ posts = blogPosts }) {
  return (
    <section className="bg-white pt-12 pb-14 lg:pb-[60px]">
      <Container>
        {posts.length === 0 ? (
          <div className="text-center py-20 text-brand-gray">
            No posts found.
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-14 gap-y-12 lg:gap-y-[70px]">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}