"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Sparkles, Mail, Phone } from "lucide-react";
import BookingModal from "./BookingModal";
import Link from "next/link";

export default function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="contact" className="py-32 md:py-48 bg-background text-foreground border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300">
      {/* Background Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full aurora-glow-purple blur-3xl pointer-events-none opacity-25" />
      <div className="absolute inset-0 grid-pattern-dual pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs mb-8 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT ARCHITECT DISPATCH
          </div>

          <h2 className="text-[12vw] sm:text-[85px] md:text-[115px] font-extrabold leading-[0.9] tracking-tighter text-[#09090B] dark:text-white mb-10 font-heading">
            LET&apos;S BUILD <br />
            SOMETHING <br />
            <span className="text-accent-purple">
              SERIOUS.
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-[#52525B] dark:text-neutral-400 font-light max-w-2xl mb-14 leading-relaxed">
            Have a mission-critical platform, autonomous multi-agent swarm, or high-scale system that needs to be engineered? Let&apos;s architect it.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-20 w-full sm:w-auto">
            <Link
              href="#project-builder"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white text-sm font-bold tracking-wider rounded-full transition-all duration-300 shadow-xl group"
            >
              START A PROJECT
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-black/10 dark:border-white/10 text-[#09090B] dark:text-white text-sm font-medium tracking-wide rounded-full transition-all duration-300 shadow-sm"
            >
              <Calendar size={18} className="mr-2 text-accent-purple" />
              SCHEDULE ARCHITECT CALL
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-16 pt-16 border-t border-black/[0.08] dark:border-white/[0.08] w-full justify-center text-xs font-mono">
            <div className="text-center">
              <span className="text-[#71717A] dark:text-neutral-500 uppercase tracking-widest block mb-2 flex items-center justify-center gap-1.5 font-semibold">
                <Mail size={12} className="text-accent-purple" /> DIRECT DISPATCH EMAIL
              </span>
              <a href="mailto:zerythous345@gmail.com" className="text-base sm:text-lg text-[#09090B] dark:text-white hover:text-accent-purple transition-colors font-medium">
                zerythous345@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-12 bg-black/10 dark:bg-white/10" />
            <div className="text-center">
              <span className="text-[#71717A] dark:text-neutral-500 uppercase tracking-widest block mb-2 flex items-center justify-center gap-1.5 font-semibold">
                <Phone size={12} className="text-accent-purple" /> DIRECT VOICE CALL
              </span>
              <a href="tel:+918660904369" className="text-base sm:text-lg text-[#09090B] dark:text-white hover:text-accent-purple transition-colors font-medium">
                +91 8660904369
              </a>
            </div>
          </div>

        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
