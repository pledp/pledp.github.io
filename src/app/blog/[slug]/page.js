import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";
import BlogSidebar from "@/components/blog-sidebar";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = (await getAllPosts()).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: new Date(p.date).toISOString(),
  }));

  return (
    <main className="relative flex flex-col mx-auto w-full max-w-6xl px-5 pt-8">
      <div className="w-full flex flex-col gap-12 lg:flex-row lg:items-baseline lg:gap-16">
        <BlogSidebar posts={allPosts} currentSlug={slug} />

        <article className="text-white flex flex-col gap-8 mb-20 blog-content w-full lg:w-3/4">
          <div>
            <h1 className="text-4xl font-bold leading-none">{post.title}</h1>
            <p className="text-sm opacity-70 mt-2">{formatDate(post.date)}</p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </main>
  );
}
