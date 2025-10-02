/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light: "#f5f5f5",
                dark: "#1a1a1a",
            },
        },
    },
    plugins: [],
};
