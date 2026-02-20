"use client";

import MovingBorderButton from "@/components/button/moving-border-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaRocket } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import Footer from "@/components/footer/footer";
import { About } from "@/components/pages/about/about";

export default function AboutPage() {
    return (
        <div>
            {/* Lamp Effect Section */}
            <About/>
            
            <section className="min-h-screen py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Profile Image - Updated to Danish's About Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/danish-profile.jpeg" // Is name se image rename kar lena
                            alt="Muhammad Danish"
                            width={500}
                            height={500}
                            className="rounded-2xl w-full object-cover shadow-2xl border-b-8 border-orange-500"
                        />
                    </motion.div>

                    {/* About Text - Marketing Focused */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Growth Strategist <br/> 
                            <span className="text-orange-500">& Marketing Expert</span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            Hey! I&apos;m <span className="font-bold text-purple-600 dark:text-purple-400">Muhammad Danish</span>, a results-driven Marketing Specialist with over <span className="font-bold underline decoration-orange-500">15 years of experience</span> in driving digital growth. 
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            Currently, I serve as a <b>Social Media Manager at DM Worx LLC</b>, leading upscale digital strategies for US-based clients. My approach combines technical precision—rooted in my Computer Science background—with creative storytelling to build bridges between brands and global audiences.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="/projects" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 py-3 rounded-full transition-all">
                                View My Campaigns
                            </Link>
                            <Link href="/contact">
                                <MovingBorderButton title="Scale Your Brand" icon={<FaLocationArrow />} position="right" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Sections */}
                <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
                    {/* Education - Technical Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border-l-4 border-purple-500"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaGraduationCap className="text-purple-500" /> Education
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            🎓 <b>Associate Degree in Computer Science</b><br />
                            This technical edge allows me to master algorithms, automation, and CRM integrations faster than traditional marketers.
                        </p>
                    </motion.div>

                    {/* Location & Global Reach */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border-l-4 border-orange-500"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaMapMarkerAlt className="text-orange-500" /> Global Perspective
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            📍 Based in <b>Lahore, Pakistan</b><br />
                            Experience managing markets in **USA, UK, and Dubai**. Speaker at the EcomX Summit 2025, Dubai.
                        </p>
                    </motion.div>

                    {/* Marketing Mastery Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border-l-4 border-green-500"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <BiTargetLock className="text-green-500" /> Core Specialization
                        </h2>
                        <ul className="text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-y-2 font-medium">
                            <li>🎯 Meta Ads (Expert)</li>
                            <li>🏠 Real Estate Marketing</li>
                            <li>📈 ROAS Scaling</li>
                            <li>🔍 GMB Optimization</li>
                            <li>✍️ Content Strategy</li>
                            <li>🤖 Marketing Automation</li>
                        </ul>
                    </motion.div>

                    {/* Career Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border-l-4 border-blue-500"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaRocket className="text-blue-500" /> Key Impact
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            🚀 Founder of <b>Adopt Growth</b> Agency.<br />
                            💼 Managing complex funnels for Real Estate giants and E-commerce brands with proven 10x ROI.
                        </p>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}