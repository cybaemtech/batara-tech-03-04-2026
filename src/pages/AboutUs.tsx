import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Award, Eye, Users, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const verticals = [
  { name: "Automotive Engineering", years: "20 Years", highlight: true },
  { name: "Aerospace & Space", years: "10 Years", highlight: true },
  { name: "Medical & Electromechanical", years: "10 Years", highlight: true },
  { name: "Consumer Products", years: "", highlight: false },
  { name: "Heavy Machinery", years: "", highlight: false },
];

const standards = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "We are an ISO Certified organization that delivers multiple concept designs and rigorous quality processes.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "We provide timely reports, transparent bottleneck identification, and actionable proposed solutions.",
  },
  {
    icon: Users,
    title: "Elite Talent",
    desc: "We staff highly professional engineers and designers, and provide comprehensive staffing solutions and training.",
  },
];

const executives = [
  {
    name: "Sacheen",
    image: "/executives/icon-vipin.png",
    email: "sacheen@bataratechnosolutions.com",
    desc: "Sacheen drives the visual and operational proof of our capabilities. Dedicated to showcasing real-world manufacturing achievements, he ensures that our engineering solutions—from space simulation models to advanced food processing designs—are clearly communicated and validated through tangible deliverables, technical animations, and verified client testimonials.",
  },
  {
    name: "Dileesh",
    image: "/executives/icon-vipin.png",
    email: "dileesh@bataratechnosolutions.com",
    desc: "As a core pillar of our executive team, Dileesh champions our End-to-End (E-2-E) solution ecosystem. He ensures seamless integration across our horizontal services—including Product Design, Manufacturing, Analysis, and Production Support—guaranteeing that every project transitions flawlessly from the detailed design phase to a fully realized prototype and final product.",
  },
  {
    name: "Vipin Kalathil",
    image: "/executives/icon-vipin.png",
    email: "vipin@bataratechnosolutions.com",
    desc: "Vipin oversees the rigorous standards that define Batara Techno Solutions. He ensures that our deep expertise across verticals like Automotive, Aerospace, and Medical is applied precisely to our manufacturing capabilities, including Sheet Metal Design, Plastic Moulding, Casting, and Tool Designing. His focus is on maintaining our ISO-certified quality, ensuring milestone achievements, and delivering on-time results.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative z-[1] pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-8 md:px-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                About Us
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              ENGINEERING REALITY, TOGETHER.
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mx-auto mb-6">
              At Batara Techno Solutions, we do not just conceptualize; we
              manufacture. Built specifically for the demands of OEMs, Tier-1,
              and Tier-2 organizations, we bridge the critical gap between
              theoretical design and shop-floor reality.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Our foundation is built on a single, uncompromising promise: By
              partnering with premier electronics and mechanical organizations,
              we operate as a complete{" "}
              <Link
                to="/#services"
                className="text-primary underline underline-offset-4 hover:text-accent-orange-2 transition-colors"
              >
                End-to-End (E-2-E) Solution Ecosystem
              </Link>
              —taking your problem statement from the ideation phase through to
              final production support.
            </p>
            <div className="inline-block border border-primary/40 bg-primary/5 rounded-lg px-6 py-3">
              <span className="font-display font-bold text-primary text-lg tracking-wide">
                FINAL DESIGNED PRODUCT = MANUFACTURED PRODUCT
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Pedigree */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Industry Pedigree
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground">
              DECADES OF BATTLE-TESTED EXPERIENCE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="font-display font-bold text-primary-foreground text-lg mb-2">
                  {v.name}
                </div>
                {v.years && (
                  <div className="font-mono text-xs text-accent-orange-2 tracking-wider font-semibold">
                    {v.years}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Batara Standard */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                The Batara Standard
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground">
              PROTECTING YOUR INVESTMENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
                Executive Leadership
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground">
              DRIVEN BY PRECISION & TRANSPARENCY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executives.map((exec, i) => (
              <motion.div
                key={exec.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full border-2 border-primary/40 shrink-0 shadow-[0_0_20px_hsl(var(--primary)/0.2)] overflow-hidden">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-foreground text-lg">
                      {exec.name}
                    </h3>
                    <p className="font-mono text-[11px] text-primary tracking-wider uppercase">
                      Executive Head
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${exec.email}`}
                  className="flex items-center gap-2 text-accent-orange-2 text-xs font-mono mb-4 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {exec.email}
                </a>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {exec.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Strategic CTA */}
          <motion.div {...fadeUp} className="text-center mt-16">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary rounded-lg text-primary-foreground font-display font-bold text-[15px] tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
            >
              <Shield className="w-4 h-4" />
              See How Our Executives Engineer Reality
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
