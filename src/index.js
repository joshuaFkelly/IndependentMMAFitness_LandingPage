import reactDom from "react-dom";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { MainContent } from "./Components/ContentSection/MainContent";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Footer } from "./Components/Footer/Footer";
import { Heading } from "./Components/Header/Heading";

const App = () => {

    return (
        <div className="w-screen h-screen">
            <Heading />
            <HeroSection />
            <MainContent />
            <ContactForm />
            <Footer />
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));