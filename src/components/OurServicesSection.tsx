import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Factory, GitBranch, Film, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "engineering-design",
    label: "Engineering Design & Analysis",
    icon: Compass,
    href: "/services",
    headline: "Precision Engineering, From Concept to Reality",
    description:
      "We deliver end-to-end engineering design — from concept sketches to fully validated detailed drawings. Our team leverages advanced CAD platforms and simulation tools to ensure every component meets exact tolerances, performance requirements, and industry standards before a single part is manufactured.",
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
      "Specialised manufacturing engineering for Body-in-White (BIW) fixturing, injection mould design, and precision sheet metal components. We combine deep domain knowledge with advanced tooling software to minimise lead times, reduce scrap, and maximise first-time-right outcomes across automotive and industrial sectors.",
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
      "We manage the full project lifecycle — from engineering brief to final delivery — co-ordinating multi-disciplinary teams, suppliers, and stakeholders with precision. Our structured project delivery methodology ensures milestones are met, risks are mitigated early, and quality is never compromised.",
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
      "We transform intricate engineering assemblies into high-fidelity 3D animations, exploded views, and interactive technical publications. From training materials to compliance documentation and marketing content, our visual storytelling makes complex technical concepts instantly understandable.",
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
      "From schematic to finished board, we design and support the manufacture of precision PCBs and electromechanical assemblies for industrial automation, embedded systems, and custom electronic modules. Our designs are optimised for EMC compliance, thermal performance, and production efficiency.",
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
  const current = services[active];

  return (
    <section id="our-services" className="relative z-[1] bg-background">

      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 pt-16 md:pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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

      {/* Full-width tabs + content layout */}
      <div className="flex flex-col lg:flex-row border-t border-border">

        {/* LEFT — Tab list, full height of the content */}
        <div className="lg:w-[300px] shrink-0 bg-accent border-r border-white/[0.06] flex flex-col">
          {services.map((svc, i) => {
            const isActive = i === active;
            const num = String(i + 1).padStart(2, "0");
            return (
              <button
                key={svc.id}
                onClick={() => setActive(i)}
                className={`group relative flex flex-col px-8 py-7 text-left transition-all duration-200 border-b border-white/[0.06] last:border-b-0 overflow-hidden ${
                  isActive ? "" : "hover:bg-white/[0.04]"
                }`}
              >
                {/* Active full bg */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 pointer-events-none" />
                )}

                {/* Active right accent */}
                <div
                  className={`absolute right-0 top-4 bottom-4 w-[3px] rounded-l-full transition-opacity duration-300 bg-white/40 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative flex flex-col gap-2">
                  <span
                    className={`font-mono text-[10px] tracking-[0.22em] font-bold transition-colors ${
                      isActive ? "text-white/50" : "text-white/20 group-hover:text-white/35"
                    }`}
                  >
                    {num}
                  </span>
                  <span
                    className={`font-display text-[13px] font-bold leading-snug tracking-wide transition-colors ${
                      isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {svc.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="h-px w-8 bg-white/35"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — Content + image, full width */}
        <div className="flex-1 bg-background overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row h-full"
            >
              {/* Text content */}
              <div className="flex-1 px-10 py-12 lg:py-16 flex flex-col justify-center max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <current.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-px h-7 bg-border" />
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary/60 font-medium">
                    Service {services.findIndex((s) => s.id === current.id) + 1} of {services.length}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug mb-5">
                  {current.headline}
                </h3>

                <p className="text-sm text-silver leading-relaxed mb-8">
                  {current.description}
                </p>

                <ul className="flex flex-col gap-3 mb-10">
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

              {/* Image — flush right, fills full height */}
              <div className="lg:w-[420px] shrink-0 relative min-h-[280px] lg:min-h-0">
                <img
                  src={current.image}
                  alt={current.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent lg:hidden" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    </section>
  );
};

export default OurServicesSection;
