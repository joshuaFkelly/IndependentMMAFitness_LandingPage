import React from "react"

export const Title = ({ name }) => {
    return (
        <h1 className="text-3xl font-black flex flex-col"><span className="font-semibold text-xl self-start">team</span>{name}</h1>
    )
}