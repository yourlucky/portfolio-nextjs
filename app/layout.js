import "./globals.css";
import Link from "next/link";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {Inter} from "next/font/google";
import ThemeProvider from "./ThemeProvider";
import ProjectsDropdown from "./ProjectsDropdown";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "700"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Leo Na",
    description: "Introducing Leo Na, somewhere between a passionate hobbyist and a dedicated professional.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={inter.variable}>
            <head />
            <body suppressHydrationWarning={true}>
                <ThemeProvider>
                    <div className="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark sm:px-6 lg:px-8 py-5">
                        <div className="flex justify-between items-end px-1 sm:px-6 h-24">
                            <div className="text-base mr-1 sm:mr-6 lg:mr-8">
                                <Link
                                    href="/"
                                    className="inline-flex items-center font-extrabold whitespace-nowrap text-plus sm:text-xl pb-10"
                                >
                                    <span className="inline-block w-4 h-4 bg-accent-blue dark:bg-accent-darkblue ml-1 mr-2.5 sm:pb-2"></span>
                                    Leo
                                </Link>
                                <span className="hidden sm:inline sm:whitespace-nowrap pb-2">/ Software Engineer</span>
                            </div>
                            <div className="flex gap-3 xs:gap-4 sm:gap-8 lg:gap-10  text-sm pb-2">
                                <Link href="/" className="hover:text-accent-blue dark:hover:text-accent-darkblue">
                                    ABOUT ME
                                </Link>
                                <Link href="/resume" className="hover:text-accent-blue dark:hover:text-accent-darkblue">
                                    RESUME
                                </Link>
                                <ProjectsDropdown />
                            </div>
                        </div>
                    </div>
                    {children}
                    <SpeedInsights />

                    <div className="flex justify-between items-end px-4 dark:bg-background-dark dark:text-foreground-dark sm:px-6 pb-5 h-24">
                        {/* xs 이하에서 숨기기 */}
                        <div className="hidden sm:block text-base mr-4 sm:mr-6 lg:mr-8">
                            Today's choices create tomorrow's stories.
                        </div>

                        <div className="flex gap-5 xs:gap-4 sm:gap-8 lg:gap-10 text-sm">
                            <div className="flex flex-col items-center">
                                <div className="font-bold">Call</div>
                                <div className="mt-1">608-770-3823</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="font-bold">Write</div>
                                <div className="mt-1 text-smm sm:text-sm">yoonchae.na@gmail.com</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="font-bold">Follow</div>
                                <div className="flex gap-4 mt-1">
                                    <a
                                        href="https://www.linkedin.com/in/ycna/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin size={20} className="hover:text-accent-blue" />
                                    </a>
                                    <a href="https://github.com/yourlucky" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={20} className="hover:text-accent-gray" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
