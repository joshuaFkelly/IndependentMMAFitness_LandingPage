import reactDom from "react-dom";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Reviews } from "./Components/ReviewsTestimonials/Reviews";
// import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Video } from "./Components/Video/Video";
import { Heading } from "./Components/Header/Heading";

const App = () => {

    return (
        <div className="bg-black">
            <Heading />
            <HeroSection />
            <Video />
            <Reviews />
            {/* <ContactForm /> */}
            {/* <Footer /> */}
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));