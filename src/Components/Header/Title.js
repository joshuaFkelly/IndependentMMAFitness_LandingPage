import React from "react"

export const Title = ({ name }) => {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-auto ml-2">{name}</h1>
    )
}