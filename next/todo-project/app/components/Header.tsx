"use client";
import { useEffect, useState } from "react";
import ThemeBtn from "./ThemeBtn";

export default function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null; // SSR 단계에서는 렌더링 X

    return (
        <header className="blcok md:flex justify-between m-auto pt-4 max-w-[90%] lg:max-w-[50%] ">
            <h1 className="text-6xl">To-do project.</h1>

            <ThemeBtn />
        </header>
    );
}
