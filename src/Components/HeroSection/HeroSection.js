import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const sport = "text-red-600 font-bold"
    return (

        <section className="bg-mobile-gloves bg-cover bg-top bg-no-repeat flex flex-col py-2 tablet:bg-desktop-gloves lg:bg-contain">


            <article className="text-white text-right border-r-4 border-red-600 lg:w-3/4">
                <h1 className="text-4xl py-2 font-light mr-1">MIXED<br /><span className={sport}>MARTIAL ARTS</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">BRAZILLIAN<br /><span className={sport}>JIU-JITSU</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">CARDIO<br /><span className={sport}>KICKBOXING</span></h1>
                <h1 className="text-4xl py-2 font-light mr-1">MUAY<br /><span className={sport}>THAI</span></h1>
            </article>


            <article className="text-white text-center">
                <p className="text-xl italic mb-2">"If you want to go <span className="text-2xl text-red-600">fast,</span> go alone. If you want to go <span className="text-2xl text-red-600">far,</span> go together."</p>
                <CTAButton style={"text-white font-semibold text-xl rounded p-2 bg-red-700"} btnName="Start Your Journey" />
            </article >

        </section >


    )
}