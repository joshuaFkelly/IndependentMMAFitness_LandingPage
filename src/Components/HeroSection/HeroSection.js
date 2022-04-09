import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const color = "text-yellow-500 font-bold"
    return (
        // Image as background 


        <section className="bg-desktop-gloves bg-no-repeat bg-cover bg-top h-screen w-screen text-center">
            <article className="text-white mx-auto p-2 flex flex-col gap-5 justify-center w-fit">
                <div className="text-right border-r-4 border-yellow-500 flex-end my-auto mt-6 md:mt-12">
                    <h1 className="text-xl my-2 mr-1">MIXED <span className={color}>MARTIAL ARTS</span></h1>
                    <h1 className="text-xl my-2 mr-1">BRAZILLIAN <span className={color}>JIU-JITSU</span></h1>
                    <h1 className="text-xl my-2 mr-1">CARDIO <span className={color}>KICKBOXING</span></h1>
                    <h1 className="text-xl my-2 mr-1">MUAY <span className={color}>THAI</span></h1>
                </div>

                <div>
                    <p className="text-lg italic mb-2">"If you want to go fast,<span className={color}> go alone.</span> If you want to go far, <span className={color}>go together.</span>"</p>
                    <CTAButton style={"bg-white text-black text-sm rounded py-2 px-4 bg-yellow-500"} btnName="Start Your Journey" />
                </div>
            </article >
        </section >


    )
}