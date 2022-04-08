import React from "react";
import { CTAButton } from "../CallToAction/Button";
export const HeroSection = () => {
    return (
        // Image as background 

        <section className="text-white text-center h-screen w-screen  bg-bjj-hands bg-cover bg-no-repeat bg-right">
            <div className="flex flex-col ">
                <h1 className="text-2xl">Ready to start your Journey?</h1>
                <article>
                    <p className="text-md italic">"If you want to go fast, go alone. If you want to go far, go together."</p>
                    <CTAButton btnName="Take Your First Step" />
                </article>
            </div>
        </section>


    )
}