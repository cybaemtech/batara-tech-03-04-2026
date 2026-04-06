import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [clientType, setClientType] = useState<"b2b" | "d2c">("b2b");

  return (
    <section id="contact" className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">
              Problem-Solving Portal
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="section-title text-primary-foreground mb-4">
            GOT AN ENGINEERING CHALLENGE? LET'S CRACK IT.
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto text-[15px]">
            Share your toughest problem — our engineers respond within 4 hours with a hands-on preliminary assessment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 sm:p-8 md:p-10"
        >
          <div className="flex gap-2 mb-8">
            {(["b2b", "d2c"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setClientType(type)}
                className={`px-5 py-2 rounded text-sm font-medium tracking-wide uppercase transition-all ${
                  clientType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {type === "b2b" ? "B2B / OEM" : "D2C / Direct"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Full Name"
              className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              placeholder="Company Name"
              className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              placeholder="Email"
              type="email"
              className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              placeholder="Phone / WhatsApp"
              className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <textarea
            placeholder="Describe your problem statement or engineering challenge..."
            rows={4}
            className="w-full bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors mb-6 resize-none"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-primary-foreground/60 tracking-wider">
              SLA: 4-hour initial response · 6-hour approval window
            </p>
            <button className="group inline-flex items-center gap-3 px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded hover:brightness-110 hover:shadow-[0_8px_24px_hsl(214_72%_37%/0.35)] transition-all">
              <Send className="w-4 h-4" />
              Submit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
