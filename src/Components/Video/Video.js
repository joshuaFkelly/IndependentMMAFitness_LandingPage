import React from "react";

export const Video = () => {
    return (
        // Image as background 

        <section className="h-screen w-full bg-black text-white text-center flex flex-col justify-center">

            <article>

                <h1 className="text-4xl font-light">PHILOSOPHY</h1>
                <ul className="flex flex-col gap-5 text-xl text-white mt-10">
                    <li>Virtue #1</li>
                    <li>Virtue #2</li>
                    <li>Virtue #3</li>
                    <li>Virtue #4</li>
                </ul>
            </article>

            <article className=" w-full py-5 " >
                <iframe className="m-auto h-96 shadow-2xl shadow-gray-500" src="https://www.youtube-nocookie.com/embed/XppxZZAojkM" title="Team Independent BJJ Commercial" allowFullScreen></iframe>
            </article >

        </section >
    )
}