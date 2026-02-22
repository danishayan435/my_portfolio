"use client";

import Image from "next/image";
import { FloatingDockDemo } from "../../floating-dock/floating-dock";
import ColourfulText from "../../ui/colourful-text";
import MovingBorderButton from "@/components/button/moving-border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export function Header() {
    return (
        <div className="relative w-full overflow-hidden bg-white flex items-center justify-center min-h-screen py-10 md:py-0">
            
            {/* Background Overlay */}
            <div className="absolute inset-0 w-full h-full bg-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-7xl gap-10 md:gap-0 px-5">

                {/* Image Section */}
                <div className="md:w-[40%] w-full flex justify-center items-center mt-10 md:mt-0">
                    <Image
                        src="/images/danish.jpeg"
                        alt="Muhammad Danish"
                        width={280}
                        height={280}
                        className="rounded-full shadow-xl border-4 border-orange-500 object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-[60%] w-full flex flex-col justify-center items-center md:items-start text-black text-center md:text-left">

                    <h1 className="text-2xl sm:text-3xl md:text-[48px] font-bold mb-2">
                        Bridging the Gap Between
                    </h1>

                    <h1 className="text-2xl sm:text-3xl md:text-[52px] font-bold mb-4">
                        <ColourfulText text="Brands and Global Audiences." />
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-gotham font-bold animate-pulse">
                        Muhammad Danish
                    </p>

                    <p className="text-[16px] sm:text-[18px] text-gray-700 font-gotham font-semibold mt-1">
                        Senior Social Media Manager & Growth Strategist
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed max-w-xl">
                        With over 15 years of marketing excellence and a strong technical foundation in Computer Science,
                        I specialize in transforming digital presence into profitable assets. Currently serving as
                        a Social Media Manager at <b>DM Worx LLC (USA)</b>, I lead data-driven growth strategies
                        for global markets.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                        <Link href={"/contact"} target="_blank" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#F58220] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#F58220]">
                                Hire Me
                            </button>
                        </Link>

                        <Link href={"/campaigns"} className="w-full sm:w-auto">
                            <MovingBorderButton
                                title="View My Campaigns"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </Link>

                    </div>

                    {/* Floating Dock */}
                    <div className="mt-8">
                        <FloatingDockDemo />
                    </div>

                </div>
            </div>
        </div>
    );
}