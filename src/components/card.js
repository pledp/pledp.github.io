import Image from "next/image";
import React from 'react'
import FadeInSection from "./scroll-effect-component";

const Card = () => {
    return(
        <FadeInSection threshold={0.4} className="card bg-white rounded-2xl overflow-hidden p-5 text-center
        lg:max-w-96 lg:sticky lg:top-10">
            <div className="bg-black p-5 rounded-2xl text-white">
                <div className="h-1/2 mx-10 my-5 items-center rounded-2xl flex">
                    <Image src={'/images/signature.png'} alt="Signature" width="256" height="256" className='mx-auto'></Image>
                </div>

                {/* Bottom Half - Content */}
                <h2 className="text-3xl font-bold  mb-2">Lars<span className='italic pl-10 text-3xl'>"pled"</span></h2>
                <p className=" mb-4">
                i major in biomedical engineering.
                </p>
                <p className="mb-4 pt-5">
                i occasionally try to do some application/systems programming with rust or c/c++.
                </p>
                <div className="mb-4 p-5 mt-5 text-black bg-white rounded-2xl ">
                    <h1 className="text-xl font-bold bg-green text-orange-100">famous quotes</h1>
                    <div className="flex flex-col gap-3 mt-5">
                        <p className="italic">"oop sucks, procedural rocks"</p>
                        <p className="italic">"cmake sucks, cargo rocks"</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Card;
