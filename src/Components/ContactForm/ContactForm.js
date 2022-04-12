export default function ContactForm({ handler }) {
    return (
        <section className="form-container sm:w-3/4 lg:w-1/2 fixed inset-x-0 top-40 m-auto">
            <form className="register-form flex flex-col gap-5 p-2 bg-black rounded-md border-white border-2 m-auto ">
                <h1 className="text-center text-4xl">Get in touch!</h1>
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
                <div className="flex flex-col gap-y-2 sm:flex-row sm:justify-around">
                    <button className="rounded-md bg-red-600 text-white text-xl font-bold p-2 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring focus:ring-red-300" type="submit">
                        Make A Change
                    </button>
                    <button className="rounded-md bg-gray-600 text-white text-xl font-bold p-2 hover:bg-gray-700 active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 brightness-75" type="button" onClick={handler}>Wait Another Day</button>
                </div>

            </form>
        </section>
    );
}