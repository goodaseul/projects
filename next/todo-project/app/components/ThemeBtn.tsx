import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeBtn = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button className="block mt-5 ml-auto transition-all duration-300 cursor-pointer md:mt-auto md:mb-auto" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeBtn;
