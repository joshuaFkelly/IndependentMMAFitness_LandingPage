import reactDom from "react-dom";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Reviews } from "./Components/ReviewsTestimonials/Reviews";
import { Video } from "./Components/Video/Video";
import { Heading } from "./Components/Header/Heading";
import CTAForm from "./Components/ContactForm/Form";
import { Footer } from "./Components/Footer/Footer";

const App = () => {

    return (
        <div className="bg-black">
            <Heading />
            <HeroSection />
            <Video />
            <Reviews />
            < CTAForm />
            <Footer />
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));