"use client";

import { useSearchParams } from "next/navigation";
import BlogGrid from "./components/BlogGrid";
import BlogPagination from "./components/BlogPagination";
import { blogPosts } from "./data/posts";

const POSTS_PER_PAGE = 6;

export default function BlogListPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");

  const currentPage = Math.max(1, Number(pageParam) || 1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <section className="w-full">
        <img
          className="max-h-30 w-full object-cover"
          src="/images/illustrations/about-dots.jpg"
          alt=""
        />
      </section>

      <BlogGrid posts={pagePosts} />

      {totalPages > 1 && (
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
}