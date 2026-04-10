import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Factory, GitBranch, Film, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

const AUTOPLAY_DELAY = 4000;

const services = [
  {
    id: "engineering-design",
    label: "Engineering Design & Analysis",
    icon: Compass,
    href: "/services",
    headline: "Precision Engineering, From Concept to Reality",
    description:
      "We deliver end-to-end engineering design — from concept sketches to fully validated detailed drawings. Our team leverages advanced CAD platforms and simulation tools to ensure every component meets exact tolerances and industry standards.",
    features: [
      "CAD Design (CATIA, NX, SolidWorks)",
      "FEA & Structural Simulation",
      "Tolerance & GD&T Analysis",
      "Design for Manufacturability (DFM)",
    ],
    image: "/svc-engineering-design.png",
  },
  {
    id: "manufacturing-engineering",
    label: "Manufacturing Engineering – BIW, Mould & Sheet Metal",
    icon: Factory,
    href: "/mould-design",
    headline: "Manufacturing Intelligence Built Into Every Tool",
    description:
      "Specialised manufacturing engineering for Body-in-White (BIW) fixturing, injection mould design, and precision sheet metal components — minimising lead times and maximising first-time-right outcomes.",
    features: [
      "BIW Fixture & Jig Design",
      "Injection Mould Flow Analysis",
      "Sheet Metal DFM & Unfolding",
      "Tooling & Die Design",
    ],
    image: "/svc-manufacturing-engineering.png",
  },
  {
    id: "integrated-project",
    label: "Integrated Project Delivery",
    icon: GitBranch,
    href: "/services",
    headline: "One Team. One Commitment. On Time.",
    description:
      "We manage the full project lifecycle — from engineering brief to final delivery — co-ordinating multi-disciplinary teams with precision. Milestones are met, risks mitigated early, and quality never compromised.",
    features: [
      "End-to-End Project Planning",
      "Cross-functional Team Coordination",
      "Risk Identification & Mitigation",
      "Milestone Tracking & Reporting",
    ],
    image: "/svc-integrated-project.png",
  },
  {
    id: "technical-animation",
    label: "Technical Animation & Publication",
    icon: Film,
    href: "/services",
    headline: "Complex Engineering, Made Crystal Clear",
    description:
      "We transform intricate engineering assemblies into high-fidelity 3D animations, exploded views, and interactive technical publications — making complex concepts instantly understandable.",
    features: [
      "3D Product & Assembly Animation",
      "Exploded View Illustrations",
      "Interactive Technical Manuals",
      "Work Instructions & SOPs",
    ],
    image: "/svc-technical-animation.png",
  },
  {
    id: "electronics-pcb",
    label: "Electronics Manufacturing (PCB & Electromechanical)",
    icon: CircuitBoard,
    href: "/services",
    headline: "Smart Electronics for Demanding Applications",
    description:
      "From schematic to finished board — precision PCBs and electromechanical assemblies for industrial automation, embedded systems, and custom modules, optimised for EMC compliance and thermal performance.",
    features: [
      "PCB Design & Layout (Altium, KiCad)",
      "Schematic & Netlist Design",
      "EMC & Thermal Analysis",
      "PCBA Testing & Validation",
    ],
    image: "/svc-electronics-pcb.png",
  },
];

const OurServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % services.length);
    setProgress(0);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  // Progress bar tick
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTOPLAY_DELAY / 50), 100));
    }, 50);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [active, paused]);

  const current = services[active];

  return (
    <section
      id="our-services"
      className="relative z-[1] bg-background pb-16 md:pb-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 pt-12 md:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">What We Do</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="section-title text-foreground">OUR SERVICES</h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP layout (lg+) ── */}
      <div className="hidden lg:flex border-t border-border">

        {/* LEFT — service list */}
        <div className="w-[300px] shrink-0 bg-accent border-r border-white/[0.06] flex flex-col">
          {services.map((svc, i) => {
            const isActive = i === active;
            const num = String(i + 1).padStart(2, "0");
            return (
              <button
                key={svc.id}
                onClick={() => { goTo(i); setPaused(true); }}
                className={`group relative flex flex-col px-6 py-[18px] text-left transition-all duration-200 border-b border-white/[0.06] last:border-b-0 overflow-hidden ${
                  isActive ? "" : "hover:bg-white/[0.04]"
                }`}
              >
                {/* Active bg */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 pointer-events-none" />
                )}

                {/* Progress bar at bottom of active item */}
                {isActive && !paused && (
                  <div className="absolute bottom-0 left-0 h-[2px] bg-white/40 transition-none" style={{ width: `${progress}%` }} />
                )}

                {/* Right accent */}
                <div className={`absolute right-0 top-3 bottom-3 w-[3px] rounded-l-full transition-opacity duration-300 bg-white/40 ${isActive ? "opacity-100" : "opacity-0"}`} />

                <div className="relative flex flex-col gap-1.5">
                  <span className={`font-mono text-[10px] tracking-[0.22em] font-bold transition-colors ${isActive ? "text-white/50" : "text-white/20 group-hover:text-white/35"}`}>
                    {num}
                  </span>
                  <span className={`font-display text-[12px] font-bold leading-snug tracking-wide transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                    {svc.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — auto-sliding content + image */}
        <div className="flex-1 bg-background overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-row h-full"
            >
              {/* Text content */}
              <div className="flex-1 px-10 py-10 flex flex-col justify-center max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <current.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary/60 font-medium">
                    Service {active + 1} of {services.length}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">
                  {current.headline}
                </h3>

                <p className="text-sm text-silver leading-relaxed mb-6">
                  {current.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px] text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={current.href}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:gap-3 transition-all group w-fit"
                >
                  Explore this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Image */}
              <div className="w-[380px] shrink-0 relative">
                <img
                  src={current.image}
                  alt={current.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── MOBILE / TABLET layout (< lg): image slider + dots ── */}
      <div className="lg:hidden">
        <div className="border-t border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                {/* Service counter */}
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.18em] text-white/60 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-8 py-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <current.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {current.headline}
                  </h3>
                </div>

                <p className="text-sm text-silver leading-relaxed mb-5">
                  {current.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px] text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={current.href}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:gap-3 transition-all group"
                >
                  Explore this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot nav */}
          <div className="flex items-center justify-center gap-2 pb-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setPaused(true); }}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default OurServicesSection;
