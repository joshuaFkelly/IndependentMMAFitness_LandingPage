import React, { useState } from "react"
import { CTAButton } from "../CallToAction/Button";
import { Logo } from "./Logo";
import { Title } from "./Title";
import useScrollPosition from "./useScrollPosition";

export const Heading = () => {

    const scrollPosition = useScrollPosition()


    return (
        // When the top of the screen is no longer at the top add the blue class. 
        // When no longer at top of screen change title for CTAButton. Use transitions 
        <header className="flex flex-row w-screen text-white fixed top-0 backdrop-blur-sm backdrop-brightness-50 px-1 py-2">

            <div className="flex-none" >
                {/* Logo here */}
                < Logo />
            </div >

            <div className="m-auto" >
                {/* Company Name */}
                {

                    scrollPosition === 0 ?
                        < Title name="Independent MMA & Fitness" /> :
                        <CTAButton style={"bg-white text-black text-sm rounded px-8 py-2"} btnName={"Make A Change"} />

                }

            </div >
        </header >
    )
}