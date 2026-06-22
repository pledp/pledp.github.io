"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const PostList = ({ posts, currentSlug }) => (
  <ul className="flex flex-col gap-8">
    {posts.map((p) => {
      const isCurrent = p.slug === currentSlug;
      return (
        <li
          key={p.slug}
          className={`flex flex-col gap-1 border-l-2 pl-3 ${
            isCurrent ? "border-orange-200" : "border-transparent"
          }`}
        >
          <span className="text-sm opacity-70">{formatDate(p.date)}</span>
          {isCurrent ? (
            <span className="font-bold text-2xl text-orange-200">
              {p.title}
            </span>
          ) : (
            <Link href={`/blog/${p.slug}`}>
              <span className="font-bold text-2xl hover:text-orange-200">
                {p.title}
              </span>
            </Link>
          )}
        </li>
      );
    })}
  </ul>
);

export default function BlogSidebar({ posts, currentSlug }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-8 text-white flex flex-col gap-8">
      <Link
        href="/"
        className="font-bold text-xl leading-none hover:text-orange-200"
      >
        pled
      </Link>

      {posts.length > 0 && (
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-between text-sm font-bold tracking-wide text-orange-200 mb-4 lg:hidden"
          >
            all posts
            <ChevronDown
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

          <h2 className="hidden lg:block text-sm font-bold tracking-wide text-orange-200 mb-4">
            all posts
          </h2>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <PostList posts={posts} currentSlug={currentSlug} />
          </motion.div>

          <div className="hidden lg:block">
            <PostList posts={posts} currentSlug={currentSlug} />
          </div>
        </div>
      )}
    </aside>
  );
}
