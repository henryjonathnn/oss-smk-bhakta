/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem", // Padding default untuk semua ukuran layar selain lg
                lg: "110px", // Padding untuk ukuran layar lg
            },
        },
        extend: {
            colors: {
                "soft-green": "#F7FFF4",
                green: "#C1FDBB",
                "light-green": "#209B1E",
            },
        },
    },
    plugins: [],
};
