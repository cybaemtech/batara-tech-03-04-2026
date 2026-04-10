import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Compass, Factory, GitBranch, Film, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "engineering-design",
    label: "Engineering Design & Analysis",
    icon: Compass,
    href: "/services",
    headline: "Precision Engineering, From Concept to Reality",
    description:
      "End-to-end engineering design — from concept sketches to fully validated detailed drawings, leveraging advanced CAD platforms and simulation tools.",
    features: [
      "CAD Design (CATIA, NX, SolidWorks)",
      "FEA & Structural Simulation",
      "Tolerance & GD&T Analysis",
      "Design for Manufacturability (DFM)",
    ],
    image: "/svc-engineering-design.png",
    tag: "01",
  },
  {
    id: "manufacturing-engineering",
    label: "Manufacturing Engineering",
    sublabel: "BIW, Mould & Sheet Metal",
    icon: Factory,
    href: "/mould-design",
    headline: "Manufacturing Intelligence Built Into Every Tool",
    description:
      "Specialised manufacturing engineering for BIW fixturing, injection mould design, and precision sheet metal components with advanced tooling software.",
    features: [
      "BIW Fixture & Jig Design",
      "Injection Mould Flow Analysis",
      "Sheet Metal DFM & Unfolding",
      "Tooling & Die Design",
    ],
    image: "/svc-manufacturing-engineering.png",
    tag: "02",
  },
  {
    id: "integrated-project",
    label: "Integrated Project Delivery",
    icon: GitBranch,
    href: "/services",
    headline: "One Team. One Commitment. On Time.",
    description:
      "Full project lifecycle management — from engineering brief to final delivery — co-ordinating multi-disciplinary teams with precision and zero compromise.",
    features: [
      "End-to-End Project Planning",
      "Cross-functional Team Coordination",
      "Risk Identification & Mitigation",
      "Milestone Tracking & Reporting",
    ],
    image: "/svc-integrated-project.png",
    tag: "03",
  },
  {
    id: "technical-animation",
    label: "Technical Animation & Publication",
    icon: Film,
    href: "/services",
    headline: "Complex Engineering, Made Crystal Clear",
    description:
      "High-fidelity 3D animations, exploded views, and interactive technical publications that transform intricate engineering into instantly understandable visuals.",
    features: [
      "3D Product & Assembly Animation",
      "Exploded View Illustrations",
      "Interactive Technical Manuals",
      "Work Instructions & SOPs",
    ],
    image: "/svc-technical-animation.png",
    tag: "04",
  },
  {
    id: "electronics-pcb",
    label: "Electronics Manufacturing",
    sublabel: "PCB & Electromechanical",
    icon: CircuitBoard,
    href: "/services",
    headline: "Smart Electronics for Demanding Applications",
    description:
      "From schematic to finished board — precision PCBs and electromechanical assemblies optimised for EMC compliance, thermal performance, and production efficiency.",
    features: [
      "PCB Design & Layout (Altium, KiCad)",
      "Schematic & Netlist Design",
      "EMC & Thermal Analysis",
      "PCBA Testing & Validation",
    ],
    image: "/svc-electronics-pcb.png",
    tag: "05",
  },
];

const OurServicesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section id="our-services" className="relative z-[1] bg-background pb-16 md:pb-24">

      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 md:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">What We Do</span>
            </div>
            <h2 className="section-title text-foreground">OUR SERVICES</h2>
          </div>

          {/* Nav controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:bg-primary/10 hover:text-primary text-foreground/60"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:bg-primary/10 hover:text-primary text-foreground/60"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all ml-2"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4 sm:px-8 md:px-12">
          {services.map((svc, i) => {
            const isSelected = i === selectedIndex;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="shrink-0 w-[85vw] sm:w-[55vw] lg:w-[38vw] xl:w-[30vw]"
              >
                <div
                  className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isSelected
                      ? "border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                  style={{ background: "linear-gradient(160deg, #0e1e38 0%, #070d1c 100%)" }}
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1c] via-[#070d1c]/30 to-transparent" />

                    {/* Tag number */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/40 font-bold">
                      {svc.tag}
                    </div>

                    {/* Icon badge */}
                    <div
                      className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(59,130,246,0.18)", border: "1px solid rgba(59,130,246,0.3)", backdropFilter: "blur(8px)" }}
                    >
                      <svc.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6">
                    {/* Label */}
                    <div className="mb-1">
                      <h3 className="font-display font-bold text-white text-base sm:text-[17px] leading-snug">
                        {svc.label}
                      </h3>
                      {svc.sublabel && (
                        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary/60 mt-0.5">
                          {svc.sublabel}
                        </p>
                      )}
                    </div>

                    {/* Divider */}
                    <div
                      className={`h-px my-4 transition-all duration-300 ${isSelected ? "bg-primary/30" : "bg-white/[0.06]"}`}
                    />

                    {/* Description */}
                    <p className="text-[13px] text-white/50 leading-relaxed mb-5 flex-1">
                      {svc.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-2 mb-5">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[12px] text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={svc.href}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:gap-3 transition-all group/link w-fit"
                    >
                      Explore service
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators + mobile View All */}
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 mt-6">
        <div className="flex items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <Link
          to="/services"
          className="sm:hidden inline-flex items-center gap-1.5 text-primary text-sm font-semibold"
        >
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-10" />

    </section>
  );
};

export default OurServicesSection;
