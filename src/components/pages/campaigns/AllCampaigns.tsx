"use client";

import { ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";

type Project = {
  title: string;
  description: string;
  image: string;
  results: string;
  live: string;
  tech: string[];
};

export default function AllCampaigns() {
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
        setProjects(formatted);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-black text-center mb-4 uppercase tracking-tight">
            All <span className="text-orange-500">Campaigns</span>
          </h1>

          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Explore my complete history of high-impact marketing campaigns and brand growth strategies.
          </p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] overflow-hidden border shadow-2xl group"
              >
                
                {/* Bigger Image Container */}
                <div className="relative h-[380px] md:h-[420px] bg-gray-100 flex items-center justify-center p-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Tech Tags */}
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-bold uppercase px-3 py-1 bg-orange-500 text-white rounded-full shadow"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t">
                    <Link
                      href={project.results}
                      target="_blank"
                      className="flex items-center gap-2 font-bold text-green-600"
                    >
                      <TrendingUp className="w-5 h-5" />
                      PERFORMANCE
                    </Link>

                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 font-bold text-purple-500"
                    >
                      LIVE PAGE
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}