import { getPostBySlug, getPostSlugs } from "@/lib/posts";

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

  return (
    <article className="text-white flex flex-col gap-8 mb-20 blog-content w-full">
      <div>
        <h1 className="text-4xl font-bold leading-none">{post.title}</h1>
        <p className="text-sm opacity-70 mt-2">{formatDate(post.date)}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
