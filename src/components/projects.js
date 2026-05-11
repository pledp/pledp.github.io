import React from "react";
import Image from "next/image";
import Widgets from "@/components/widgets";
import FadeInSection from "@/components/scroll-effect-component";

const Projects = () => {
  return (
    <section id="projects-section" className=" w-full z-10">
      <div
        className="flex flex-col p-5 pt-5 items-center justify-center gap-24 w-full mx-auto
            lg:pt-0 lg:flex-row lg:items-start lg:p-5"
      >
        <Widgets />
      </div>
    </section>
  );
};

export default Projects;
