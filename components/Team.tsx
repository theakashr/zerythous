"use client";

import { motion } from "framer-motion";
import { Mail, Users, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const team = [
  {
    name: "Adarsh B A",
    role: "Founder & Chief Architect",
    initials: "AA",
    metaNode: "CORE ARCHITECTURE",
    metaTag: "PRINCIPAL",
    email: "adarsh.ba04@gmail.com",
    linkedin: "https://www.linkedin.com/in/adarsh-b-a-513470296/",
    github: "https://github.com/developeradhi",
    description: "Leads engineering architecture, autonomous AI multi-agent swarms, distributed cloud topology, and enterprise security hardening."
  },
  {
    name: "Akash R",
    role: "Co-Founder & AI Systems Lead",
    initials: "AR",
    metaNode: "INTELLIGENCE ENGINE",
    metaTag: "RESEARCH LEAD",
    email: "akash1234.ra@gmail.com",
    linkedin: "https://www.linkedin.com/in/akash-r-b7a9502b7/",
    github: "https://github.com/theakashr",
    description: "Specializes in hybrid dense/sparse vector RAG, low-latency LLM telemetry, LangChain agent loops, and intelligent SaaS systems."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-44 bg-background text-foreground border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full aurora-glow-purple blur-3xl pointer-events-none opacity-25" />
      <div className="absolute inset-0 grid-pattern-dual pointer-events-none opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs mb-4 font-semibold">
            <Users className="w-3.5 h-3.5" />
            06 / FOUNDING PARTNERS
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[92px] font-extrabold tracking-tight text-[#09090B] dark:text-white leading-none font-heading">
            Architectural <br />
            <span className="text-accent-purple">
              leadership.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl glass-card relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Meta Bar */}
                <div className="flex justify-between items-center pb-5 border-b border-black/[0.08] dark:border-white/[0.08] mb-6 text-xs font-mono">
                  <span className="text-accent-purple font-bold">{member.metaNode}</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 text-[#52525B] dark:text-neutral-400 text-[10px]">
                    {member.metaTag}
                  </span>
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent-purple/10 border border-accent-purple/30 text-accent-purple flex items-center justify-center font-mono font-bold text-lg shadow-md shadow-accent-purple/10">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#09090B] dark:text-white tracking-tight">{member.name}</h3>
                    <div className="text-xs font-mono text-accent-purple font-medium mt-0.5">{member.role}</div>
                  </div>
                </div>

                <p className="text-sm text-[#52525B] dark:text-neutral-300 font-light leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs font-mono text-[#52525B] hover:text-accent-purple dark:text-neutral-400 dark:hover:text-accent-purple transition-colors flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  <span>Contact Direct</span>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-[#52525B] hover:text-[#09090B] dark:text-neutral-400 dark:hover:text-white transition-colors border border-black/10 dark:border-white/10"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={14} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-[#52525B] hover:text-[#09090B] dark:text-neutral-400 dark:hover:text-white transition-colors border border-black/10 dark:border-white/10"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
