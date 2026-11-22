import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "할 일",
    description: "할 일을 등록하고 완료 상태를 관리한다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ko" className={geistSans.variable}>
            <body>{children}</body>
        </html>
    );
}
