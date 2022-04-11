export default function ContactForm({ handler }) {
    return (
        <section className="form-container fixed w-screen h-screen bottom-0 text-white bg-black bg-vintage-punching-bag bg-no-repeat bg-contain bg-top">
            <form className="register-form flex w-full md:w-1/2 md:m-auto h-full flex-col justify-center gap-7 p-1">
                <h1 className="text-center text-4xl">Contact Us!</h1>
                <button className="bg-red-600 rounded-full text-xs text-gray-300 absolute right-0 top-0 p-1" type="button" onClick={handler}>Close</button>
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
                <button className="rounded-md bg-red-600 text-white text-xl font-bold w-full p-2" type="submit">
                    Register
                </button>
            </form>
        </section>
    );
}