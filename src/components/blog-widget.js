import React from "react";
import Link from "next/link";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogWidget = ({ posts = [] }) => {
  if (posts.length === 0) return null;

  return (
    <section
      id="blog-section"
      className="text-white flex flex-col justify-center gap-12 mt-10 projects-widget w-full"
    >
      <h1 className="text-3xl font-bold">
        recent <span className="text-orange-200">writing</span>
      </h1>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-2xl p-6 flex flex-col gap-4 h-full"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm opacity-70">
                {formatDate(post.date)}
              </span>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-bold text-2xl hover:text-orange-200">
                  {post.title}
                </h2>
              </Link>
            </div>
            <p>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="font-bold text-orange-200 hover:text-orange-300 mt-auto"
            >
              read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogWidget;
