import React from "react"
// Muse useState hook to show/hide modal

export const ContactForm = ({ handler }) => {

    return (
        <div className="h-screen w-screen text-black" >
            <p>Contact Form</p>
            <button type="button" onClick={handler}>Close Modal</button>
        </div>
    )
}