import React from "react";
import { Review } from "./Review";

export const Reviews = () => {
    return (
        <div className="bg-black flex flex-col w-full h-screen justify-around">
            <h1 className="text-4xl font-light text-white text-center">REVIEWS</h1>
            <Review></Review>
            {/* <hr className="mx-4 border-gray-500"></hr> */}
            <Review></Review>
            {/* <hr className="mx-4 border-gray-500"></hr> */}
            <Review></Review>
        </div>
    )
}