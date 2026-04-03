import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Zap, Shield, Star, MapPin, Clock, ChevronRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Zap,
    title: "Work on Real Engineering",
    desc: "Every project you touch goes into actual production — aerospace components, automotive BIW, medical devices. No toy problems.",
  },
  {
    icon: Users,
    title: "Elite Cross-Disciplinary Team",
    desc: "Collaborate with specialists in CAD, FEA, CFD, mould design, electronics, and technical animation under one roof.",
  },
  {
    icon: Shield,
    title: "ISO-Certified Standards",
    desc: "Operate at the highest quality bar. Our processes are ISO-certified, and you will grow professionally in that rigorous environment.",
  },
  {
    icon: Star,
    title: "End-to-End Ownership",
    desc: "You own your deliverable from concept to production. No handoff black holes — you see the full arc of an engineering challenge.",
  },
  {
    icon: Briefcase,
    title: "Multi-Industry Exposure",
    desc: "Rotate across Automotive, Aerospace, Industrial Machinery, and Medical verticals — building a portfolio most engineers never get.",
  },
  {
    icon: ArrowRight,
    title: "Fast Career Growth",
    desc: "We promote on merit and impact. Engineers who deliver move quickly. Titles follow results, not seniority clocks.",
  },
];

const openings = [
  {
    title: "Senior CAD Design Engineer",
    team: "Engineering Design",
    type: "Full-time",
    location: "On-site",
    tags: ["CATIA", "NX / Unigraphics", "GD&T", "DFM"],
    desc: "Lead complex 3D modelling and detailed design across automotive and aerospace programs. Own the design intent from concept sketch to released drawing.",
  },
  {
    title: "FEA / Structural Analysis Engineer",
    team: "Analysis",
    type: "Full-time",
    location: "On-site",
    tags: ["ANSYS", "Nastran", "FEA", "CFD"],
    desc: "Run finite element and computational fluid dynamics simulations to validate structural and thermal performance. Work directly with design teams to iterate fast.",
  },
  {
    title: "Mould & Tooling Design Engineer",
    team: "Manufacturing Engineering",
    type: "Full-time",
    location: "On-site",
    tags: ["Mould Design", "Press Tool", "BIW", "DFMA"],
    desc: "Design injection moulds, press tools, and BIW jigs. Conduct moldflow analysis and collaborate with shop floor teams to ensure first-time-right tooling.",
  },
  {
    title: "Technical Animation Specialist",
    team: "Technical Publication",
    type: "Full-time",
    location: "On-site / Hybrid",
    tags: ["3DS Max", "CATIA Composer", "Keyshot", "Exploded Views"],
    desc: "Produce factory-simulation animations, exploded-view sequences, and technical documentation that bridge engineering and communication for OEM clients.",
  },
  {
    title: "PCB & Electronics Design Engineer",
    team: "Electronics Manufacturing",
    type: "Full-time",
    location: "On-site",
    tags: ["Altium", "KiCad", "Schematic", "PCB Layout"],
    desc: "Design and validate PCB schematics and layouts for electromechanical products. Coordinate with mechanical teams for integration into full-product assemblies.",
  },
  {
    title: "Engineering Project Manager",
    team: "Integrated Delivery",
    type: "Full-time",
    location: "On-site",
    tags: ["Project Planning", "Client Communication", "Milestone Tracking"],
    desc: "Own end-to-end project delivery from brief to production handoff. Keep milestone reports transparent, surface bottlenecks early, and be the single point of truth for clients.",
  },
];

const values = [
  { label: "Precision", desc: "We do not approximate. Every output is validated against spec." },
  { label: "Transparency", desc: "Clients see what we see — bottlenecks, milestones, and all." },
  { label: "Ownership", desc: "Everyone holds their deliverable through to its manufactured form." },
  { label: "Speed", desc: "We move fast without sacrificing the ISO-certified quality bar." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative z-[1] pt-28 md:pt-36 pb-20 md:pb-28 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground overflow-hidden">
        {/* subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 72% 55% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(214 72% 55% / 0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Careers at Batara
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-[1.03] tracking-tight text-primary-foreground mb-6">
              BUILD WHAT OTHERS<br />
              <span className="text-[hsl(214_72%_65%)]">ONLY SIMULATE.</span>
            </h1>
            <p className="text-primary-foreground/70 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl mx-auto mb-8">
              At Batara Techno Solutions, every engineer's output ends on a shop floor. If you want work that matters —
              that goes from your screen into aerospace hardware, automotive bodies, and medical instruments — this is your place.
            </p>
            <a
              href="mailto:careers@bataratechnosolutions.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-extrabold text-sm tracking-wide rounded-lg hover:bg-[hsl(214_72%_44%)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(214_72%_37%/0.5)] transition-all relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <Mail className="w-4 h-4 relative" />
              <span className="relative">Send Your Application</span>
              <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join Us ──────────────────────────────────────────── */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Why Batara
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground mb-3">
              ENGINEERING THAT SHIPS
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
              Six reasons why engineers who want real-world impact choose to grow with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 hover:shadow-[0_4px_20px_hsl(214_72%_37%/0.08)] transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ───────────────────────────────────────── */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Open Roles
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground mb-3">
              CURRENT OPENINGS
            </h2>
            <p className="text-primary-foreground/60 text-[15px] max-w-xl mx-auto">
              All roles are hands-on, cross-disciplinary, and production-oriented.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
                className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/40 hover:shadow-[0_4px_20px_hsl(214_72%_37%/0.15)] transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-primary-foreground text-lg leading-snug">
                    {job.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-primary">
                    <Briefcase className="w-3 h-3" />{job.team}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-primary-foreground/50">
                    <Clock className="w-3 h-3" />{job.type}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-primary-foreground/50">
                    <MapPin className="w-3 h-3" />{job.location}
                  </span>
                </div>

                <p className="text-primary-foreground/65 text-sm leading-relaxed mb-4">{job.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/15 border border-primary/25 rounded text-[10px] font-mono font-semibold tracking-wider text-primary uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────── */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Our Culture
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground mb-3">
              WHAT WE STAND FOR
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="border border-border rounded-lg p-6 bg-card text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-extrabold text-primary text-lg">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">{v.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply CTA ────────────────────────────────────────────── */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 72% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(214 72% 55% / 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Join the Team
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground mb-5">
              READY TO ENGINEER REALITY?
            </h2>
            <p className="text-primary-foreground/65 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
              Send your CV, portfolio, and a brief note on what you want to build to our careers team. We review every application and respond within 5 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@bataratechnosolutions.com"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-extrabold text-sm tracking-wide rounded-lg hover:bg-[hsl(214_72%_44%)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(214_72%_37%/0.5)] transition-all relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <Mail className="w-4 h-4 relative" />
                <span className="relative">careers@bataratechnosolutions.com</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-primary-foreground/40 text-[12px] font-mono tracking-wider uppercase mt-6">
              We are an equal opportunity employer.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
