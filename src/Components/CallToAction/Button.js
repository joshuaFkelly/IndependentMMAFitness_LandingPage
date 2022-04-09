import React, { useState } from "react"
import { ContactForm } from "../ContactForm/ContactForm";

export const CTAButton = ({ btnName, style }) => {

    const [openForm, setOpenForm] = useState(false)

    const toggleForm = () => {
        setOpenForm(!openForm)
    }
    return (
        !openForm ?
            <button className={style} type="button" onClick={toggleForm}>{btnName}</button>
            : <ContactForm handler={toggleForm} />
    )
}