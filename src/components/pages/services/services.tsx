"use client";
import { motion } from "framer-motion";
import { 
    Target, 
    Share2, 
    Home, 
    TrendingUp, 
    Search, 
    Zap, 
    CheckCircle2, 
    ArrowRight 
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer/footer";

const services = [
    {
        title: "Meta Ads & Performance Marketing",
        description: "Expert-level Facebook and Instagram ad campaigns designed to maximize ROI. We focus on data-driven audience targeting and high-converting ad copies.",
        icon: <Target className="w-8 h-8 text-orange-500" />,
        features: ["Pixel & CAPI Setup", "A/B Testing", "Retargeting Funnels", "ROAS Optimization"],
        color: "border-orange-500/50"
    },
    {
        title: "Social Media Management (USA/UK)",
        description: "Full-scale management for international brands. We handle everything from content scheduling to community engagement with a focus on upscale positioning.",
        icon: <Share2 className="w-8 h-8 text-purple-500" />,
        features: ["Content Calendar", "Community Mgmt", "Global Brand Voice", "Engagement Growth"],
        color: "border-purple-500/50"
    },
    {
        title: "Real Estate Growth Solutions",
        description: "Specialized marketing for property giants. We generate high-intent leads using automated funnels and CRM integrations specifically for the real estate niche.",
        icon: <Home className="w-8 h-8 text-green-500" />,
        features: ["Lead Gen Funnels", "CRM Integration", "Drone Content Strategy", "Listing Optimization"],
        color: "border-green-500/50"
    },
    {
        title: "E-commerce Scaling & ROAS",
        description: "Scaling Shopify and WooCommerce stores to 7-figures. We optimize every step of the customer journey to ensure sustainable growth and high profitability.",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        features: ["Conversion Rate Opt.", "Funnel Building", "Scale-up Strategy", "Influencer Collabs"],
        color: "border-yellow-500/50"
    },
    {
        title: "Search & GMB Optimization",
        description: "Dominating local search results. We help service-based businesses in the US and Pakistan rank higher on Google Maps and organic search.",
        icon: <Search className="w-8 h-8 text-blue-500" />,
        features: ["Local SEO", "GMB Management", "Keyword Research", "Competitor Analysis"],
        color: "border-blue-500/50"
    },
    {
        title: "Growth Strategy & Consulting",
        description: "Tailored digital roadmaps for startups and established brands. We use 15+ years of experience to solve complex marketing challenges.",
        icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
        features: ["Market Research", "Audit & Analysis", "Revenue Forecasting", "Scaling Roadmaps"],
        color: "border-pink-500/50"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-black transition-colors duration-300">
            <section className="py-24 px-6 bg-slate-50 dark:bg-gray-950">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-orange-500 font-bold tracking-widest uppercase text-sm"
                    >
                        Professional Solutions
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 mb-6 tracking-tighter"
                    >
                        SERVICES THAT DRIVE <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">PROFITABLE GROWTH</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Leveraging 15+ years of cross-border marketing experience to build scalable digital assets. 
                        We don't just manage ads; we build bridges between brands and global audiences.
                    </motion.p>
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl bg-white dark:bg-gray-900 border ${service.color} border-opacity-20 hover:border-opacity-100 transition-all duration-500 shadow-sm hover:shadow-2xl group relative overflow-hidden`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black text-orange-500 hover:gap-4 transition-all uppercase tracking-wider">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-orange-500 to-purple-600 p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">READY TO SCALE YOUR BRAND?</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Stop guessing and start growing. Book a strategy call today and let's map out your 12-month growth plan.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-block bg-white text-orange-600 font-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
                    >
                        BOOK A FREE AUDIT
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}