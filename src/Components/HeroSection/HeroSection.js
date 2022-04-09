import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {

    return (
        // Image as background 


        <section className="flex flex-col gap-y-5 justify-center content-center text-white text-center h-screen w-screen bg-bjj-hands bg-cover bg-no-repeat bg-top">
            <h1 className="text-2xl p-2">Ready to start your Journey?</h1>
            <article className="p-2" >
                <p className="text-md italic mb-2">"If you want to go fast, go alone. If you want to go far, go together."</p>
                <CTAButton style={"bg-white text-black text-sm rounded p-2"} btnName="Take Your First Step" />
            </article >
        </section >


    )
}