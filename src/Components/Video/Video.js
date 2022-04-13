import React from "react";

export const Video = () => {
    return (
        // Image as background 

        <section className="h-screen w-full bg-black text-white text-center flex flex-col justify-around">

            <article>

                <h1 className="text-4xl font-light">PHILOSOPHY</h1>
                <h1>Our gyms offer a family friendly environment where trained professionals will help you achieve all your fitness goals! Discover a new you as we strive to get better every day as individuals, a team, and a community!</h1>
                <ul className="flex flex-col gap-5 text-2xl text-red-600 font-bold mt-5">
                    <li>RESPECT</li>
                    <li>CONFIDENCE</li>
                    <li>HEALTH</li>
                    <li>FAMILY</li>
                </ul>
            </article>

            <article className="w-full" >
                <h1 className="text-4xl">Meet Our Coach's!</h1>
                <p className="text-sm">Watch until the end for wise words from our boxing instructor, <span className="text-red-600 text-lg">Coach James!</span> </p>
                <iframe className="m-auto h-fit shadow-2xl shadow-gray-500" src="https://www.youtube.com/embed/QnHOhwrqKfg" title="Team Independent BJJ Commercial" allowFullScreen></iframe>
            </article >

        </section >
    )
}