module.exports = {
    content: ["./src/**", "./public/**"],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            backgroundImage: (theme) => ({
                'ufc-gloves': "url('/src/Images/gloveTouch.jpg')",
                'logo': "url('/src/Images/IndependentLogo.png')",
                'mma-gloves': "url('/src/Images/mma-gloves.jpeg')",
            })
        },
    },
    plugins: [],
}
