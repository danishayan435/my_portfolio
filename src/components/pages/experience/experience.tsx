"use client";

import { useEffect, useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, BarChart3 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const experiences = [
    {
        role: "Social Media Manager",
        company: "DM Worx LLC (USA)",
        period: "Jan 2026 - Present",
        description: [
            "Managing a diverse portfolio of North American clients from West Chester, PA.",
            "Architecting high-end social media strategies that bridge the gap between global brands and their target audience.",
            "Driving brand engagement through technical analysis and creative storytelling.",
        ],
        projects: [
            {
                name: "US Local Market Domination",
                details: [
                    "Optimized GMB profiles and social presence for local service businesses, resulting in a 40% increase in map views.",
                    "Implemented automated content workflows ensuring 100% brand consistency across all platforms.",
                    "Analyzed competitor data to pivot strategies for maximum market share in the US territory.",
                ],
                tech: ["Meta Business Suite", "GMB SEO", "LinkedIn Ads", "Competitor Analysis", "Content Planning"],
            },
        ],
        accent: "orange"
    },
    {
        role: "Founder & Digital Marketing Manager",
        company: "Adopt Growth",
        period: "July 2010 - Present",
        description: [
            "Founded and scaled a full-service marketing agency focusing on performance-driven growth.",
            "Specialized in the Real Estate and E-commerce sectors with a focus on ROI and lead quality.",
            "Leveraging 15+ years of experience to mentor startups and scale established brands globally.",
        ],
        projects: [
            {
                name: "Real Estate & E-com Scaling",
                details: [
                    "Generated 500+ high-quality leads for Builtz Residencia and Anayaa Homes via targeted funnel strategies.",
                    "Achieved a consistent 8x to 10x ROAS for multiple E-commerce stores (Hamza Store, Zahra Stores).",
                    "Integrated CRM automation with Meta Ads to reduce lead response time by 60%.",
                ],
                tech: ["Meta Ads Manager", "Shopify Marketing", "Lead Funnels", "CRM Integration", "Pixel/CAPI"],
            },
        ],
        accent: "purple"
    },
];

export default function Experiences() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Professional Journey
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10 max-w-2xl mx-auto">
                    A 15-year track record of turning digital presence into profitable assets for brands across Pakistan, Dubai, and the USA.
                </p>
                <div className="relative border-l-4 border-gray-300 dark:border-gray-700 pl-6 md:pl-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={controls}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="relative mb-16"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[38px] md:-left-[54px] top-0 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors
                                ${exp.accent === 'orange' ? 'bg-orange-500' : 'bg-purple-600'}`}>
                                <BarChart3 className="text-white" size={16} />
                            </div>

                            {/* Experience Card */}
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">{exp.role}</h2>
                                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${exp.accent === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                                        {exp.period}
                                    </span>
                                </div>
                                <h3 className={`text-lg font-bold mt-1 ${exp.accent === 'orange' ? 'text-orange-500' : 'text-purple-500'}`}>
                                    {exp.company}
                                </h3>

                                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <span className={`mr-2 font-bold ${exp.accent === 'orange' ? 'text-orange-500' : 'text-purple-500'}`}>▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Desktop View: Key Campaigns */}
                                <div className="hidden md:block mt-6">
                                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-3">Key Campaigns & Outcomes:</h4>
                                    {exp.projects.map((project, i) => (
                                        <div key={i} className="mt-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-l-4 border-current">
                                            <h5 className="text-md font-bold text-gray-900 dark:text-gray-100">{project.name}</h5>
                                            <ul className="list-inside mt-2 text-sm text-gray-700 dark:text-gray-400 space-y-1">
                                                {project.details.map((point, j) => (
                                                    <li key={j} className="flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tech.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${exp.accent === 'orange' ? 'border-orange-200 text-orange-600' : 'border-purple-200 text-purple-600'}`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile View: Accordion */}
                                <div className="md:hidden mt-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className={`flex items-center justify-between w-full p-3 font-bold rounded-lg transition-colors
                                            ${exp.accent === 'orange' ? 'bg-orange-50 text-orange-700' : 'bg-purple-50 text-purple-700'}`}
                                    >
                                        <span>{openIndex === index ? "Hide Performance" : "See Performance Details"}</span>
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>

                                    <motion.div
                                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        {openIndex === index &&
                                            exp.projects.map((project, i) => (
                                                <div key={i} className="mt-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                                    <h5 className="font-bold text-gray-900 dark:text-gray-100">{project.name}</h5>
                                                    <ul className="mt-2 text-xs text-gray-700 dark:text-gray-400 space-y-2">
                                                        {project.details.map((point, j) => (
                                                            <li key={j}>• {point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}