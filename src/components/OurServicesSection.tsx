import { useState, useRef } from "react";
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
  const sectionRef = useRef(null);

  const current = services[active];

  return (
    <section
      ref={sectionRef}
      id="our-services"
      className="relative z-[1] py-16 md:py-24 bg-background"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary font-semibold">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight uppercase">
              Our Services
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-0 border border-border rounded-2xl overflow-hidden shadow-sm">

          {/* Left tabs */}
          <div className="lg:w-[280px] shrink-0 bg-accent flex flex-col">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = i === active;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3 px-6 py-5 text-left transition-all duration-200 border-b border-white/[0.06] last:border-b-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/60 rounded-r-full" />
                  )}

                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white/20"
                        : "bg-white/[0.07] group-hover:bg-white/[0.12]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>

                  <span
                    className={`text-[13px] font-semibold leading-snug tracking-wide ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {svc.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col lg:flex-row bg-card overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row flex-1"
              >
                {/* Text content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  {/* Icon + headline */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <current.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary/70 font-medium">
                      {services.findIndex((s) => s.id === current.id) + 1} / {services.length}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">
                    {current.headline}
                  </h3>

                  <p className="text-sm text-silver leading-relaxed mb-7 max-w-md">
                    {current.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px] text-foreground/80">
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

                {/* Image */}
                <div className="lg:w-[380px] shrink-0 relative overflow-hidden min-h-[260px] lg:min-h-0">
                  <img
                    src={current.image}
                    alt={current.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient overlay left edge for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-card/10 to-transparent lg:block hidden" />
                  {/* Bottom overlay on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:hidden" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
