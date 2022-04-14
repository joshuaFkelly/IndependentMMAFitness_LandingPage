import React from "react";
import { CTAButton } from "../CallToAction/Button"
export const Video = () => {
    return (
        // Image as background 

        <section className="w-full bg-black text-white text-center flex flex-col">

            <article>

                <h1 className="text-4xl font-light my-5 tablet:text-5xl">PHILOSOPHY</h1>
                <h1 className="tablet:w-1/2 tablet:text-lg m-auto">Our gyms offer a family friendly environment where trained professionals will help you achieve all your fitness goals! Discover a new you as we strive to get better every day as individuals, a team, and a community!</h1>
                <ul className="flex flex-col gap-5 text-2xl text-red-600 font-bold mt-10 xl:text-4xl">
                    <li>RESPECT</li>
                    <li>CONFIDENCE</li>
                    <li>HEALTH</li>
                    <li>FAMILY</li>
                </ul>
            </article>

            <article >
                <h1 className="text-4xl py-1 tablet:text-5xl">Meet Our Coach's!</h1>
                <p className="text-sm py-1 tablet:text-lg">Watch until the end for wise words from our boxing instructor, <span className="text-red-600 text-lg">Coach James!</span> </p>
                <iframe className="m-auto h-fit shadow-2xl shadow-gray-500 tablet:w-1/2 md:w-1/3 md:h-60 xl:h-96" src="https://www.youtube.com/embed/QnHOhwrqKfg" title="Team Independent BJJ Commercial" allowFullScreen></iframe>
            </article >

            <article>
                <CTAButton style={"text-white font-semibold text-xl rounded p-2 bg-red-700 m-10"} btnName="Start Your Journey" />
            </article>

        </section >
    )
}