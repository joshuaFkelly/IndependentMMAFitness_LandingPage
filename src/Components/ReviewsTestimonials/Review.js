import React from "react";
import avatarOne from "../../Images/male-avatar.png"
export const Review = () => {
    return (
        <div className="bg-black text-white flex flex-col text-center p-4">
            <img className="bg-white self-center rounded-full w-14 h-14" src={avatarOne} />
            <p className="text-yellow-500 align-text-top">* * * * *</p>
            <p className="text-2xl italic">"Team Independent MMA & Fitness is the best!"</p>
            <p className="text-red-600">- John Doe</p>
            <p>Newnan, GA</p>
        </div >
    )
}