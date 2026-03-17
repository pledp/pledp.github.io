import React from 'react'
import Image from "next/image";
import FadeInSection from './scroll-effect-component';
import Project from './project-component';
import Expandable from './expandable-component';
import LightBox from './lightbox';

const Widgets = () => {
    return (
        <section className='text-white flex flex-col justify-center gap-12 mt-10 projects-widget w-full'>
            <div className='flex flex-col items-center
            sm:flex-row'>
                <FadeInSection className='transition fade-delay'>
                    <h1 className='text-7xl font-bold'>5+</h1>
                    <div className='text-neutral-400'>
                        <p>YEARS PROGRAMMING</p>
                        <p>EXPERIENCE</p>
                    </div>
                </FadeInSection>
                <div className='w-full'>
                    <FadeInSection className='bg-green-100 rounded-2xl flex flex-col p-5 gap-5 mt-5 fade-delay pattern-wave'>
                        <h1 className='text-3xl font-bold text-black'>what i can kinda do - <span className='bg-red-100 text-white rounded-2xl px-4'>tierlist</span></h1>

                        <div className='w-full flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-7xl font-bold mr-10 bg-red-100 p-5 rounded-2xl px-8'>S</h1></div>
                            <div>
                                <Image src="/images/rust-logo.svg" width={80} height={80} alt="Rust logo" className='rust-logo'></Image>
                            </div>
                            <div>
                                <Image src="/images/cpp-logo.svg" width={80} height={80} alt="C++ logo"></Image>
                            </div>
                        </div>
                        <div className='flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl
                        lg:w-5/6'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-300 p-5 rounded-2xl px-8'>A</h1></div>
                            <div className='flex flex-col gap-2'>
                                <Image src="/images/html-logo.svg" width="60" height="60" alt="HTML logo"></Image>

                                <Image src="/images/css-logo.svg" width="60" height="60" alt="CSS logo"></Image>
                            </div>
                            <div>
                                <Image src="/images/js-logo.svg" width="60" height="60" alt="JS logo"></Image>
                            </div>
                        </div>
                        <div className='flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl
                        lg:w-5/6'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-400 p-5 rounded-2xl px-8'>B</h1></div>
                            <div>
                                <Image src="/images/csharp-logo.svg" width="50" height="50" alt="C# logo"></Image>
                            </div>
                            <div>
                                <Image src="/images/python-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                            <div>
                                <Image src="/images/react-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                        </div>

                        <h1 className='text-black text-xl font-bold'>+ other misc stuff* <span className='text-sm'>(i'm a risk management iso 14971 genius)</span></h1>
                    </FadeInSection>
                </div>
            </div>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>

            <FadeInSection><h1 className='text-3xl font-bold'>what i've <span className='text-orange-200'>recently</span> been focusing on</h1></FadeInSection>

            <Project className='bg-orange-200 h-96 rounded-2xl mt-5 p-6 flex flex-col gap-16 pattern-doodle move-on-hover'>
                <div className='items-end text-right flex flex-col gap-5'>
                    <h1 className='font-bold text-6xl'>mögl</h1>
                    <p>a work-in-progress game framework/engine.</p>
                </div>
                <div className='items-end mt-auto'>
                    <p>written in <span className='font-bold'>Rust</span> with winit and wgpu. written mostly as a Rust-learning-project. trying to implement cool modular features in a simple fashion.</p>
                </div>
                <a href='https://github.com/pledp/moegl'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/images/github-logo-white.svg" width="50" height="50" alt="Github logo"></Image></a>
            </Project>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>

            <FadeInSection className='fade-delay'> <h1 className='text-3xl font-bold'>other stuff i've done</h1> </FadeInSection>

            <div className='flex flex-col w-full gap-6'>
                <div className='flex flex-col gap-6
                sm:flex-row'>
                    <Project className='rounded-2xl p-6 flex flex-col pattern-zig text-white gap-12 move-on-hover h-full'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-row items-center'>
                                <h1 className='font-bold text-6xl'>smeagl</h1>
                                <a className='w-14 ml-auto' href='https://github.com/pledp/pledGL'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/images/github-logo-white.svg" width="50" height="50" alt="Github logo"></Image></a>
                            </div>
                            <p>a (very) minimal game framework written in <span className='font-bold'>C++</span>.</p>
                        </div>
                        <p>C++ learning project, built with SDL2 and OpenGL. implements basic graphics, such as quads and triangles with textures and shaders. also implements simple input.</p>
                        <p>i now understand the pain of CMake and build systems and such</p>

                    </Project>

                    <Project className='rounded-2xl bg-white text-black move-on-hover h-full'>
                        <div className='p-6 flex flex-col gap-8'>
                            <div className='flex flex-row gap-5 w-full'>
                                <div className="flex-row flex gap-6 w-full items-center">
                                    <a className="w-14" href='https://github.com/pledp/pLdev'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/images/github-logo.svg" width="50" height="50" alt="Github logo"></Image></a>
                                    <h1 className='font-bold text-6xl ml-auto'>robot.r</h1>
                                </div>
                            </div>

                            <p>written in <span className='font-bold'>C#</span> with MonoGame. your goal is to complete challenges with a built-in custom programming language written on-top of C#.</p>
                        </div>
                        <Expandable className='to-expandable-white'>
                            <div className='flex flex-col gap-4 mb-14'>
                                <p>the game consists of 9 programming challenges, which vary from assigning variables, to building loops.</p>
                                <p>the game was built for a programming workshop for grade-school students. completed with:</p>
                                <ul className='project-list'>
                                    <li>syntax highlighting</li>
                                    <li>error messages</li>
                                    <li>"documentation"</li>
                                </ul>
                                <p>earlier project, gameplay doesn't offer much variance. (just don't read the source code...)</p>
                                <LightBox slides={[
                                    { src: "/images/robotr-1.png" },
                                    { src: "/images/robotr-2.png" }
                                ]}/>
                            </div>
                        </Expandable>
                    </Project>
                </div>

                <Project className='rounded-b-xl bg-green-100 pattern-wave text-black h-full w-full pattern-tri'>
                    <div className='p-6 flex flex-col gap-8 mt-8'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-row gap-8'>
                                <h1 className='font-bold text-5xl'>Clawmarks</h1>
                                <a className="w-14 ml-auto" href='https://github.com/pledp/clawmarks'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/images/github-logo.svg" width="50" height="50" alt="Github logo"></Image></a>
                            </div>
                            <p>1st year uni project, a <span className='font-bold'>web-based puzzle game</span>.</p>
                        </div>
                        <p>written with <span className='font-bold'>JavaScript using Phaser</span>. it uses a server written in Python that looks up different airports from a database and saves progress in the database  (don't ask why).</p>
                    </div>
                    <Expandable className='to-expandable-green'>
                        <div className='flex flex-col gap-4 mb-14'>
                            <p>you work as a air-traffic-controller, and your objective is to guide airplanes on their journey.</p>
                            <p>flights periodically appear. the players job is complete the task associated with the flight as fast as possible. the player completes task by inputing a command.</p>
                            <p>tasks range from changing an airplanes altitude, to confirming their landing.</p>
                            <ul className='project-list'>
                                <li>altering altitude</li>
                                <li>clearing landing and takeoff</li>
                                <li>altering heading</li>
                            </ul>
                            <p>occasionally events, which you have to deal with, appear, such as a fire or a crash on the airport.</p>
                            <LightBox slides={[
                                { src: "/images/clawmarks-1.png" },
                                { src: "/images/clawmarks-2.png" }
                            ]}/>
                        </div>
                    </Expandable>
                </Project>
                <h1 className='font-bold'>+ other smaller stuff* <span className='text-sm'>(smaller networking applications)</span></h1>
            </div>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>

            <FadeInSection className='fade-delay'> <h1 className='text-3xl font-bold'>contact me</h1> </FadeInSection>
            <FadeInSection className='flex flex-col bg-white text-black p-5 rounded-2xl gap-10'>
                <div className='flex flex-col'>
                    <h1 className='text-xl'>email</h1>
                    <h1 className='text-2xl font-bold'>pledplers2@gmail.com</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl'>social</h1>
                    <a href='https://github.com/pledp'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/images/github-logo.svg" width="50" height="50" alt="Github logo"></Image></a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Widgets;
