import React from "react";
import { Review } from "./Review";

export const Reviews = () => {
    return (
        <section className="bg-black flex flex-col justify-center w-full py-5">
            <h1 className="text-4xl font-light text-white text-center">REVIEWS</h1>
            <Review></Review>
            <Review></Review>
            <Review></Review>
        </section>
    )
}