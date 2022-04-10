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
                'mobile-gloves': "url('/src/Images/mobile-gloves.jpeg')",
                'desktop-gloves': "url('/src/Images/desktop-gloves.jpeg')",
                'bjj-hands': "url('/src/Images/bjj-hands.jpeg')",
            }),
            backdropBlur: {
                xs: '1.5px',
            },
            screens: {
                'tablet': '485px',
                // => @media (min-width: 640px) { ... }
            },
        },
    },
    plugins: [],
}
