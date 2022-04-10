import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const sport = "text-red-600 font-bold"
    const quote = "text-red-600 font-bold font-2xl"
    return (
        // Image as background 


        <section className="bg-mobile-gloves bg-cover bg-top h-screen w-screen bg-no-repeat flex flex-col p-1 tablet:bg-desktop-gloves xl:bg-cover">

            <article className="text-white mt-10">

                <div className="text-right border-r-4 border-red-600">
                    <h1 className="text-2xl pb-16 font-light mr-1">MIXED <span className={sport}>MARTIAL ARTS</span></h1>
                    <h1 className="text-2xl pb-16 font-light mr-1">BRAZILLIAN <span className={sport}>JIU-JITSU</span></h1>
                    <h1 className="text-2xl pb-16 font-light mr-1">CARDIO <span className={sport}>KICKBOXING</span></h1>
                    <h1 className="text-2xl font-light mr-1">MUAY <span className={sport}>THAI</span></h1>
                </div>
            </article>

            <article className="text-white m-auto text-center">

                <p className="text-lg italic mb-2">"If you want to go <span className="text-xl text-red-600">fast,</span> go alone. If you want to go <span className="text-xl text-red-600">far,</span> go together."</p>
                <CTAButton style={"text-white font-semibold text-lg rounded p-2 bg-red-700"} btnName="Start Your Journey" />

            </article >

        </section >


    )
}