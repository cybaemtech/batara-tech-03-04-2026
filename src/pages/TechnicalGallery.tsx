import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

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

const VideoPlaceholder = ({ src, title }: { src: string; title: string }) => (
  <div className="relative w-full rounded-xl overflow-hidden border border-border bg-card shadow-[0_0_40px_hsl(var(--primary)/0.08)] aspect-video flex items-center justify-center group">
    {src ? (
      <video
        src={src}
        controls
        className="w-full h-full object-cover"
        title={title}
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-card via-muted/40 to-card">
        <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:border-accent-orange-2/60 transition-colors duration-300">
          <Play className="w-8 h-8 text-primary/40 group-hover:text-accent-orange-2/70 transition-colors duration-300 ml-1" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-silver/40">
          <Video className="w-3.5 h-3.5" />
          <span>Video Coming Soon</span>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, hsl(var(--foreground)) 30px, hsl(var(--foreground)) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, hsl(var(--foreground)) 30px, hsl(var(--foreground)) 31px)" }}
        />
      </div>
    )}
  </div>
);

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-[68px]">
        {/* Hero */}
        <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary)/0.12), transparent)" }}
          />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div {...fd(0)} className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-accent-orange-2" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent-orange-2">
                Technical Gallery
              </span>
              <div className="w-8 h-0.5 bg-accent-orange-2" />
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
              See our capabilities in action — from raw steel to precision tooling.
              Each video captures a stage of our engineering process, giving you
              a transparent view of how Batara Techno Solutions delivers excellence.
            </motion.p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border mx-auto" />

        {/* Video sections — alternating layout */}
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-16">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-28">
            {videos.map((video, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={video.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    !isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Video */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <VideoPlaceholder src={video.src} title={video.title} />
                  </div>

                  {/* Description */}
                  <div className={`space-y-5 ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-7 rounded-full bg-accent-orange-2" />
                      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-orange-2">
                        {video.label}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
                      {video.title}
                    </h2>

                    <p className="text-silver text-[15px] leading-relaxed">
                      {video.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-accent-orange-2/30 text-accent-orange-2 bg-accent-orange-2/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 md:py-20 px-4 sm:px-6 md:px-16 border-t border-border">
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                Get In Touch
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-silver text-[15px] leading-relaxed mb-8">
              Let our engineering team review your requirements and propose a solution.
              From concept to delivery — we handle it all.
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary rounded text-primary-foreground text-sm font-semibold tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
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
