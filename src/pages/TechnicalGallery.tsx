import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fd = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

const video = {
  src: "/clip1.mp4",
  title: "In-House VMC Machining Process",
  label: "Manufacturing",
  description:
    "Watch our state-of-the-art Vertical Machining Centres (VMC) in action. High-precision mould cavities are machined from raw steel blocks to micron-level tolerances — every pass controlled, every dimension verified. This is the foundation of quality at Batara Techno Solutions.",
  tags: ["VMC Machining", "In-House", "High Precision"],
};

const TechnicalGallery = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen text-foreground" style={{ background: "hsl(220, 14%, 93%)", position: "relative", zIndex: 1 }}>
      <Navbar />

      <main className="pt-[68px]">
        {/* Hero */}
        <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-16" style={{ background: "hsl(220, 14%, 93%)" }}>
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

        {/* Featured Video */}
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12" style={{ background: "hsl(220, 14%, 93%)" }}>
          <div className="max-w-5xl mx-auto">

            {/* Video Player */}
            <motion.div
              {...fd(0)}
              className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-[0_8px_60px_hsl(var(--primary)/0.10)] aspect-video"
            >
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
                title={video.title}
              />
            </motion.div>

            {/* Video Details */}
            <motion.div
              {...fd(0.15)}
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
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 md:py-20 px-4 sm:px-6 md:px-16 border-t border-border" style={{ background: "hsl(220, 14%, 93%)" }}>
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
