import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const color = "text-red-600 font-bold"
    return (
        // Image as background 


        <section className="bg-mobile-gloves bg-contain h-screen bg-no-repeat tablet:bg-desktop-gloves tablet:bg-cover">

            <article className="text-black p-1 flex flex-col gap-5 justify-center container">

                <div className="text-right border-r-4 border-red-600 flex-end">
                    <h1 className="text-xl my-2 mr-1">MIXED <span className={color}>MARTIAL ARTS</span></h1>
                    <h1 className="text-xl my-2 mr-1">BRAZILLIAN <span className={color}>JIU-JITSU</span></h1>
                    <h1 className="text-xl my-2 mr-1">CARDIO <span className={color}>KICKBOXING</span></h1>
                    <h1 className="text-xl my-2 mr-1">MUAY <span className={color}>THAI</span></h1>
                </div>

                <div className="text-black">
                    <p className="text-lg italic mb-2">"If you want to go fast,<span className={color}> go alone.</span> If you want to go far, <span className={color}>go together.</span>"</p>
                    <CTAButton style={"bg-white text-black text-sm rounded py-2 px-4 bg-red-600"} btnName="Start Your Journey" />
                </div>

            </article >

        </section >


    )
}