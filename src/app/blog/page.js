import { Suspense } from "react";
import BlogListPage from "../../features/blog/BlogListPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading…</div>}>
      <BlogListPage />
    </Suspense>
  );
}