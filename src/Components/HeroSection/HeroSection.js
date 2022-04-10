import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const sport = "text-red-600 font-bold"
    const quote = "text-red-600 font-bold font-2xl"
    return (
        // Image as background 


        <section className="bg-mobile-gloves bg-cover bg-top h-screen w-screen bg-no-repeat flex flex-col justify-evenly p-1 tablet:bg-desktop-gloves xl:bg-cover">


            <article className="text-white text-right border-r-4 border-red-600">
                <h1 className="text-5xl py-2 font-light mr-1">MIXED<br /><span className={sport}>MARTIAL ARTS</span></h1>
                <h1 className="text-5xl py-2 font-light mr-1">BRAZILLIAN<br /><span className={sport}>JIU-JITSU</span></h1>
                <h1 className="text-5xl py-2 font-light mr-1">CARDIO<br /><span className={sport}>KICKBOXING</span></h1>
                <h1 className="text-5xl py-2 font-light mr-1">MUAY<br /><span className={sport}>THAI</span></h1>
            </article>


            <article className="text-white text-center">

                <p className="text-2xl italic mb-4">"If you want to go <span className="text-3xl text-red-600">fast,</span> go alone. If you want to go <span className="text-xl text-red-600">far,</span> go together."</p>
                <CTAButton style={"text-white font-semibold text-xl rounded p-3 bg-red-700"} btnName="Start Your Journey" />

            </article >
        </section >


    )
}