import React, { useState } from "react"
import { CTAButton } from "../CallToAction/Button";
import { Logo } from "./Logo";
import { Title } from "./Title";
import useScrollPosition from "./useScrollPosition";

export const Heading = () => {

    const scrollPosition = useScrollPosition()

    const headerSticky = "flex flex-row text-start text-white sticky top-0 backdrop-blur-lg backdrop-brightness-50 p-1"

    return (
        // When the top of the screen is no longer at the top add the blue class. 
        // When no longer at top of screen change title for CTAButton. Use transitions 

        <header className={headerSticky}>

            {/* Logo here */}
            < Logo />
            {/* Company Name */}
            {

                scrollPosition === 0 ?
                    < Title name="Independent MMA & Fitness" /> :
                    <CTAButton style={"bg-white text-black text-sm rounded p-2 m-auto"} btnName={"Make A Change"} />

            }
        </header >
    )
}