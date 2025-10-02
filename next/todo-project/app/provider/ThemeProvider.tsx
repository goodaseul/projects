"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
    return (
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
            {children}
        </NextThemeProvider>
    );
}
