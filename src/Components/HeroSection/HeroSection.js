import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    const color = "text-yellow-500"
    return (
        // Image as background 


        <section className="bg-desktop-gloves bg-no-repeat bg-cover bg-top h-screen w-screen flex flex-col m-auto">
            <article className="text-white text-center border-r border-yellow-500 ">
                <div className="text-right ">
                    <h1 className="text-xl">Cardio <span className={color}>Kickboxing.</span></h1>
                    <h1 className="text-xl">Brazillian <span className={color}>Jiu-Jitsu.</span></h1>
                    <h1 className="text-xl">Mixed <span className={color}>Martial Arts.</span></h1>
                    <h1 className="text-xl">Muay <span className={color}>Thai.</span></h1>
                </div>

                <div>
                    <p className="text-md italic">"If you want to go fast, go alone. If you want to go far, go together."</p>
                    <CTAButton style={"bg-white text-black text-sm rounded py-2 px-4 bg-yellow-500"} btnName="Start Your Journey" />
                </div>
            </article >
        </section >


    )
}