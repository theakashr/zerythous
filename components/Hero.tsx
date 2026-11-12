"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const nodes = [
  { id: "ai", label: "AI AGENTS", status: "ACTIVE", desc: "LANGCHAIN / GEMINI 2.0 / REACT SWARMS", x: 14, y: 22 },
  { id: "api", label: "API GATEWAY", status: "ONLINE", desc: "FASTAPI / REST / GRAPHQL / TRPC", x: 82, y: 24 },
  { id: "data", label: "STATE & RLS", status: "SYNCED", desc: "POSTGRES / SUPABASE / REDIS", x: 18, y: 72 },
  { id: "web", label: "EDGE CLIENT", status: "READY", desc: "NEXT.JS 16 / REACT 19 / TAILWIND", x: 84, y: 74 },
  { id: "cloud", label: "CLOUD INFRA", status: "SCALING", desc: "VERCEL EDGE / AWS / DOCKER", x: 50, y: 88 },
  { id: "realtime", label: "EVENT MESH", status: "STREAMING", desc: "WEBSOCKETS / PUBSUB / RESEND", x: 50, y: 12 },
];

const highlights = [
  { label: "Client IP Ownership", value: "100%", sub: "Full Source & Infra" },
  { label: "Systems Deployed", value: "6+", sub: "AI & Full-Stack Apps" },
  { label: "Performance SLA", value: "95+", sub: "Lighthouse & Speed" },
  { label: "Agent Response", value: "<350ms", sub: "Multi-Agent Latency" },
];

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Ambient Aurora Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[800px] h-[550px] aurora-glow-purple blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] aurora-glow-blue blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 grid-pattern-dual opacity-35 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* LEFT 50% Content */}
          <div className="w-full lg:w-[50%] flex flex-col relative z-20 mt-8 md:mt-0">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/90 border border-black/[0.08] dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-black/60 backdrop-blur-md mb-8 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs tracking-wider text-[#52525B] dark:text-neutral-300 uppercase font-medium">
                ACCEPTING SELECT ENTERPRISE COMMISSIONS // 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-[12vw] sm:text-7xl md:text-[80px] lg:text-[92px] leading-[0.92] tracking-tighter mb-8 font-extrabold font-heading text-[#09090B] dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>WE BUILD</span><br/>
              <span className="text-accent-purple">SYSTEMS</span><br/>
              <span>THAT MOVE</span><br/>
              <span>BUSINESS.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-[#52525B] dark:text-neutral-400 max-w-lg mb-10 font-light leading-relaxed">
                We architect custom high-performance software, autonomous AI swarms, and scalable digital platforms for founders, teams, and high-growth enterprises.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
            >
              <Link
                href="#project-builder"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white text-xs font-mono font-medium tracking-widest rounded-full transition-all duration-300 shadow-lg hover:shadow-accent-purple/20 group"
              >
                START A PROJECT
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#work"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent text-[#09090B] dark:text-white text-xs font-mono font-medium tracking-widest border border-black/15 dark:border-white/15 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
              >
                EXPLORE CASE STUDIES
              </Link>
            </motion.div>

            {/* Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-8 border-t border-black/[0.08] dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-[#09090B] dark:text-white tracking-tight">{h.value}</span>
                  <span className="font-mono text-[10px] text-accent-purple uppercase tracking-wider mt-0.5 font-semibold">{h.label}</span>
                  <span className="text-[10px] text-[#71717A] dark:text-neutral-400 mt-0.5">{h.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT 50% - Zerythous System Core */}
          <div className="w-full lg:w-[50%] h-[500px] lg:h-[650px] relative flex items-center justify-center">
            {/* Center glow */}
            <div className="absolute inset-0 aurora-glow-purple opacity-70 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="relative w-full max-w-[550px] aspect-square"
            >
              {/* Connecting Bus Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {nodes.map((node, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke="currentColor"
                    className="text-accent-purple/20 dark:text-accent-purple/30"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                  />
                ))}
              </svg>

              {/* Center System Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-accent-purple/30 border-t-accent-purple border-r-accent-blue/50 flex items-center justify-center animate-spin absolute shadow-[0_0_40px_rgba(124,58,237,0.15)]" style={{ animationDuration: "25s" }} />
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-accent-blue/20 border-b-accent-purple/40 animate-spin absolute" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/15 rounded-full flex flex-col items-center justify-center z-10 shadow-[0_0_35px_rgba(124,58,237,0.2)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-purple/10 animate-pulse" />
                  <span className="font-mono text-[9px] md:text-[11px] tracking-widest text-[#09090B] dark:text-white z-10 text-center leading-tight font-extrabold">
                    ZERYTHOUS<br /><span className="text-accent-purple">CORE</span>
                  </span>
                </div>
              </div>

              {/* Satellite System Nodes */}
              {nodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    className="absolute z-20 group cursor-default"
                    style={{
                      top: `${node.y}%`,
                      left: `${node.x}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="relative">
                      <div className={cn(
                        "flex flex-col items-center p-3 rounded-xl border backdrop-blur-xl transition-all duration-300",
                        isHovered 
                          ? "bg-white dark:bg-neutral-900 border-accent-purple shadow-[0_4px_25px_rgba(124,58,237,0.25)] scale-110 z-30" 
                          : "bg-white/80 dark:bg-neutral-950/80 border-black/10 dark:border-white/10 z-20 hover:border-accent-purple/40"
                      )}>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-[#09090B] dark:text-white">{node.label}</span>
                          <span className="text-[10px] font-mono text-[#71717A] dark:text-neutral-500">/</span>
                          <span className={cn(
                            "font-mono text-[10px] tracking-wider font-semibold",
                            isHovered ? "text-accent-purple" : "text-[#52525B] dark:text-neutral-400"
                          )}>
                            {node.status}
                          </span>
                        </div>

                        {/* Interactive dropdown description */}
                        <div className={cn(
                          "overflow-hidden transition-all duration-300 w-max text-center",
                          isHovered ? "max-h-12 opacity-100 mt-2" : "max-h-0 opacity-0"
                        )}>
                          <span className="text-[10px] text-accent-purple font-mono font-medium">
                            {node.desc}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
