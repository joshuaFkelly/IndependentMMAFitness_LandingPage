import { CallToAction } from "./CallToAction";
import { Logo } from "./Logo";
import { Title } from "./Title";
export const Heading = () => {
    return (
        <header className="flex bg-black text-white p-1">

            <div className="flex-none" >
                {/* Logo here */}
                < Logo />
            </div >

            <div className="grow self-center" >
                {/* Company Name */}
                < Title name="Independent MMA & Fitness" />
            </div >
        </header >
    )
}