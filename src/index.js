import reactDom from "react-dom";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { MainContent } from "./Components/ContentSection/MainContent";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Footer } from "./Components/Footer/Footer";

const App = () => {

    return (
        <div>
            <HeroSection />
            <MainContent />
            <ContactForm />
            <Footer />
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));