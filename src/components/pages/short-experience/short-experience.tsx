"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const shortExperiences = [
    {
        role: "Social Media Manager",
        company: "DM Worx LLC (USA)",
        period: "Jan 2026 - Present",
        description: [
            "Leading social media initiatives for a diverse portfolio of US-based clients in West Chester, PA.",
            "Developing upscale digital strategies to increase brand visibility and engagement in the North American market.",
            "Implementing data-driven workflows for consistent brand messaging across Instagram, LinkedIn, and Facebook.",
        ],
        themeColor: "from-orange-500/50 via-purple-500/30", // Orange theme
    },
    {
        role: "Founder & Digital Marketing Manager",
        company: "Adopt Growth",
        period: "July 2010 - Present",
        description: [
<<<<<<< HEAD
<<<<<<< HEAD
            "Built web applications with React.js, Next.js, TypeScript, and TailwindCSS, Framer Motion, etc.",
            "Collaborated with backend and ui teams to improve API performance and UX.",
=======
            "Established a full-service agency specializing in Meta Ads, Real Estate marketing, and E-commerce solutions.",
            "Helped hundreds of startups and brands scale revenue through performance marketing and automated lead generation.",
            "Specialized in high-converting property campaigns using CRM-integrated funnels and drone-based content.",
>>>>>>> 07a40eb (My Portfolio)
=======
            "Established a full-service agency specializing in Meta Ads, Real Estate marketing, and E-commerce solutions.",
            "Helped hundreds of startups and brands scale revenue through performance marketing and automated lead generation.",
            "Specialized in high-converting property campaigns using CRM-integrated funnels and drone-based content.",
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
        ],
        themeColor: "from-green-500/50 via-purple-500/30", // Green theme
    },
];

export default function ShortExperience() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Professional Experience
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10 max-w-2xl mx-auto">
                    A 15-year journey of driving operational excellence and digital growth for global brands and startups.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {shortExperiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative group p-[2px] rounded-2xl bg-gradient-to-br ${exp.themeColor} to-transparent transition duration-300 hover:shadow-[0_0_40px_4px_rgba(245,130,32,0.2)]`}
                        >
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-[inherit] border border-gray-200 dark:border-gray-700 transition-colors duration-300 h-full flex flex-col">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-full ${i === 0 ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-green-100 dark:bg-green-900/30'}`}>
                                        <Briefcase className={i === 0 ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                            {exp.company}{" "}
                                            <span className="text-sm font-normal text-gray-500">| {exp.period}</span>
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-gray-700 dark:text-gray-400 flex-1 text-sm leading-relaxed">
                                    {exp.description.map((point, j) => (
                                        <li key={j} className="flex items-start">
                                            <span className={`mr-2 font-bold ${i === 0 ? 'text-orange-500' : 'text-green-500'}`}>▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/experience"
                        className="inline-block text-orange-600 dark:text-orange-400 font-semibold hover:underline transition"
                    >
                        View Full Background & Achievements →
                    </Link>
                </div>
            </div>
        </section>
    );
}