import React from "react";
import avatarOne from "../../Images/male-avatar.png"
import { AiFillStar } from "react-icons/ai";
export const Review = ({ body, name }) => {
    return (
        <article className="bg-black text-white flex flex-col text-center p-4 my-4">
            <img className="bg-white self-center rounded-full w-14 h-14" src={avatarOne} />
            <p className="flex flex-row justify-center gap-3 p-2">
                <AiFillStar color="yellow" size={"2em"} />
                <AiFillStar color="yellow" size={"2em"} />
                <AiFillStar color="yellow" size={"2em"} />
                <AiFillStar color="yellow" size={"2em"} />
                <AiFillStar color="yellow" size={"2em"} />
            </p>
            <p className="text-2xl italic">{body}</p>
            <p className="text-red-600">- {name}</p>
            <p>Newnan, GA</p>
        </article >
    )
}