
import React from "react";
import Image from "next/image";
import FadeInSection from "./scroll-effect-component";
import Project from "./project-component";
import Expandable from "./expandable-component";
import LightBox from "./lightbox";
import ExpandableReverse from "./expandable-component-top";

const Widgets = () => {
  return (
    <section className="text-white flex flex-col justify-center gap-12 mt-10 projects-widget w-full">

        <FadeInSection className="h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10"></FadeInSection>

        <FadeInSection>
          <h1 className="text-3xl font-bold">
            what i've <span className="text-orange-200">recently</span> been
            focusing on
          </h1>
        </FadeInSection>

        <Project className="bg-orange-200 h-96 rounded-2xl mt-5 p-6 flex flex-col gap-16 pattern-doodle move-on-hover">
          <div className="items-end text-right flex flex-col gap-5">
            <h1 className="font-bold text-6xl">mögl</h1>
            <p>a work-in-progress game framework/engine.</p>
          </div>
          <div className="items-end mt-auto">
            <p>
              written in <span className="font-bold">Rust</span> with winit and
              wgpu. written mostly as a Rust-learning-project. trying to implement
              cool modular features in a simple fashion.
            </p>
          </div>
          <a href="https://github.com/pledp/moegl">
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="/images/github-logo-white.svg"
              width="50"
              height="50"
              alt="Github logo"
            ></Image>
          </a>
      </Project>
      <FadeInSection className="h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10"></FadeInSection>

      <FadeInSection className="fade-delay">
        <h1 className="text-3xl font-bold">other stuff i've done</h1>
      </FadeInSection>

      <ExpandableReverse>
        <div className="flex flex-col justify-center gap-12 projects-widget">
          <div className="rounded-2xl p-6 flex flex-col  bg-orange-200 gap-12 move-on-hover h-full">
            <div className="flex flex-row gap-5 w-full">
              <div className="flex-row flex gap-6 w-full items-center">
                <a href="https://github.com/pledp/moegl">
                  <Image
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/images/github-logo-white.svg"
                    width="50"
                    height="50"
                    alt="Github logo"
                  ></Image>
                </a>
                <h1 className="font-bold text-6xl ml-auto">mögl</h1>
              </div>
            </div>
            <div className="items-end mt-auto">
              <p>
                Supposed-to-be game framework written in <span className="font-bold">Rust</span> with winit and
                wgpu. Rust-learning-project.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 flex flex-col pattern-zig text-white gap-12 move-on-hover h-full">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center">
                <h1 className="font-bold text-6xl">smeagl</h1>
                <a className="w-14 ml-auto" href="https://github.com/pledp/pledGL">
                  <Image
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/images/github-logo-white.svg"
                    width="50"
                    height="50"
                    alt="Github logo"
                  ></Image>
                </a>
              </div>
              <p>
                a (very) minimal game framework written in{" "}
                <span className="font-bold">C++</span>.
              </p>
            </div>
            <p>
              C++ learning project, built with SDL2 and OpenGL graphics. Implements basic
              graphics, such as quads and triangles with textures and shaders.
            </p>
          </div>

          <div className="rounded-2xl bg-white text-black move-on-hover h-full">
            <div className="p-6 flex flex-col gap-8">
              <div className="flex flex-row gap-5 w-full">
                <div className="flex-row flex gap-6 w-full items-center">
                  <a className="w-14" href="https://github.com/pledp/pLdev">
                    <Image
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/github-logo.svg"
                      width="50"
                      height="50"
                      alt="Github logo"
                    ></Image>
                  </a>
                  <h1 className="font-bold text-6xl ml-auto">robot.r</h1>
                </div>
              </div>

              <p>
                written in <span className="font-bold">C#</span> with MonoGame. your
                goal is to complete challenges with a built-in custom programming
                language written on-top of C#.
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-14 px-6">
              <p>
                the game consists of 9 programming challenges, which vary from
                assigning variables, to building loops.
              </p>
              <LightBox
                slides={[
                  { src: "/images/robotr-1.png" },
                  { src: "/images/robotr-2.png" },
                ]}
              />
            </div>
          </div>

          <div className="rounded-xl bg-green-100 pattern-wave text-black h-full w-full">
            <div className="p-6 flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-8">
                  <h1 className="font-bold text-5xl">Clawmarks</h1>
                  <a
                    className="w-14 ml-auto"
                    href="https://github.com/pledp/clawmarks"
                  >
                    <Image
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/github-logo.svg"
                      width="50"
                      height="50"
                      alt="Github logo"
                    ></Image>
                  </a>
                </div>
                <p>
                  1st year uni project, a{" "}
                  <span className="font-bold">web-based puzzle game</span>. Written in JavaScript using Phaser
                </p>
              </div>
            </div>
            <Expandable className="to-expandable-green">
              <div className="flex flex-col gap-4 mb-14 px-6">
                <p>
                  You work as a air-traffic-controller at the fictional HEL airport.
                </p>
                <p>
                  Flights periodically appear. the players job is complete the task
                  associated with the flight as fast as possible. The player
                  completes task by inputing a command.
                </p>
                <p>
                  tasks range from changing an airplanes altitude, to confirming
                  their landing.
                </p>
                <ul className="project-list">
                  <li>altering altitude</li>
                  <li>clearing for landing and takeoff</li>
                  <li>altering heading</li>
                </ul>
                <p>
                  Occasionally events, which you have to deal with, appear, such as
                  a fire or a crash on the airport.
                </p>
                <LightBox
                  slides={[
                    { src: "/images/clawmarks-1.png" },
                    { src: "/images/clawmarks-2.png" },
                  ]}
                />
              </div>
            </Expandable>
          </div>
        </div>
      </ExpandableReverse>
      <FadeInSection className="h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10"></FadeInSection>

      <FadeInSection className="fade-delay">
        {" "}
        <h1 className="text-3xl font-bold">contact me</h1>{" "}
      </FadeInSection>
      <FadeInSection className="flex flex-col bg-white text-black p-5 rounded-2xl gap-10">
        <div className="flex flex-col">
          <h1 className="text-xl">email</h1>
          <h1 className="text-2xl font-bold">pledplers2@gmail.com</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">social</h1>
          <div>
          <a href="https://github.com/pledp">
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="/images/github-logo.svg"
              width="50"
              height="50"
              alt="Github logo"
            ></Image>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Widgets;
