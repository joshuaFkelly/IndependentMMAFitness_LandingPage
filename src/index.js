import reactDom from "react-dom";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Reviews } from "./Components/ReviewsTestimonials/Reviews";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Footer } from "./Components/Footer/Footer";
import { Heading } from "./Components/Header/Heading";

const App = () => {

    return (
        <div className="bg-black">
            <Heading />
            <HeroSection />
            <Reviews />
            {/* <ContactForm /> */}
            {/* <Footer /> */}
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));