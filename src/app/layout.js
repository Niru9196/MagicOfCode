import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    title: {
        template:
            "Portfolio | %s | Frontend Developer with a Passion for Creative UIs",
        default: "Nirupama Portfolio",
    },
    description:
        "This is the personal portfolio of a passionate frontend developer, showcasing creative and interactive web experiences built using modern tools like Next.js, Tailwind CSS, Three.js, and Framer Motion. Currently learning and building through hands-on projects. Explore my work and journey as I grow in the world of web development.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.variable,
                    "bg-background text-foreground font-inter"
                )}
            >
                {children}
                <FireFliesBackground />
                <Sound />
                <div id="my-modal" />
            </body>
        </html>
    );
}
