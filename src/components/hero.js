import React from 'react'
import StaggeredGrid from './dot-grid-component';

const Hero = () => {
    return (
        <section className='main-widget bg-black-100 w-full flex items-center justify-center lg:w-3/5 lg:justify-end lg:h-screen lg:sticky lg:top-0'>
            <StaggeredGrid className="absolute top-50 left-50 max-w-full overflow-hidden
            xl:overflow-visible"/>

            <div className=" text-black mx-12 lg:mx-4 flex flex-col items-center justify-center gap-10 relative rounded-2xl p-16 mix">
                <div>
                    <div className='text-5xl hero-text
                    sm:text-6xl'>
                        <h2 className="font-bold text-center hero-text">Lars<span className='italic pl-10'>"pled"</span></h2>
                    </div>
            
                    {/* Description */}
                    <p className="text-center pt-5 hero-text">
                        engineering bachelors student. sometimes i try to learn things.
                    </p>
                </div>
                <a href="#projects-section" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group bg-black-100">
                    <span className="absolute top-0 left-0 w-64 h-64 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-72 -translate-y-32 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out whitespace-nowrap group-hover:text-black">see what i've been up to</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>
        </section>
    )
}

export default Hero;