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
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Featured Campaigns
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden border shadow-xl bg-white transition duration-300"
            >
              
              {/* Bigger Image Container */}
              <div className="relative h-72 md:h-80 w-full bg-gray-50 flex items-center justify-center p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mt-6 pt-4 border-t">
                  
                  <Link
                    href={project.results}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-green-600"
                  >
                    <TrendingUp className="w-4 h-4" />
                    ROAS
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-orange-500"
                  >
                    Live
                    <ExternalLink className="w-4 h-4" />
                  </Link>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/campaigns"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg shadow-lg"
          >
            Explore All Campaigns →
          </Link>
        </div>

      </div>
    </section>
  );
}