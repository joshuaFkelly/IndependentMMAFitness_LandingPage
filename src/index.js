import reactDom from "react-dom";
import { Heading } from "./Components/Header/Heading";

const App = () => {

    return (
        <div>
            <Heading />
        </div>
    )
};

reactDom.render(<App />, document.getElementById('root'));