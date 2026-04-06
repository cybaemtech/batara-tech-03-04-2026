import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: string;
  numericValue: number | null;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    value: "20+",
    numericValue: 20,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Industry expertise since 2004",
  },
  {
    value: "ISO",
    numericValue: null,
    suffix: "",
    label: "Certified Quality",
    sublabel: "International standards assured",
  },
  {
    value: "100%",
    numericValue: 100,
    suffix: "%",
    label: "On-Time Delivery",
    sublabel: "Zero-compromise commitment",
  },
];

const useCountUp = (target: number, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const AnimatedNumber = ({
  item,
  animate,
  index,
}: {
  item: StatItem;
  animate: boolean;
  index: number;
}) => {
  const count = useCountUp(item.numericValue ?? 0, 1600 + index * 200, animate);

  if (item.numericValue === null) {
    return (
      <span className="font-display text-4xl md:text-5xl font-black tracking-tight text-foreground leading-none">
        {item.value}
      </span>
    );
  }

  return (
    <span className="font-display text-4xl md:text-5xl font-black tracking-tight text-foreground leading-none">
      {animate ? count : 0}
      {item.suffix}
    </span>
  );
};

const TrustBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={ref}
      className="relative z-[1] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(13,20,35,0.95) 0%, rgba(8,14,26,1) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E87722] to-transparent opacity-60" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group flex flex-col items-center text-center px-10 py-10 md:py-12"
          >
            {/* Vertical divider between items */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            )}

            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#E87722]/[0.04] to-transparent rounded-sm" />

            {/* Number */}
            <div className="relative mb-3">
              <AnimatedNumber item={item} animate={isInView} index={index} />
            </div>

            {/* Label */}
            <div className="font-display text-sm font-semibold text-white/90 tracking-wide mb-1">
              {item.label}
            </div>

            {/* Sublabel */}
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              {item.sublabel}
            </div>

            {/* Bottom accent */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E87722] to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "40%", opacity: 0.5 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a3a6e] to-transparent opacity-80" />
    </div>
  );
};

export default TrustBar;
