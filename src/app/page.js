import Hero from "@/components/hero";
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="relative flex items-center flex-col mx-auto w-full">
      <Hero />
      <Projects />
    </div>
  );
}
