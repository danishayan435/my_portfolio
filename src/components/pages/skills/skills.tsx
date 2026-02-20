"use client";

import { motion } from "framer-motion";
import {
    Target,      // For Paid Ads
    Share2,      // For Social Media
    Home,        // For Real Estate focus
    TrendingUp,  // For Growth/Analytics
    Cpu,         // For Technical/CS Background
    PenTool,     // For Content/Creative
} from "lucide-react";

const categorizedSkills = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
        category: "Programming Languages",
        icon: Code2,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Dart"],
=======
=======
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
        category: "Paid Advertising (Meta Ads)",
        icon: Target,
        skills: ["Ads Manager", "Pixel & CAPI", "ROAS Scaling", "Budget Optimization", "Retargeting"],
        color: "orange",
<<<<<<< HEAD
>>>>>>> 07a40eb (My Portfolio)
=======
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
    },
    {
        category: "Social Media Management",
        icon: Share2,
        skills: ["Content Strategy", "Viral Reels", "Community Mgmt", "Branding", "Engagement"],
        color: "purple",
    },
    {
        category: "Real Estate Marketing",
        icon: Home,
        skills: ["Lead Gen Funnels", "CRM Automation", "Drone Content", "Listing Optimization"],
        color: "green",
    },
    {
        category: "Growth & Analytics",
        icon: TrendingUp,
        skills: ["Competitor Analysis", "Looker Studio", "GMB SEO", "Conversion Tracking"],
        color: "orange",
    },
    {
        category: "Technical Foundation",
        icon: Cpu,
        skills: ["Computer Science Core", "Ad Automation", "Web Integration", "CRM Tech"],
        color: "purple",
    },
    {
        category: "Content & Creative",
        icon: PenTool,
        skills: ["Ad Copywriting", "Creative Direction", "AI Tools", "Graphic Strategy"],
        color: "green",
    },
];

export default function SkillsSection() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Expertise & Skills
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
                    Combining a technical CS background with 15 years of digital marketing mastery to scale brands globally.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {categorizedSkills.map((group, i) => {
                        const Icon = group.icon;
                        const colorClass = 
                            group.color === "orange" ? "blue-600 dark:text-orange-400" : // Using blue-600 for base but actually mapping to theme
                            group.color === "purple" ? "purple-600 dark:text-purple-400" : 
                            "green-600 dark:text-green-400";
                        
                        const bgClass = 
                            group.color === "orange" ? "bg-orange-100 dark:bg-orange-900/20" : 
                            group.color === "purple" ? "bg-purple-100 dark:bg-purple-900/20" : 
                            "bg-green-100 dark:bg-green-900/20";

                        const textClass = 
                            group.color === "orange" ? "text-orange-900 dark:text-orange-100 bg-orange-100 dark:bg-orange-900/40" : 
                            group.color === "purple" ? "text-purple-900 dark:text-purple-100 bg-purple-100 dark:bg-purple-900/40" : 
                            "text-green-900 dark:text-green-100 bg-green-100 dark:bg-green-900/40";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 ${bgClass} rounded-full`}>
                                        <Icon className={group.color === "orange" ? "text-orange-600" : group.color === "purple" ? "text-purple-600" : "text-green-600"} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {group.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {group.skills.map((skill, j) => (
                                        <div
                                            key={j}
                                            className={`rounded-lg ${textClass} py-1.5 px-3 text-xs font-bold transition-all duration-200 shadow-sm border border-transparent hover:border-current`}
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic Glow on hover */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${group.color === "orange" ? "from-orange-400" : group.color === "purple" ? "from-purple-400" : "from-green-400"} to-transparent opacity-0 group-hover:opacity-5 blur-xl transition duration-300 pointer-events-none rounded-2xl`} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}