"use client";

import Link from "next/link";
import ResumeBox from "./ResumeBox";
import EducationBox from "./EducationBox";
import DarkMode from "./../_component/DarkMode";

export const RESUME_URL = "https://drive.google.com/file/d/16P3ayjtDnjIZzkn3hfur2DDUuIqiKrVl";

export default function Resume() {
    const experiences = [
        {
            period: "2024 - Present",
            position: "Software Engineer",
            company: "Aptamigo",
            location: "Chicago, IL",
            logoSrc: "/Aptamigo.jpg",
            description: [
                "• Revenue Growth via 24/7 AI Engagement: Built an after-hours AI engagement system increasing daily closed deals by 30%+.",
                "• Data Ingestion Automation: Built crawling pipelines ingesting 30,000+ listings daily.",
                "• Workflow Automation & Retention: Reduced manual workload and top-agent churn by 65%.",
            ],
        },
        {
            period: "2023 - 2024",
            position: "Tech Lead",
            company: "SK Ecoplant Americas",
            location: "Irvine, CA",
            logoSrc: "/SK_logo.png",
            description: [
                "• Sole IT Lead & System Ownership: Led end-to-end design, development, and operation of core internal systems for the U.S. subsidiary.",
                "• Invoice Automation Platform: Built and deployed a full AR/AP automation system, offsetting two planned hires and saving ~$320K annually.",
            ],
        },
        {
            period: "2015 - 2021",
            position: "Senior Software Engineer / Manager",
            company: "Hyundai Motors",
            location: "Seoul, South Korea",
            logoSrc: "/hyundai_logo.jpeg",
            description: [
                "• Distributed Quality Systems: Built high-throughput quality management platforms for global manufacturing.",
                "• DB Architecture Optimization: Reduced DB load time by 98% (600s → 5s) by minimizing write I/O (Tibero Zeta).",
                "• Global SPC Rollout: Standardized SPC across 20,000+ machines in 10 countries, cutting defects by 30%.",
                "• Smart Factory Innovation: Delivered mobile inspection, lot traceability, and IoT-based factory tools.",
            ],
        },
    ];
    const education = [
        {
            period: "2021 - 2022",
            school: "University of Wisconsin - Madison",
            major: "MS Computer Science",
            advisor: "Advisor : Prof.Josiah Hanna",
            location: "Madison, WI",
            description: `Focused on Advanced Computer Science fundamentals with a specialization in Reinforcement Learning. Conducted research under Prof. Josiah Hanna, exploring complex algorithmic challenges and autonomous system behaviors.`,
        },
        {
            period: "2012 - 2013",
            school: "Stony Brook University",
            major: "BS Applied Mathematics & Statistics",
            advisor: " ",
            location: "StonyBrook, NY",
            description: `Graduated Summa Cum Laude with a focus on Applied Mathematics and Statistics. Selected for a prestigious dual-degree program at Ajou University, South Korea, demonstrating strong analytical foundations and academic excellence.`,
        },
    ];
    const technicalSkills = [
        {
            category: "Languages",
            details: "TypeScript, Python, C++, SQL, R, MATLAB",
        },
        {
            category: "AI/Robotics",
            details: "Reinforcement Learning(SB3), LangGraph/LangChain, PyTorch, MuJoCo, OpenCV, Sim2Real",
        },
        {
            category: "Frameworks/Libraries",
            details: "Node.js, Django, MySQL, MongoDB, AWS, Distributed Systems",
        },
        {category: "Databases", details: "MySQL, MongoDB, VectorDB"},
        {
            category: "Others",
            details: "Operation Research, Traditional Statistics, Linux, Raspberry-pi, Arduino, GitHub",
        },
    ];
    return (
        <div className="w-full min-h-screen bg-accent-beige text-foreground dark:bg-accent-charcoal dark:text-foreground-dark relative">
            <div className="max-w-[800px] mx-auto">
                <div className="">
                    <div className="absolute left-0 top-0  flex items-center sm:justify-start p-3">
                        <span className="text-lg p-2 hidden sm:inline">Dark Mode </span>
                        <div className="hidden sm:flex">
                            <DarkMode />
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-12 pb-10 text-xxl font-bold ">
                        <div className="w-5 h-5 bg-accent-blue dark:bg-accent-darkwhite mr-3"></div>Resume
                    </div>
                    <div className="flex items-center justify-between px-2 p-8 xs:text-lg text-plus font-bold">
                        <div className="flex-1">Work Experience</div>
                        <div className="flex gap-3">
                            <Link href="/projects/ai">
                                <button className="button button-rs" role="button">
                                    View Projects
                                </button>
                            </Link>
                            <Link href={RESUME_URL}>
                                <button className="button button-rs button-rs-pdf">PDF Download</button>
                            </Link>
                        </div>
                    </div>
                    {experiences.map((experienceObj, index) => (
                        <div key={index} className="mb-10">
                            <ResumeBox {...experienceObj} />
                        </div>
                    ))}

                    <div className="p-5"></div>

                    <div className="flex bg-white text-foreground justify-between px-10 py-5 text-plus">
                        <div>
                            <div className="text-xl font-bold py-3">Technical Skills</div>
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="flex items-center p-2">
                                    <div className="w-2 h-2 bg-accent-blue mr-3 flex-shrink-0"></div>
                                    <div className="text-base">
                                        <span className="font-semibold tracking-tight">{skill.category}</span>:{" "}
                                        <span className="font-normal">{skill.details}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 p-8 text-xl font-bold">
                        <span>Education</span>
                    </div>
                    {education.map((educationObj, index) => (
                        <div key={index} className="mb-10">
                            <EducationBox {...educationObj} />
                        </div>
                    ))}
                    <div className="p-5"></div>
                </div>
            </div>
        </div>
    );
}
