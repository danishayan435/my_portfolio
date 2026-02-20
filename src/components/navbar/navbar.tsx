"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/providers/ThemeProviders";
import Link from "next/link";
import AnimatedButton from "../button/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const navItems = ["Home", "About", "Campaigns", "Services", "Experience", "Contact"];
    
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const menuVariants = {
        open: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
        closed: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 font-gotham
      ${isScrolled ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md" : "bg-white dark:bg-gray-900"}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                        MUHAMMAD <span className="text-orange-500">DANISH</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                // Logic: Agar Home hai toh '/', warna folder name
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="relative group text-gray-900 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300 font-bold text-sm tracking-wide"
                            >
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-full bg-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-300"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="w-5 h-5 text-gray-800" />
                            ) : (
                                <SunIcon className="w-5 h-5 text-yellow-400" />
                            )}
                        </button>
                        <div className="hidden md:flex">
<<<<<<< HEAD
<<<<<<< HEAD
                            <Link href={`https://drive.google.com/file/d/1f4t-NkvF2uQsHwIKm9RoF6x3tBKdjsyL/view?usp=sharing`} target="_blank">
                                <AnimatedButton text="Download CV" />
=======
                            <Link href={`#`} target="_blank">
                                <AnimatedButton text="Get Strategy" /> 
>>>>>>> 07a40eb (My Portfolio)
=======
                            <Link href={`#`} target="_blank">
                                <AnimatedButton text="Get Strategy" /> 
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
                            </Link>
                        </div>
                        <button
                            className="md:hidden text-gray-900 dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 font-bold transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
<<<<<<< HEAD
<<<<<<< HEAD
                        </div>
                        <div className="block md:hidden mx-5 pb-4">
                            <Link href={`https://drive.google.com/file/d/1f4t-NkvF2uQsHwIKm9RoF6x3tBKdjsyL/view?usp=sharing`} target="_blank">
                                <AnimatedButton text="Download CV" />
                            </Link>
=======
=======
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
                            <div className="pt-4">
                                <Link href={`#`} target="_blank" className="w-full inline-block text-center">
                                    <AnimatedButton text="Get Strategy" />
                                </Link>
                            </div>
<<<<<<< HEAD
>>>>>>> 07a40eb (My Portfolio)
=======
>>>>>>> 07a40ebdf70e1b1b1b463140f78c4aa5bbbf2bce
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;