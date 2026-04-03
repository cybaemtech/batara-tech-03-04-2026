import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[76px] overflow-hidden bg-[#060c1a] z-[1]">
      {/* Full-screen animated background grid — more visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 72% 55% / 0.12) 1px, transparent 1px), linear-gradient(90deg, hsl(214 72% 55% / 0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows — intensified */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_70%_50%,hsl(214_72%_37%/0.38),transparent_55%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_20%_80%,hsl(220_58%_30%/0.28),transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_80%_15%,hsl(214_72%_50%/0.18),transparent_40%)]" />
      </div>

      {/* Orbit visualization — full background, centered right */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px]"
        >
          {/* Ring 1 */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[hsl(214_72%_65%/0.55)] shadow-[0_0_60px_hsl(214_72%_37%/0.55),0_0_120px_hsl(214_72%_37%/0.2)]"
            style={{ animation: "spin-slow 28s linear infinite" }}
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[hsl(214_72%_70%)] shadow-[0_0_28px_hsl(214_72%_70%),0_0_60px_hsl(214_72%_50%/0.8)]" />
          </div>
          {/* Ring 2 */}
          <div
            className="absolute rounded-full border-2 border-[hsl(214_72%_50%/0.65)] shadow-[0_0_40px_hsl(214_72%_37%/0.45),0_0_90px_hsl(214_72%_37%/0.18)]"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "70%", height: "70%",
              animation: "spin-slow 20s linear infinite reverse",
            }}
          >
            <div className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[hsl(214_72%_60%)] shadow-[0_0_22px_hsl(214_72%_60%),0_0_50px_hsl(214_72%_50%/0.7)]" />
          </div>
          {/* Ring 3 */}
          <div
            className="absolute rounded-full border border-[hsl(220_58%_60%/0.7)] shadow-[0_0_28px_hsl(220_58%_40%/0.55)]"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "42%", height: "42%",
              animation: "spin-slow 13s linear infinite",
            }}
          >
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[hsl(214_72%_65%)] shadow-[0_0_16px_hsl(214_72%_65%)]" />
          </div>

          {/* Core */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, hsl(214 72% 50% / 0.55), hsl(214 72% 37% / 0.15))",
              border: "2px solid hsl(214 72% 65% / 0.75)",
              boxShadow: "0 0 60px hsl(214 72% 37% / 0.65), 0 0 120px hsl(214 72% 37% / 0.3), inset 0 0 30px hsl(214 72% 50% / 0.2)",
              animation: "core-pulse 3s ease-in-out infinite",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 85%)" strokeWidth="1.5" className="w-10 h-10">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          {/* Orbit nodes */}
          <ONode pos="top-[2%] left-1/2 -translate-x-1/2" label="Concept & Design" delay={0.8}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 85%)" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg>
          </ONode>
          <ONode pos="top-1/2 right-0 -translate-y-1/2" label="Analysis" delay={1.0}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 85%)" strokeWidth="1.8" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          </ONode>
          <ONode pos="bottom-[2%] left-1/2 -translate-x-1/2" label="Prototype" delay={1.2}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 85%)" strokeWidth="1.8" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          </ONode>
          <ONode pos="top-1/2 left-0 -translate-y-1/2" label="Production" delay={0.9}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 85%)" strokeWidth="1.8" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </ONode>

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[hsl(214_72%_60%/0.8)]" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[hsl(214_72%_60%/0.8)]" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[hsl(214_72%_60%/0.8)]" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[hsl(214_72%_60%/0.8)]" />
        </motion.div>
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(214_72%_65%/0.7)] to-transparent pointer-events-none z-[2]"
        style={{ animation: "scan-line 5s ease-in-out infinite" }}
      />

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a] via-[#060c1a]/80 via-50% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/50 via-transparent to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-76px)] px-6 sm:px-12 md:px-16 lg:px-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-6 h-px bg-[hsl(214_72%_60%)] shrink-0" />
          <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[hsl(214_72%_75%)]">
            Engineering Excellence for Tier-1, Tier-2 &amp; OEMs
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display font-bold text-[32px] sm:text-[44px] md:text-[56px] lg:text-[clamp(44px,5vw,68px)] leading-[1.03] tracking-tight text-white mb-5"
        >
          YOU DEFINE<br />THE FRICTION;
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[hsl(214_72%_65%)] inline-block"
          >
            WE ENGINEER<br />THE FLOW!
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[14px] sm:text-[15px] leading-[1.75] text-white/65 max-w-lg mb-9 border-l-2 border-[hsl(214_72%_50%/0.7)] pl-4"
        >
          From raw problem to realized product: We <strong className="text-white/90 font-medium">design the solution</strong>, deliver the result, and anchor the support. Your <strong className="text-white/90 font-medium">End-to-End Engineering Ecosystem.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap gap-3 items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[hsl(214_72%_37%)] text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-[hsl(214_72%_44%)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(214_72%_37%/0.55)] transition-all relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <span className="relative">Discuss Your Problem Statement</span>
            <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-4 border border-white/20 text-white/75 text-sm font-medium rounded-lg hover:border-white/40 hover:text-white transition-all"
          >
            <ChevronDown className="w-4 h-4" />
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Floating badge — bottom right */}
      <div
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 px-4 py-3 bg-white/5 border border-[hsl(214_72%_50%/0.4)] rounded-lg backdrop-blur-md"
        style={{ animation: "badge-float 4s ease-in-out infinite" }}
      >
        <div className="w-2 h-2 rounded-full bg-[hsl(214_72%_65%)] shadow-[0_0_10px_hsl(214_72%_65%)]" style={{ animation: "dot-pulse 2s ease-in-out infinite" }} />
        <span className="font-mono text-[10px] tracking-[0.12em] text-[hsl(214_72%_75%)] uppercase">
          Concept to Production in Action
        </span>
      </div>
    </section>
  );
};

const ONode = ({ pos, label, delay, children }: { pos: string; label: string; delay: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute flex flex-col items-center gap-1.5 ${pos}`}
  >
    <div className="w-12 h-12 bg-[hsl(214_72%_12%/0.95)] border border-[hsl(214_72%_55%/0.55)] rounded-lg flex items-center justify-center shadow-[0_0_28px_hsl(214_72%_37%/0.45)] backdrop-blur-md">
      {children}
    </div>
    <span className="font-mono text-[8px] font-semibold tracking-[0.15em] text-[hsl(214_72%_75%)] uppercase text-center whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

export default HeroSection;
