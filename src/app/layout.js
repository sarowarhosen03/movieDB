import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {cookies} from "next/headers";


export const metadata = {
    title: "Cine Rental | Learn with Sumit",
    description: "Learn how to build a movie rental app with Next.js",
};

export default function RootLayout({children}) {
    const cookie= cookies().get('theme');

    return (
        <html lang="en" className={cookie?.value||'dark'}>
        <body className=" dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
