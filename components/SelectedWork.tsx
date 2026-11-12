"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Activity,
  ShieldAlert,
  Zap,
  Search,
  ChevronRight,
  ArrowDown,
  Layers,
  Sparkles,
  Cpu,
  Radio,
  FileText,
  Bot,
  SendHorizontal
} from "lucide-react";
import { CaseStudyModal, CaseStudyData } from "@/components/CaseStudyModal";
import { CASE_STUDIES } from "@/lib/data/case-studies";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = [
  { id: "all", label: "ALL ARCHITECTURES (6)" },
  { id: "ai", label: "AI & MULTI-AGENT (5)" },
  { id: "saas", label: "INTELLIGENT SAAS (2)" },
  { id: "realtime", label: "REAL-TIME & WEBSOCKETS (2)" },
];

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  const isVisible = (categories: string[]) => {
    if (activeCategory === "all") return true;
    return categories.includes(activeCategory);
  };

  return (
    <section id="work" className="py-28 md:py-44 bg-background text-foreground border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300">
      {/* Background Aurora Glow */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] rounded-full aurora-glow-purple blur-3xl pointer-events-none opacity-30" />
      <div className="absolute inset-0 grid-pattern-dual pointer-events-none opacity-25" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs mb-4 font-semibold"
          >
            <Activity className="w-3.5 h-3.5" />
            02 / SELECTED WORK & CASE STUDIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold tracking-tight text-[#09090B] dark:text-white leading-none mb-10 font-heading"
          >
            Built for the{" "}
            <span className="text-accent-purple">
              real world.
            </span>
          </motion.h2>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B] font-bold shadow-md scale-105"
                    : "bg-white/80 dark:bg-neutral-900/80 text-[#52525B] dark:text-neutral-400 border border-black/10 dark:border-white/10 hover:text-[#09090B] dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-32 md:space-y-48">
          
          {/* PROJECT 1: RescueAI */}
          {isVisible(["ai", "realtime"]) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-0"
            >
              <div className="w-full lg:w-[68%] lg:pr-14 relative">
                <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] bg-white/90 dark:bg-neutral-950/90 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden relative group-hover:border-accent-purple/40 transition-all duration-500 flex flex-col shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80">
                  {/* Mock UI Header */}
                  <div className="h-10 border-b border-black/[0.08] dark:border-white/[0.08] bg-neutral-100/80 dark:bg-neutral-900/90 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-[11px] font-mono text-[#71717A] dark:text-neutral-400 ml-2">rescueai.telemetry.mesh</span>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
                      <span className="text-[10px] font-mono text-accent-purple font-semibold">LIVE MULTI-AGENT SWARM</span>
                    </div>
                  </div>
                  {/* Mock UI Body */}
                  <div className="flex-1 relative flex">
                    {/* Left panel - incidents */}
                    <div className="hidden sm:flex flex-col w-52 border-r border-black/[0.08] dark:border-white/[0.08] p-3.5 bg-neutral-50/70 dark:bg-neutral-950/60">
                      <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                        <span>ACTIVE INCIDENTS</span>
                        <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-500 dark:text-red-400 text-[9px] font-bold">3 CRITICAL</span>
                      </div>
                      {[
                        { title: "Bridge Washout #402", time: "14s ago", priority: "CRITICAL", eta: "3.2m" },
                        { title: "Sub-Station Flood", time: "1m ago", priority: "HIGH", eta: "6.5m" },
                        { title: "Evacuation Zone B", time: "3m ago", priority: "EN-ROUTE", eta: "1.8m" },
                      ].map((item, idx) => (
                        <div key={idx} className="mb-2 p-2.5 bg-white dark:bg-neutral-900/80 border border-black/[0.06] dark:border-white/[0.06] rounded-lg flex flex-col gap-1.5 shadow-sm dark:shadow-none">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-[#09090B] dark:text-white font-bold truncate">{item.title}</span>
                            <span className={item.priority === "CRITICAL" ? "text-red-500 font-bold" : "text-amber-500"}>
                              {item.priority}
                            </span>
                          </div>
                          <div className="flex justify-between text-[9px] font-mono text-[#71717A] dark:text-neutral-400">
                            <span>{item.time}</span>
                            <span className="text-accent-purple font-semibold">ETA: {item.eta}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Main map area */}
                    <div className="flex-1 bg-neutral-100/40 dark:bg-black/60 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 grid-pattern-dual opacity-30" />
                      
                      {/* Radar sweep lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 50 Q 25 30 50 60 T 100 40" stroke="rgba(124,58,237,0.5)" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
                        <path d="M0 20 Q 30 50 60 20 T 100 70" stroke="rgba(37,99,235,0.5)" fill="none" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" className="text-black/10 dark:text-white/10" fill="none" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="15" stroke="currentColor" className="text-black/10 dark:text-white/10" fill="none" strokeWidth="0.5" />
                      </svg>
                      
                      {/* Markers */}
                      <div className="absolute top-1/3 left-1/3 flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full animate-ping absolute" />
                        <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-black z-10 shadow-lg shadow-red-500/50" />
                        <div className="absolute top-full mt-2 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-lg whitespace-nowrap">
                          <ShieldAlert size={12} className="text-red-500" />
                          <span className="text-[10px] font-mono text-[#09090B] dark:text-white font-bold">12.9716° N, 77.5946° E</span>
                        </div>
                      </div>

                      <div className="absolute top-1/2 right-1/4 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-accent-purple rounded-full border-2 border-white dark:border-black z-10 shadow-lg shadow-accent-purple/50" />
                        <div className="absolute left-full ml-2 bg-white dark:bg-neutral-900 border border-accent-purple/30 px-2.5 py-1 rounded text-[10px] font-mono text-accent-purple whitespace-nowrap font-bold shadow-md">
                          RESCUE-DRONE-04 [DISPATCHED]
                        </div>
                      </div>

                      {/* Overlay labels */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="px-2.5 py-1 bg-white/90 dark:bg-neutral-950/80 border border-accent-purple/30 rounded-md backdrop-blur-md text-[10px] font-mono text-accent-purple font-semibold shadow-sm">
                          OFFLINE-FIRST
                        </div>
                        <div className="px-2.5 py-1 bg-white/90 dark:bg-neutral-950/80 border border-black/10 dark:border-white/10 rounded-md backdrop-blur-md text-[10px] font-mono text-[#09090B] dark:text-white shadow-sm">
                          320ms AI TRIAGE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[32%] flex flex-col justify-center">
                <div className="mb-6">
                  <p className="font-mono text-xs text-accent-purple mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Radio size={14} /> AI / Emergency Response Swarm
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#09090B] dark:text-white mb-6">RescueAI</h3>
                  <p className="text-base md:text-lg text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-10">
                    An offline-first AI-powered disaster response and emergency coordination ecosystem with sub-second triage dispatch.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES.rescueai)}
                    className="flex items-center justify-between px-6 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white font-medium rounded-xl transition-all duration-300 group/btn shadow-md text-left"
                  >
                    <span className="text-xs tracking-wider flex items-center gap-2 uppercase font-mono font-bold">
                      <Layers size={16} /> EXPLORE ARCHITECTURE SPEC
                    </span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://rescueai-ai.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#09090B] dark:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                    >
                      <span className="mr-2">LIVE DEMO</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://github.com/FuGen-India-Private-Ltd/rescue-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#52525B] dark:text-neutral-400 hover:text-[#09090B] dark:hover:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                    >
                      <span className="mr-2">GITHUB</span>
                      <GithubIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECT 2: ResumeAI */}
          {isVisible(["ai", "saas"]) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row-reverse gap-12 lg:gap-0"
            >
              <div className="w-full lg:w-[65%] lg:pl-14 relative">
                <div className="w-full aspect-[4/3] sm:aspect-video bg-white/90 dark:bg-neutral-950/90 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden relative group-hover:border-accent-purple/40 transition-all duration-500 shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80 p-6 flex flex-col">
                  {/* Floating SaaS Interface */}
                  <div className="flex-1 bg-neutral-50 dark:bg-neutral-900/90 border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-5 flex flex-col md:flex-row gap-5 relative overflow-hidden">
                    {/* Resume preview */}
                    <div className="flex-1 bg-white dark:bg-neutral-950 rounded-lg border border-black/[0.06] dark:border-white/[0.06] p-4 flex flex-col gap-3 shadow-sm dark:shadow-none">
                      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                        <div>
                          <div className="text-xs font-bold text-[#09090B] dark:text-white">Adarsh B A</div>
                          <div className="text-[10px] font-mono text-accent-purple font-medium">Senior Systems & AI Architect</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple font-mono text-[9px] font-bold">
                          VECTOR PARSED
                        </span>
                      </div>
                      <div className="space-y-2 pt-1 text-[11px] font-mono text-[#52525B] dark:text-neutral-400">
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900/80 border border-black/[0.04] dark:border-white/[0.04]">
                          <span className="text-[#09090B] dark:text-white block font-semibold mb-0.5">Autonomous Swarm Architect</span>
                          <span className="text-[10px]">Led multi-agent runtime processing 120k req/s at 14ms latency</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {["Next.js 16", "LangChain", "Vector RAG", "PostgreSQL RLS", "FastAPI"].map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-white dark:bg-neutral-900 border border-accent-purple/20 text-accent-purple text-[9px] font-semibold">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar - ATS Score & AI Insights */}
                    <div className="w-full md:w-56 flex flex-col gap-3.5">
                      <div className="bg-white dark:bg-neutral-950 border border-accent-purple/30 p-4 rounded-lg flex flex-col items-center justify-center relative overflow-hidden shadow-sm dark:shadow-lg dark:shadow-accent-purple/10">
                        <div className="absolute inset-0 bg-accent-purple/5" />
                        <span className="text-[10px] text-[#71717A] dark:text-neutral-400 font-mono mb-1 uppercase tracking-wider">SEMANTIC ATS MATCH</span>
                        <span className="text-4xl font-extrabold text-accent-purple font-heading">94.8%</span>
                        <span className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 mt-1">Cosine Similarity: 0.948</span>
                      </div>
                      
                      <div className="flex-1 bg-white dark:bg-neutral-950 border border-black/[0.06] dark:border-white/[0.06] p-3 rounded-lg flex flex-col gap-2.5 shadow-sm dark:shadow-none">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#09090B] dark:text-neutral-300">
                          <span className="flex items-center gap-1.5 text-accent-purple font-semibold">
                            <Sparkles size={12} /> AI RECOMMENDATIONS
                          </span>
                        </div>
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900/60 text-[10px] text-[#52525B] dark:text-neutral-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-1 shrink-0" />
                          <span>Matched 92% of target enterprise engineering keywords</span>
                        </div>
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900/60 text-[10px] text-[#52525B] dark:text-neutral-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1 shrink-0" />
                          <span>Elevated metric quantification index by 340%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[35%] flex flex-col justify-center">
                <div className="mb-6">
                  <p className="font-mono text-xs text-accent-purple mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <FileText size={14} /> AI / Career Intelligence
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#09090B] dark:text-white mb-6">ResumeAI</h3>
                  <p className="text-base md:text-lg text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-10">
                    Intelligent resume engineering platform with real-time semantic ATS scoring, LLM taxonomy rewrites, and career analytics.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES.resumeai)}
                    className="flex items-center justify-between px-6 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white font-medium rounded-xl transition-all duration-300 group/btn shadow-md text-left"
                  >
                    <span className="text-xs tracking-wider flex items-center gap-2 uppercase font-mono font-bold">
                      <Layers size={16} /> EXPLORE ARCHITECTURE SPEC
                    </span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://resume-app-ten-nu.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#09090B] dark:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                    >
                      <span className="mr-2">LIVE APP</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://github.com/theakashr/Ai-Resume-Builder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#52525B] dark:text-neutral-400 hover:text-[#09090B] dark:hover:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                    >
                      <span className="mr-2">GITHUB</span>
                      <GithubIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECT 3: AI Support Triage Agent */}
          {isVisible(["ai"]) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-0"
            >
              <div className="w-full lg:w-[60%] lg:pr-14 relative">
                <div className="w-full aspect-[4/3] sm:aspect-video bg-white/90 dark:bg-neutral-950/90 rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-accent-purple/40 transition-all duration-500 shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Tech architecture neural pipeline */}
                  <div className="flex flex-col items-center w-full max-w-md gap-2.5 z-10">
                    <div className="px-4 py-2.5 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/90 rounded-xl text-xs font-mono text-[#09090B] dark:text-white flex items-center justify-between w-full shadow-md">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
                        01 / INCOMING TICKET WEBHOOK
                      </span>
                      <span className="text-[10px] text-[#71717A] dark:text-neutral-400">1.8s SLA</span>
                    </div>
                    <ArrowDown size={14} className="text-[#71717A] dark:text-neutral-500" />
                    
                    <div className="px-4 py-2.5 border border-accent-purple/30 bg-accent-purple/5 dark:bg-accent-purple/20 rounded-xl text-xs font-mono text-accent-purple flex items-center justify-between w-full shadow-sm">
                      <span className="flex items-center gap-2">
                        <Zap size={14} className="text-accent-purple" />
                        02 / DETERMINISTIC CLASSIFIER & SENTIMENT
                      </span>
                      <span className="text-[10px] font-bold">99.1% ACCURACY</span>
                    </div>
                    <ArrowDown size={14} className="text-[#71717A] dark:text-neutral-500" />
                    
                    <div className="px-4 py-2.5 border border-accent-blue/30 bg-accent-blue/5 dark:bg-accent-blue/20 rounded-xl text-xs font-mono text-accent-blue flex items-center justify-between w-full shadow-sm">
                      <span className="flex items-center gap-2">
                        <Search size={14} className="text-accent-blue" />
                        03 / HYBRID VECTOR RETRIEVAL (BM25 + RAG)
                      </span>
                      <span className="text-[10px] font-bold">100% GROUNDED</span>
                    </div>
                    <ArrowDown size={14} className="text-[#71717A] dark:text-neutral-500" />

                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="p-3 border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/30 rounded-xl text-[11px] font-mono text-emerald-600 dark:text-emerald-400 text-center flex flex-col items-center justify-center gap-1 shadow-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="font-bold">AUTONOMOUS RESOLUTION</span>
                        <span className="text-[10px]">78.4% Zero-Touch</span>
                      </div>
                      <div className="p-3 border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/30 rounded-xl text-[11px] font-mono text-amber-600 dark:text-amber-400 text-center flex flex-col items-center justify-center gap-1 shadow-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <span className="font-bold">SENSITIVE ESCALATION</span>
                        <span className="text-[10px]">Senior Human Lead</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[40%] flex flex-col justify-center">
                <div className="mb-6">
                  <p className="font-mono text-xs text-accent-purple mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Bot size={14} /> Autonomous Multi-Agent / RAG
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#09090B] dark:text-white mb-6">AI Support Triage Agent</h3>
                  <p className="text-base md:text-lg text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-10">
                    Deterministic multi-agent customer support architecture that autonomously resolves 78% of incoming tickets with verified citations.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES.supportTriage)}
                    className="flex items-center justify-between px-6 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white font-medium rounded-xl transition-all duration-300 group/btn shadow-md text-left"
                  >
                    <span className="text-xs tracking-wider flex items-center gap-2 uppercase font-mono font-bold">
                      <Layers size={16} /> EXPLORE ARCHITECTURE SPEC
                    </span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="https://github.com/theakashr/AI-Support-Triage-Agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#09090B] dark:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                  >
                    <span className="mr-2">VIEW SOURCE REPOSITORY</span>
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECT 4: Autonomous SDR Agent */}
          {isVisible(["ai"]) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row-reverse gap-12 lg:gap-0"
            >
              <div className="w-full lg:w-[62%] lg:pl-14 relative">
                <div className="w-full aspect-[4/3] sm:aspect-video bg-white/90 dark:bg-neutral-950/90 rounded-2xl border border-black/10 dark:border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group-hover:border-accent-purple/40 transition-all duration-500 shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80">
                  <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3 text-xs font-mono text-[#71717A] dark:text-neutral-400">
                    <span className="flex items-center gap-2 text-accent-purple font-semibold">
                      <SendHorizontal size={14} /> SDR AGENT RUNTIME
                    </span>
                    <span>GDPR / CAN-SPAM VERIFIED</span>
                  </div>

                  {/* Terminal simulation */}
                  <div className="my-4 p-4 rounded-xl bg-neutral-900 dark:bg-black border border-white/[0.06] font-mono text-xs text-neutral-300 space-y-2">
                    <div className="text-accent-purple">[SIGNAL] Series B funding round detected for enterprise target</div>
                    <div className="text-accent-blue">[ENRICH] VP Engineering persona extracted: Ex-AWS, Pinecone user</div>
                    <div className="text-neutral-400">[SYNTHESIS] Hyper-personalized technical sequence drafted</div>
                    <div className="text-emerald-400">[DISPATCH] Sent via Resend API • Deliverability: 99.8%</div>
                  </div>

                  {/* Stat Counters */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.06]">
                      <div className="text-xl font-bold text-[#09090B] dark:text-white font-mono">$1.8M+</div>
                      <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 uppercase">Pipeline Value</div>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.06]">
                      <div className="text-xl font-bold text-accent-purple font-mono">62.4%</div>
                      <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 uppercase">Avg Open Rate</div>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.06]">
                      <div className="text-xl font-bold text-accent-blue font-mono">850ms</div>
                      <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 uppercase">Enrichment Speed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[38%] flex flex-col justify-center">
                <div className="mb-6">
                  <p className="font-mono text-xs text-accent-purple mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Cpu size={14} /> Autonomous Multi-Agent / Sales
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#09090B] dark:text-white mb-6">Autonomous SDR Agent</h3>
                  <p className="text-base md:text-lg text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-10">
                    Autonomous prospect enrichment, intent signal extraction, and personalized outreach sequences converting at 4x industry average.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES.sdrAgent)}
                    className="flex items-center justify-between px-6 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white font-medium rounded-xl transition-all duration-300 group/btn shadow-md text-left"
                  >
                    <span className="text-xs tracking-wider flex items-center gap-2 uppercase font-mono font-bold">
                      <Layers size={16} /> EXPLORE ARCHITECTURE SPEC
                    </span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="https://github.com/theakashr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3.5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.06] text-[#09090B] dark:text-white transition-all duration-300 font-medium text-xs tracking-wide"
                  >
                    <span className="mr-2">GITHUB REPOSITORY</span>
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECT 5: Gully Cricket App */}
          {isVisible(["realtime"]) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-0"
            >
              <div className="w-full lg:w-[65%] lg:pr-14 relative">
                <div className="w-full aspect-[4/3] sm:aspect-video bg-white/90 dark:bg-neutral-950/90 rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10 group-hover:border-accent-purple/40 transition-all duration-500 shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    {/* Mobile mockup */}
                    <div className="w-[220px] h-[95%] bg-neutral-100 dark:bg-neutral-900 border border-black/15 dark:border-white/15 rounded-[2rem] p-3 shadow-xl relative shrink-0">
                      <div className="w-full h-full border border-black/[0.06] dark:border-white/[0.06] rounded-[1.4rem] bg-white dark:bg-black overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-b from-accent-purple/20 to-transparent p-4 flex flex-col justify-end">
                          <span className="text-[10px] text-red-500 font-bold tracking-widest mb-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE TELEMETRY
                          </span>
                          <div className="text-3xl font-extrabold text-[#09090B] dark:text-white tracking-tighter">
                            156<span className="text-xl text-[#71717A] dark:text-neutral-400 font-normal">/4</span>
                          </div>
                          <div className="text-xs text-[#71717A] dark:text-neutral-400 font-mono">12.4 OVERS • RR 12.48</div>
                        </div>
                        <div className="flex-1 p-3.5 flex flex-col gap-2">
                          <div className="w-full p-2 bg-neutral-50 dark:bg-neutral-900/80 rounded-lg flex items-center justify-between text-[11px] font-mono border border-black/[0.04] dark:border-transparent">
                            <span className="text-[#09090B] dark:text-white">Striker: V. Sharma</span>
                            <span className="text-accent-purple font-bold">48* (22)</span>
                          </div>
                          <div className="w-full p-2 bg-neutral-50 dark:bg-neutral-900/80 rounded-lg flex items-center justify-between text-[11px] font-mono border border-black/[0.04] dark:border-transparent">
                            <span className="text-[#71717A] dark:text-neutral-400">Non-Striker: R. Ray</span>
                            <span className="text-[#52525B] dark:text-neutral-300">18 (11)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop telemetry widgets */}
                    <div className="flex-1 w-full flex flex-col gap-4">
                      <div className="h-24 bg-neutral-50 dark:bg-neutral-900/90 border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-4 flex items-center justify-between shadow-sm dark:shadow-none">
                        <div>
                          <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 mb-1 uppercase tracking-wider">SOCKET LATENCY</div>
                          <div className="text-2xl font-bold text-accent-purple font-mono">8ms Bidirectional</div>
                        </div>
                        <Activity className="text-accent-purple opacity-80" />
                      </div>
                      <div className="flex-1 bg-neutral-50 dark:bg-neutral-900/90 border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-4 shadow-sm dark:shadow-none">
                        <div className="text-[10px] font-mono text-[#71717A] dark:text-neutral-400 mb-3 uppercase tracking-wider">RUN RATE WAVEFORM & WIN PROBABILITY</div>
                        <div className="w-full h-24 relative flex items-end pb-2 gap-2">
                          {[40, 70, 45, 90, 60, 30, 80, 65, 88].map((h, i) => (
                            <div key={i} className="flex-1 bg-accent-purple/30 hover:bg-accent-purple transition-colors rounded-sm" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[35%] flex flex-col justify-center">
                <div className="mb-6">
                  <p className="font-mono text-xs text-accent-purple mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Radio size={14} /> Real-time Sports Platform
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#09090B] dark:text-white mb-6">Gully Cricket App</h3>
                  <p className="text-base md:text-lg text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-10">
                    Sub-second WebSocket ball-by-ball scoring, real-time match statistics, and live telemetry for high-concurrency tournaments.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/theakashr/gully-cricket-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-4 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white rounded-xl transition-all duration-300 group/btn font-medium"
                  >
                    <span className="text-sm tracking-wide mr-2 font-mono font-bold">VIEW GITHUB REPOSITORY</span>
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECT 6 & 7 GRID: AI Health Predictor & MediCart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
            
            {/* AI Health Predictor */}
            {isVisible(["ai"]) && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col group p-6 sm:p-8 rounded-2xl glass-card border border-black/10 dark:border-white/10 hover:border-accent-purple/40 transition-all duration-500"
              >
                <div className="w-full aspect-video bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden relative mb-6 p-5 flex flex-col justify-between">
                  <div className="flex gap-3">
                    <div className="flex-1 bg-white dark:bg-neutral-900/80 rounded-lg p-3 border border-black/[0.04] dark:border-white/[0.04]">
                      <div className="text-[9px] font-mono text-[#71717A] dark:text-neutral-400 mb-1">CLINICAL PREDICTION</div>
                      <div className="text-base font-bold text-accent-purple font-mono">98.2% Accuracy</div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-neutral-900/80 rounded-lg p-3 border border-black/[0.04] dark:border-white/[0.04]">
                      <div className="text-[9px] font-mono text-[#71717A] dark:text-neutral-400 mb-1">DATA POINTS</div>
                      <div className="text-base font-bold text-[#09090B] dark:text-white font-mono">420k Records</div>
                    </div>
                  </div>
                  <div className="h-16 relative flex items-end">
                    <svg className="w-full h-full text-accent-purple/30" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 40 L 0 20 Q 20 5 40 20 T 80 15 T 100 5 L 100 40 Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="font-mono text-xs text-accent-purple uppercase tracking-widest mb-2 font-semibold">AI / Healthcare Analytics</p>
                <h3 className="text-2xl font-bold text-[#09090B] dark:text-white mb-2">AI Health Predictor</h3>
                <p className="text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-6 text-sm flex-1">
                  Healthcare analytics interface with predictive patient outcome modeling and clinical trend generation.
                </p>
                <div className="flex gap-4 mt-auto pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <a
                    href="https://ai-health-predictor-theta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-[#09090B] dark:text-white hover:text-accent-purple transition-colors flex items-center gap-1.5"
                  >
                    <span>LIVE SITE</span> <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com/theakashr/ai-health-predictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#52525B] dark:text-neutral-400 hover:text-[#09090B] dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>GITHUB</span> <GithubIcon size={14} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* MediCart */}
            {isVisible(["saas"]) && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col group p-6 sm:p-8 rounded-2xl glass-card border border-black/10 dark:border-white/10 hover:border-accent-purple/40 transition-all duration-500"
              >
                <div className="w-full aspect-video bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden relative mb-6 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3 text-xs font-mono text-[#71717A] dark:text-neutral-400">
                    <span className="text-[#09090B] dark:text-white font-bold">MEDICART ERP OPS</span>
                    <span className="text-accent-purple font-semibold">SOC-2 COMPLIANT</span>
                  </div>
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="p-2 rounded bg-white dark:bg-neutral-900/80 border border-black/[0.04] dark:border-white/[0.04] flex justify-between">
                      <span className="text-[#52525B] dark:text-neutral-300">Inventory Sync</span>
                      <span className="text-accent-purple font-semibold">99.99% Live</span>
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-neutral-900/80 border border-black/[0.04] dark:border-white/[0.04] flex justify-between">
                      <span className="text-[#52525B] dark:text-neutral-300">Prescription Billing</span>
                      <span className="text-accent-blue font-semibold">Sub-100ms</span>
                    </div>
                  </div>
                </div>
                <p className="font-mono text-xs text-accent-purple uppercase tracking-widest mb-2 font-semibold">Pharmacy Management / SaaS ERP</p>
                <h3 className="text-2xl font-bold text-[#09090B] dark:text-white mb-2">MediCart</h3>
                <p className="text-[#52525B] dark:text-neutral-400 leading-relaxed font-light mb-6 text-sm flex-1">
                  Clean enterprise SaaS UI for pharmaceutical inventory tracking, automated prescription billing, and supplier sync.
                </p>
                <div className="flex gap-4 mt-auto pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <span className="text-xs font-mono text-[#71717A] dark:text-neutral-500 flex items-center gap-1.5">
                    <span>INTERNAL ENTERPRISE SYSTEM</span>
                  </span>
                </div>
              </motion.div>
            )}

          </div>

        </div>
      </div>

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
