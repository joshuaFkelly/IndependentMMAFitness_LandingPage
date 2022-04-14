import React from "react";
import { Review } from "./Review";

export const Reviews = () => {
    return (
        <section className="bg-black flex flex-col w-full">
            <h1 className="text-4xl font-light text-white text-center">REVIEWS</h1>
            <Review name={"Alan Reyes"} body={"'' Wonderful staff and knowledgeable instructors will help you break past mental and physical plateaus and barriers with methods proven to get results in both fitness, skill level, and self defense. Let them show you what you are capable of, increase your self-confidence, and get in shape. You won't regret the decision to join this team! ''"}></Review>
            <Review name={"Karen Livingston"} body={"''Independent MMA is a wonderful place! We brought our son here a year ago and it was the best thing we could have done for him. It has been great for his confidence! ''"}></Review>
            <Review name={"Madison Divergilio"} body={"''An amazing gym with amazing people! I absolute love participating in the cardio kickboxing and Brazillian jiu jitsu classes! This is the best place for you to accomplish your goals and get whipped into shape!''"}></Review>
        </section>
    )
}