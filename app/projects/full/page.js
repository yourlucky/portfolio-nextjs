"use client";

import ProjectBox from "./ProjectBox";
import Link from "next/link";
import DarkMode from "./../../_component/DarkMode";

export default function Fullstack() {
    const websites = [
        {
            title: "Invoice Portal",
            role: "Full-Stack Developer",
            image: "/InvoicePortal1.jpg",
            content: (
                <>
                    As the sole full-stack developer, I engineered a comprehensive Invoice Portal designed to automate
                    complex financial workflows. I led the entire development lifecycle, creating a system that
                    facilitates external invoice submissions while managing internal, role-based approval sequences. By
                    building a responsive front-end with Bootstrap and a robust back-end using Django and MySQL, I
                    delivered a seamless end-to-end user experience. <br /> <br /> The platform integrates real-time
                    payment monitoring, automated alerts, and budget aggregation tools to provide clear financial
                    oversight. This project generated $325K in annual cost savings and improved operational efficiency
                    by 0.75 hours daily for over 50 users, directly enhancing corporate budget control and team
                    productivity.
                </>
            ),
            addContent: (
                <>
                    <div>Technologies Used</div>
                    <div>Back-End Development: Python Django</div>
                    <div>Front-End Development: Bootstrap, JavaScript</div>
                    <div>Database: MySQL</div>
                    <div>Cloud Services: AWS (EC2, S3)</div>
                </>
            ),
        },
        {
            title: (
                <>
                    {" "}
                    Neo2x Company
                    <br />
                    <div>Web Site</div>
                </>
            ),
            role: "Web Developer",
            image: "/neo2x.png",
            content: (
                <>
                    I developed a professional web presence for a legal firm using. The project included integrating essential business
                    features such as a blog and automated email systems. Additionally, I implemented SEO strategies to
                    improve organic search visibility and drive client acquisition, demonstrating my ability to deliver
                    functional, business-oriented web solutions.
                </>
            ),
            addContent: (
                <>
                    <Link href="https://www.neo2x.com/" style={{color: "rgb(0, 0, 255)"}}>
                        https://www.neo2x.com
                    </Link>
                </>
            ),
        },
    ];

    return (
        <div className="flex bg-accent-beige text-foreground dark:bg-accent-charcoal dark:text-foreground-dark">
            {/* 좌측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 items-center relative">
                <div className="flex items-center p-2 absolute left-0 top-0">
                    <span className="text-lg pr-2">Dark Mode </span> <DarkMode />
                </div>
                <div className="hidden sm:flex flex-col w-1/4 items-center pt-20 gap-4">
                    <Link href="/projects/ai">
                        <button className="round" role="button">
                            &lt;
                        </button>
                    </Link>
                </div>
            </div>

            {/* 가운데 콘텐츠 */}
            <div className="w-full max-w-[800px] mx-auto">
                <div className="flex items-center justify-center font-bold text-xxl pt-12 pb-10">
                    <div className="font-xxl w-5 h-5 bg-accent-blue dark:bg-accent-darkwhite mr-3"></div>Professional
                    Projects
                </div>
                <p className="font-plus text-center p-4 pb-10">
                    As a hands-on full stack software engineer, I build complete applications by managing the entire
                    development lifecycle. From designing database schemas and backend logic to crafting intuitive user
                    interfaces, I bridge the gap between frontend and backend to deliver functional, end-to-end
                    solutions. Each project reflects my ability to own a product from start to finish.{" "}
                </p>

                {websites.map((projObj, index) => (
                    <div key={index} className="mb-10">
                        <ProjectBox {...projObj} />
                    </div>
                ))}
            </div>

            {/* 우측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 pt-20 gap-4 items-center">
                <Link href="/projects/manager">
                    <button className="round" role="button">
                        &gt;
                    </button>
                </Link>
            </div>
        </div>
    );
}
