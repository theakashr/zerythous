"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Workflow, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  { id: "01", title: "DISCOVERY & SPECIFICATION", desc: "We deep-dive into your business logic, user personas, API requirements, and technical constraints to establish a verified scope boundary." },
  { id: "02", title: "SYSTEM ARCHITECTURE", desc: "We design the end-to-end topology, select optimal multi-agent frameworks, plan data schemas, and draft deterministic security models." },
  { id: "03", title: "BESPOKE INTERFACE DESIGN", desc: "We engineer high-fidelity, interactive design systems with dark modes, micro-animations, and seamless user conversion flows." },
  { id: "04", title: "PRODUCTION ENGINEERING", desc: "Our engineers build with Next.js 16, TypeScript, Supabase RLS, and autonomous agent swarms, enforcing test coverage throughout." },
  { id: "05", title: "EDGE DEPLOYMENT & AUDIT", desc: "We run automated vulnerability scans, optimize for 95+ Lighthouse scores, configure cloud environments, and transfer 100% IP ownership." },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-28 md:py-44 bg-background text-foreground border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full aurora-glow-purple blur-3xl pointer-events-none opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs mb-4 font-semibold">
            <Workflow className="w-3.5 h-3.5" />
            04 / SPRINT LIFECYCLE
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[92px] font-extrabold tracking-tight text-[#09090B] dark:text-white leading-none font-heading">
            FROM IDEA <br />
            <span className="text-accent-purple">
              TO PRODUCTION.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Vertical Interactive Process Selector (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col relative">
            <div className="absolute left-[3px] md:left-[5px] top-4 bottom-4 w-px bg-black/10 dark:bg-white/10" />
            
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                className="relative pl-10 md:pl-16 py-6 cursor-pointer group"
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Active indicator bar */}
                {activeStep === idx && (
                  <motion.div
                    layoutId="activeProcessLine"
                    className="absolute left-0 top-6 bottom-6 w-1.5 md:w-2 bg-accent-purple rounded-full z-10 shadow-lg shadow-accent-purple/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Step Node Dot */}
                <div className={cn(
                  "absolute left-[-2px] md:left-0 top-10 w-2.5 h-2.5 rounded-full transition-colors duration-300 z-0",
                  activeStep === idx ? "bg-accent-purple shadow-md shadow-accent-purple/50" : "bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                )} />
                
                <h3 className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300",
                  activeStep === idx ? "text-[#09090B] dark:text-white" : "text-[#71717A] dark:text-neutral-500 group-hover:text-[#09090B] dark:group-hover:text-neutral-300"
                )}>
                  <span className="font-mono text-sm md:text-base mr-3 opacity-70 text-accent-purple">{step.id}</span>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Interactive Phase Card (Right) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <div className="w-full max-w-lg rounded-2xl glass-card p-8 md:p-10 border border-black/10 dark:border-white/10 relative overflow-hidden shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="font-mono text-xs text-accent-purple mb-6 uppercase tracking-widest bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 inline-flex items-center gap-1.5 rounded-md font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    SPRINT PHASE {steps[activeStep].id} OF 05
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#09090B] dark:text-white mb-4 font-heading">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-[#52525B] dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {steps[activeStep].desc}
                  </p>

                  <div className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#71717A] dark:text-neutral-400">
                    <span className="flex items-center gap-1.5 text-accent-purple font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Continuous Client Alignment
                    </span>
                    <span className="text-[#71717A] dark:text-neutral-500">Agile Bi-Weekly Demos</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
