import { Poppins } from "next/font/google";
import "highlight.js/styles/github-dark.css";
import "./globals.css";
import BlogSidebar from "@/components/blog-sidebar";
import { getAllPosts } from "@/lib/posts";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'pled',
  description: "just a simple portfolio",
};

export default async function RootLayout({ children }) {
  const posts = (await getAllPosts()).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: new Date(p.date).toISOString(),
  }));

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}>
        <main className="relative flex flex-col mx-auto w-full max-w-6xl px-5 pt-8 lg:flex-row lg:items-start lg:gap-16">
          <BlogSidebar posts={posts} />
          <div className="w-full lg:w-3/4">{children}</div>
        </main>
      </body>
    </html>
  );
}
