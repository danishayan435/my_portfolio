"use client";
import Navbar from "@/components/navbar/navbar";
import ScrollToggleButton from "./scroll-button/ScrollToggleButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
        <Navbar />
        <div className="w-full bg-slate-100 dark:bg-gray-900">{children}</div>
        <ScrollToggleButton/>
    </div>
  );
}
