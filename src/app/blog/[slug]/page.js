import Link from "next/link";
import { blogPosts } from "../../../features/blog/data/posts";

function BackButton() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full border-[1.5px] border-[#8a2490] bg-white text-[14px] font-bold text-[#1e1b7a] transition-colors duration-200 hover:bg-[#8a2490] hover:text-white group"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-x-1"
      >
        <path d="M19 12H5M11 18l-6-6 6-6" />
      </svg>
      Back to Blogs
    </Link>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Post Not Found</h1>
        <BackButton />
      </section>
    );
  }

  return (
    <>
      <section className="w-full">
        <img
          className="max-h-30 w-full object-cover"
          src="/images/illustrations/about-dots.jpg"
          alt=""
        />
      </section>

      <article className="pt-16 lg:pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back button */}
          <div className="mb-10">
            <BackButton />
          </div>

          <p className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-navy leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-brand-gray mb-8">
            by {post.author} · {post.date}
          </p>

          <img
            src={post.image}
            alt={post.title}
            className="rounded-2xl w-full mb-10"
          />

          <p className="text-brand-gray leading-relaxed">{post.excerpt}</p>

          {/* Full content will come later — this is a stub */}

        </div>
      </article>
    </>
  );
}