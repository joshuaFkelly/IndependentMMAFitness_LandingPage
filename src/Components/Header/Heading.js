import React, { useState } from "react"
import { Logo } from "./Logo";
import { Title } from "./Title";
import useScrollPosition from "./useScrollPosition";

export const Heading = () => {

    const scrollPosition = useScrollPosition()

    const headerSticky = "flex flex-row text-center justify-center text-white sticky top-0 m-auto"

    return (
        // When the top of the screen is no longer at the top add the blue class. 
        // When no longer at top of screen change title for CTAButton. Use transitions 

        <header className={headerSticky}>

            <div>{/* Logo here */}
                < Logo />
            </div>

            <div className=" self-center ml-1">{/* Company Name */}
                < Title name="INDEPENDENT" />
            </div>

        </header >
    )
}