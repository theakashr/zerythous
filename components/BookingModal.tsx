import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitContact } from "@/app/actions/submit-contact";
import { CelebrationModal } from "@/components/CelebrationModal";
import { cn } from "@/lib/utils";

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [clientName, setClientName] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "Partner");
    setClientName(name);

    const res = await submitContact(formData);

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setReferenceId(res.referenceId || "ZTX-920148");
      setShowCelebration(true);
    } else {
      setError(res.error || "Failed to submit message.");
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/90 z-10 transition-colors"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#71717A] hover:text-[#09090B] dark:text-neutral-400 dark:hover:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-accent-purple/15 border border-accent-purple/30 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-purple shadow-xl shadow-purple-500/10">
                  <div className="w-8 h-8 bg-accent-purple rounded-full animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-[#09090B] dark:text-white mb-2 font-heading tracking-tight uppercase">Message Dispatched.</h3>
                <p className="text-[#52525B] dark:text-neutral-400 text-sm">Our principal architectural cell will analyze your inquiry within 2-4 hours.</p>
                <button
                  onClick={onClose}
                  className="mt-8 px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-[#09090B] dark:text-white font-semibold rounded-xl border border-black/10 dark:border-white/10 transition-colors text-xs font-mono"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-accent-purple font-bold uppercase tracking-wider block mb-1">
                    CONFIDENTIAL ARCHITECTURE INQUIRY
                  </span>
                  <h3 className="text-2xl font-bold text-[#09090B] dark:text-white tracking-tight">Direct Dispatch</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div>
                    <input required name="name" type="text" placeholder="Your Name *" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-[#09090B] dark:text-white placeholder-[#71717A] dark:placeholder-neutral-500 focus:outline-none focus:border-accent-purple transition-colors text-sm" />
                  </div>
                  <div>
                    <input required name="email" type="email" placeholder="Work Email *" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-[#09090B] dark:text-white placeholder-[#71717A] dark:placeholder-neutral-500 focus:outline-none focus:border-accent-purple transition-colors text-sm" />
                  </div>
                  <div>
                    <input name="phone" type="tel" placeholder="Phone / WhatsApp (Optional)" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-[#09090B] dark:text-white placeholder-[#71717A] dark:placeholder-neutral-500 focus:outline-none focus:border-accent-purple transition-colors text-sm" />
                  </div>
                  <div>
                    <input required name="subject" type="text" placeholder="Initiative / Subject *" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-[#09090B] dark:text-white placeholder-[#71717A] dark:placeholder-neutral-500 focus:outline-none focus:border-accent-purple transition-colors text-sm" />
                  </div>
                  <div>
                    <textarea required name="message" placeholder="Technical Scope & Constraints *" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-[#09090B] dark:text-white placeholder-[#71717A] dark:placeholder-neutral-500 focus:outline-none focus:border-accent-purple transition-colors h-32 resize-none text-sm" />
                  </div>
                  
                  {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
                  
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className={cn(
                      "w-full flex items-center justify-center py-4 rounded-xl font-bold transition-all text-xs font-mono uppercase tracking-widest",
                      isSubmitting 
                        ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed" 
                        : "bg-[#09090B] text-white hover:bg-accent-purple dark:bg-white dark:text-[#09090B] dark:hover:bg-accent-purple dark:hover:text-white shadow-lg shadow-black/10 dark:shadow-purple-950/20"
                    )}
                  >
                    {isSubmitting ? (
                      <><Loader2 size={16} className="animate-spin mr-2" /> DISPATCHING...</>
                    ) : (
                      "DISPATCH MESSAGE →"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}

      <CelebrationModal
        isOpen={showCelebration}
        onClose={() => {
          setShowCelebration(false);
          onClose();
        }}
        referenceId={referenceId}
        clientName={clientName}
        type="contact"
      />
    </AnimatePresence>
  );
}
