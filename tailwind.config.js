module.exports = {
    content: ["./src/**", "./public/**"],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            backgroundImage: (theme) => ({
                'mobile-gloves': "url('/src/Images/mobile-gloves.jpeg')",
                'desktop-gloves': "url('/src/Images/desktop-gloves.jpeg')",
                'bjj-hands': "url('/src/Images/bjj-hands.jpeg')",
            }),
            screens: {
                'tablet': '485px',
            },
        },
    },
    plugins: [],
}
