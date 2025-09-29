import type { Metadata } from "next";
import { Song_Myung } from "next/font/google";
import "./globals.css";

const songMyung = Song_Myung({
    weight: "400",
    // subsets: ["latin"], // 필요한 서브셋 지정
});

export const metadata: Metadata = {
    title: "Todo Project",
    description: "Sub project-Todo project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${songMyung.className} antialiased`}>{children}</body>
        </html>
    );
}
