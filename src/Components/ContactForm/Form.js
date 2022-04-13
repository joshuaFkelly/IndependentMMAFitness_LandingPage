import NewnanLocation from "../../Images/map.png";

export default function CTAForm() {
    return (
        <section className="w-full sm:w-3/4 lg:w-1/2 m-auto text-center">
            <form className="flex flex-col gap-5 p-2 bg-black rounded-md border-white border-2 ">
                <h1 className="text-center font-light text-4xl text-white">GET IN TOUCH!</h1>

                {/* Uncomment the next line to show the success message */}
                {/* <div class="success-message">Success! Thank you for registering</div> */}
                <input
                    id="first-name"
                    className="form-field rounded-md p-1"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="first-name-error">Please enter a first name</span> */}
                <input
                    id="last-name"
                    className="form-field rounded-md p-1"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="last-name-error">Please enter a last name</span> */}
                <input
                    id="email"
                    className="form-field rounded-md p-1"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="email-error">Please enter an email address</span> */}
                <div>
                    <button className="rounded-md bg-red-600 text-white text-xl font-bold p-2 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring focus:ring-red-300" type="submit">
                        Start Your Journey
                    </button>
                </div>

            </form>

            <article className="text-white flex flex-col gap-5 mt-5">
                <div>
                    <h1>Mon-Fri: 4PM-8:30PM</h1>
                    <h1>Saturday: 10AM-12PM, 5PM-8PM</h1>
                    <h1>Sunday: Closed</h1>
                </div>

                <div>
                    <h1>40 Greenway Court, Newnan, GA 30265</h1>
                    <h1>+16785905959</h1>
                </div>

                <img className="w-max-3/4 h-max-3/4 m-auto bg-white p-1 rounded-md" src={NewnanLocation} alt="Google Image of gym location" />
            </article>
        </section>
    );
}