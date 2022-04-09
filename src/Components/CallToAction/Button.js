import React, { useState } from "react"
import { ContactForm } from "../ContactForm/ContactForm";

const defaultStyle = "bg-white text-black text-sm rounded p-2"

export const CTAButton = ({ btnName, style }) => {

    const [openForm, setOpenForm] = useState(false)

    const toggleForm = () => {
        setOpenForm(!openForm)
    }
    return (
        <div>
            {
                !openForm ?
                    <button className={style} type="button" onClick={toggleForm}>{btnName}</button>
                    : <ContactForm handler={toggleForm} />
            }
        </div>
    )
}