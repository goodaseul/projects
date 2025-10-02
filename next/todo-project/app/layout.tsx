import type { Metadata } from "next";
import { Song_Myung } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const songMyung = Song_Myung({ weight: "400" });

export const metadata: Metadata = {
    title: "Todo Project",
    description: "Sub project-Todo project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${songMyung.className} antialiased text-dark bg-light dark:text-light dark:bg-dark`}>
                <ThemeProvider>
                    <Header />
                    <main className="relative w-full max-w-full h-full min-h-[100vh]">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
