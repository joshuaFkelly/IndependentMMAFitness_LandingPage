import React from "react";
import { Review } from "./Review";

export const Reviews = () => {
    return (
        <div className="bg-black flex flex-col">
            <Review></Review>
            {/* <hr className="mx-4 border-gray-500"></hr> */}
            <Review></Review>
            {/* <hr className="mx-4 border-gray-500"></hr> */}
            <Review></Review>
        </div>
    )
}