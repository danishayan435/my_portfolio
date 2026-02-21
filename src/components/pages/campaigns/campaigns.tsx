"use client";
import { ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  results: string;
  live: string;
  tech: string[];
};

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        const formatted = data.map((p: any) => ({
          title: p.name,
          description: p.description,
          image: p.img,
          results: p.resultsLink || "#", 
          live: p.liveLink || "#",
          tech: p.technology.split(",").map((t: string) => t.trim()),
        }));
        setProjects(formatted.slice(0, 3));
      } catch (err) { console.error(err); }
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">Featured Campaigns</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="rounded-2xl overflow-hidden border dark:border-gray-700 shadow-lg">
              <div className="relative h-52 w-full"><Image src={project.image} alt={project.title} fill className="object-cover" /></div>
              <div className="p-5">
                <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                <div className="flex items-center justify-between mt-6 pt-4 border-t">
                  <Link href={project.results} target="_blank" className="flex items-center gap-2 text-sm font-bold text-green-600"><TrendingUp className="w-4 h-4" /> ROAS</Link>
                  <Link href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-bold text-orange-500">Live <ExternalLink className="w-4 h-4" /></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/campaigns" className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold">
            Explore All Campagins →
          </Link>
        </div>
      </div>
    </section>
  );
}