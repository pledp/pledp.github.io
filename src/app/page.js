import Image from "next/image";
import Hero from "@/components/hero";
import Projects from "@/components/projects"
import StaggeredGrid from "@/components/dot-grid-component";
import Footer from "@/components/footer";
import BlogWidget from "@/components/blog-widget";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="relative flex items-center flex-col mx-auto w-full">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 mx-auto">
        <Hero />
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-1/3">
          <BlogWidget posts={posts.slice(0, 2)} />
        </div>
      </div>
      <Projects />
      <Footer />
    </main>

  );
}
