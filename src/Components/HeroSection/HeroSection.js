import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const sport = "text-red-600 font-bold"
    return (
        // Image as background 


        <section className="bg-mobile-gloves bg-cover bg-top bg-no-repeat flex flex-col gap-y-10 py-2 tablet:bg-desktop-gloves">


            <article className="text-white text-right border-r-4 m-1 border-red-600">
                <h1 className="text-4xl py-2 font-light mr-1">MIXED<br /><span className={sport}>MARTIAL ARTS</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">BRAZILLIAN<br /><span className={sport}>JIU-JITSU</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">CARDIO<br /><span className={sport}>KICKBOXING</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">MUAY<br /><span className={sport}>THAI</span></h1>
            </article>


            <article className="text-white text-center">

                <p className="text-xl italic mb-2">"If you want to go <span className="text-2xl text-red-600">fast,</span> go alone. If you want to go <span className="text-xl text-red-600">far,</span> go together."</p>
                <CTAButton style={"text-white font-semibold text-lg rounded p-2 bg-red-700"} btnName="Start Your Journey" />

            </article >
        </section >


    )
}