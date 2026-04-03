import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fd = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

const videos = [
  {
    src: "/clip1.mp4",
    title: "In-House VMC Machining Process",
    label: "Manufacturing",
    description:
      "Watch our state-of-the-art Vertical Machining Centres (VMC) in action. High-precision mould cavities are machined from raw steel blocks to micron-level tolerances — every pass controlled, every dimension verified. This is the foundation of quality at Batara Techno Solutions.",
    tags: ["VMC Machining", "In-House", "High Precision"],
  },
  {
    src: "/clip2.mp4",
    title: "Mould Trial Press Run",
    label: "Quality Assurance",
    description:
      "See our in-house trial press bay in full operation. From mould mounting and clamping to the first shot of plastic, dimensional inspection, and process parameter setting — every mould is validated before it ever reaches your facility. Zero surprises, guaranteed.",
    tags: ["Trial Press", "First Article", "Dimensional Inspection"],
  },
  {
    src: "/clip3.mp4",
    title: "Complete Mould Assembly & Inspection",
    label: "Assembly",
    description:
      "Follow the journey from precision-machined halves to a fully assembled, inspected, and finished tool. Every slide, lifter, cooling circuit, and ejector pin is fitted and verified against the design specification — so what leaves our facility is ready to perform from shot one.",
    tags: ["Mould Assembly", "Final Inspection", "Quality Control"],
  },
];

const TechnicalGallery = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const prev = () => {
    if (active > 0) goTo(active - 1);
  };

  const next = () => {
    if (active < videos.length - 1) goTo(active + 1);
  };

  const video = videos[active];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-[68px]">
        {/* Hero */}
        <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary)/0.12), transparent)",
            }}
          />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              {...fd(0)}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Technical Gallery
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </motion.div>
            <motion.h1
              {...fd(0.1)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
            >
              ENGINEERING IN
              <br />
              <span className="text-primary">MOTION</span>
            </motion.h1>
            <motion.p
              {...fd(0.2)}
              className="text-silver text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto"
            >
              See our capabilities in action — from raw steel to precision
              tooling. Each video captures a stage of our engineering process,
              giving you a transparent view of how Batara Techno Solutions
              delivers excellence.
            </motion.p>
          </div>
        </section>

        <div className="w-full h-px bg-border" />

        {/* Featured Video Showcase */}
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            {/* Video Player */}
            <motion.div {...fd(0)} className="relative w-full">
              {/* Nav arrows */}
              <button
                onClick={prev}
                disabled={active === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                disabled={active === videos.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-[0_8px_60px_hsl(var(--primary)/0.12)] aspect-video"
                >
                  <video
                    key={video.src}
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                    title={video.title}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Video Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-8 text-center"
              >
                {/* Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-1 h-5 rounded-full bg-primary" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                    {video.label}
                  </span>
                  <div className="w-1 h-5 rounded-full bg-primary" />
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {video.title}
                </h2>

                {/* Description */}
                <p className="text-silver text-[15px] leading-relaxed max-w-2xl mx-auto mb-6">
                  {video.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-primary/30 text-primary bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot + mobile arrow navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              {/* Mobile prev */}
              <button
                onClick={prev}
                disabled={active === 0}
                className="md:hidden w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-2.5 bg-primary"
                        : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile next */}
              <button
                onClick={next}
                disabled={active === videos.length - 1}
                className="md:hidden w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>

            {/* Video thumbnails strip */}
            <div className="flex gap-3 mt-8 justify-center">
              {videos.map((v, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`relative flex-1 max-w-[160px] aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    i === active
                      ? "border-primary shadow-[0_0_16px_hsl(var(--primary)/0.35)]"
                      : "border-border opacity-60 hover:opacity-90"
                  }`}
                >
                  <video
                    src={v.src}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                  />
                  <div className="absolute inset-0 bg-[#060c1a]/40" />
                  <span className="absolute bottom-1 left-0 right-0 text-center font-mono text-[8px] uppercase tracking-wider text-white/80 px-1 leading-tight">
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 md:py-20 px-4 sm:px-6 md:px-16 border-t border-border mt-6">
          <motion.div {...fd(0)} className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                Get In Touch
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-silver text-[15px] leading-relaxed mb-8">
              Let our engineering team review your requirements and propose a
              solution. From concept to delivery — we handle it all.
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary rounded text-primary-foreground text-sm font-semibold tracking-wide hover:bg-accent hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(var(--primary)/0.35)] transition-all"
            >
              Request a Prototype
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalGallery;
