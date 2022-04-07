import React from "react";
import { CTAButton } from "../CallToAction/Button";

export const HeroSection = () => {
    return (
        // Image as background 
        <div className="bg-ufc-gloves">
            <h1>Stop procrastinating! Start your Journey now!</h1>
            <p>We care about your goals on, and off the mats.</p>
            <p>"If you want to go fast, go alone. If you want to go far, go together."</p>
            <CTAButton btnName="Start Your Journey" />
        </div>
    )
}