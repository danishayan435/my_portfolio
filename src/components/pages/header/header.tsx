"use client";
import { Boxes } from "../../ui/background-boxes";
import Image from "next/image"; 
import { FloatingDockDemo } from "../../floating-dock/floating-dock";
import ColourfulText from "../../ui/colourful-text";
import MovingBorderButton from "@/components/button/moving-border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export function Header() {
    return (
        <div className="h-[700px] relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-7xl gap-5 md:gap-0">
                <div className="md:w-[40%] w-[95%] flex justify-center items-center">
                    <Image
                        src="/images/danish.jpeg"
                        alt="Muhammad Danish"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg border-4 border-orange-500"
                    />
                </div>
                <div className="md:w-[60%] w-[95%] flex flex-col justify-center items-start text-white">
                    <h1 className="text-2xl md:text-[50px] font-bold text-center md:mb-5 text-slate-300">
                        Bridging the Gap Between <br /> 
                    </h1>
                    <h1 className="text-2xl md:text-[56px] font-bold text-center md:mb-5 text-slate-300">
                        <ColourfulText text="Brands and Global Audiences." />
                    </h1>
                    
                    <p className="md:text-3xl text-xl text-orange-500 mt-4 font-gotham font-bold animate-pulse">
                        Muhammad Danish
                    </p>
                    <p className="text-[18px] text-slate-400 font-gotham font-semibold">
                        Senior Social Media Manager & Growth Strategist
                    </p>
                    
                    <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                        With over 15 years of marketing excellence and a strong technical foundation in Computer Science, 
                        I specialize in transforming digital presence into profitable assets. Currently serving as 
                        a Social Media Manager at <b>DM Worx LLC (USA)</b>, I lead data-driven growth strategies 
                        for global markets.
                    </p>

                    <div className="mt-5 flex justify-evenly md:w-[80%] w-full mx-auto gap-5">
                        <div className="w-[50%]">
                            <Link href={"/contact"} target="_blank" className="w-full">
                                <button className="w-full h-[45px] md:px-8 px-4 py-2 rounded-full bg-[#F58220] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#F58220]">
                                    Hire Me
                                </button>
                            </Link>
                        </div>
                        <div className="w-[50%]">
                            <Link href={"/campaigns"} className="w-full">                            
                                <MovingBorderButton
                                    title="View My Campaigns"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </Link>
                        </div>
                    </div>
                    <FloatingDockDemo />
                </div>
            </div>
        </div>
    );
}