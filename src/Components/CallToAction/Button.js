import React, { useState } from "react"
import { ContactForm } from "../ContactForm/ContactForm";

export const CTAButton = ({ btnName }) => {

    const [openForm, setOpenForm] = useState(false)

    const toggleForm = () => {
        setOpenForm(!openForm)
    }
    return (
        <div>
            {
                !openForm ?
                    <button className="bg-white text-black p text-sm rounded" type="button" onClick={toggleForm}>{btnName}</button>
                    : <ContactForm handler={toggleForm} />
            }
        </div>
    )
}