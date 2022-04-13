import React, { useState } from "react"
import ContactForm from "../ContactForm/ContactForm";

export const CTAButton = ({ btnName, style }) => {
    const buttonForm = "sm:w-3/4 lg:w-1/2  fixed inset-x-0 top-40 m-auto"

    const [openForm, setOpenForm] = useState(false)

    const toggleForm = () => {
        setOpenForm(!openForm)
    }
    return (
        !openForm ?
            <button className={style} type="button" onClick={toggleForm}>{btnName}</button>
            : <ContactForm handler={toggleForm} style={buttonForm} />
    )
}