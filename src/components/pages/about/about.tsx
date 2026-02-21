"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";


export function About() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl uppercase font-bold"
      >
        MUHAMMAD DANISH
      </motion.h1>
            <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-slate-400 text-center text-lg md:text-2xl mt-4 font-light tracking-[0.2em] uppercase"
      >
        15+ Years of Marketing Excellence
      </motion.p>

    </LampContainer>
  );
}