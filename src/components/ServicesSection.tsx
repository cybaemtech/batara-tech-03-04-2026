import { motion } from "framer-motion";
import { ArrowRight, Car, Rocket, Zap, HeartPulse, ShoppingBag, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Automotive Engineering",
    years: "20 years",
    icon: Car,
    bg: "/ind-automotive.png",
    accent: "hsl(214 72% 37%)",
    href: "/services",
  },
  {
    name: "Aerospace & Space",
    years: "10 years",
    icon: Rocket,
    bg: "/ind-aerospace.png",
    accent: "hsl(220 58% 22%)",
    href: "/services",
  },
  {
    name: "Electro Mechanical",
    years: "10 years",
    icon: Zap,
    bg: "/ind-electro.png",
    accent: "hsl(214 72% 45%)",
    href: "/services",
  },
  {
    name: "Medical Devices",
    years: "10 years",
    icon: HeartPulse,
    bg: "/ind-medical.png",
    accent: "hsl(220 58% 30%)",
    href: "/services",
  },
  {
    name: "Consumer Products",
    years: "",
    icon: ShoppingBag,
    bg: "/ind-consumer.png",
    accent: "hsl(214 72% 40%)",
    href: "/services",
  },
  {
    name: "Heavy Machinery",
    years: "",
    icon: Hammer,
    bg: "/ind-heavy.png",
    accent: "hsl(220 58% 22%)",
    href: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">
              Services &amp; Technology
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="section-title text-primary-foreground">
              INDUSTRIES WE SERVE
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <Link
                to={ind.href}
                className="group relative flex flex-col justify-end min-h-[220px] rounded-xl overflow-hidden border border-white/10 hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${ind.bg})` }}
                />

                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${ind.accent}cc, ${ind.accent}20 55%, transparent)`,
                  }}
                />

                {/* Icon top-left */}
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${ind.accent}33`,
                    border: `1px solid ${ind.accent}60`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <ind.icon className="w-4 h-4 text-white" />
                </div>

                {/* Text content */}
                <div className="relative z-10 p-5">
                  <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">
                    {ind.name}
                  </h3>
                  {ind.years && (
                    <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60">
                      {ind.years} experience
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 mt-3 text-[12px] font-semibold text-white/50 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
