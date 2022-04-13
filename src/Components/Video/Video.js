import React from "react";

export const Video = () => {
    return (
        // Image as background 

        <section className="h-screen w-full bg-black text-white text-center flex flex-col justify-evenly">

            <article>

                <h1 className="text-4xl font-light">PHILOSOPHY</h1>
                <ul className="flex flex-col gap-5 text-2xl  font-bold mt-5">
                    <li>RESPECT</li>
                    <li>CONFIDENCE</li>
                    <li>HEALTH</li>
                    <li>FAMILY</li>
                </ul>
            </article>

            <article className=" w-full py-5 " >
                <h1 className="text-4xl">Meet Our Coach's!</h1>
                <p className="text-sm">Watch until the end for wise words from our boxing instructor, <span className="text-red-600 text-lg">Coach James!</span> </p>
                <iframe className="m-auto h-96 shadow-2xl shadow-gray-500" src="https://www.youtube.com/embed/QnHOhwrqKfg" title="Team Independent BJJ Commercial" allowFullScreen></iframe>
            </article >

        </section >
    )
}