import reactDom from "react-dom";
import { Heading } from "./Components/Header/Heading";
import { HeroSection } from "./Components/HeroSection/HeroSection";

const App = () => {

    return (
        <div>
            <Heading />
            <HeroSection />
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));