import React, { useState } from "react"
import { Logo } from "./Logo";
import { Title } from "./Title";
import useScrollPosition from "./useScrollPosition";
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

export const Heading = () => {

    const scrollPosition = useScrollPosition()

    const headerSticky = "flex flex-row text-white p-2 justify-between sticky top-0 backdrop-blur-sm backdrop-brightness-50"

    return (
        // When the top of the screen is no longer at the top add the blue class. 
        // When no longer at top of screen change title for CTAButton. Use transitions 

        <header className={headerSticky}>
            <div>{/* Logo here */}
                < Logo />
            </div>

            <div className="my-auto ml-1 ">{/* Company Name */}
                < Title name="INDEPENDENT" />
            </div>


            <div className="flex flex-row justify-end w-fit ml-auto gap-x-2">
                <BsInstagram></BsInstagram>
                <BsFacebook></BsFacebook>
                <AiOutlinePhone></AiOutlinePhone>
            </div>

        </header >
    )
}