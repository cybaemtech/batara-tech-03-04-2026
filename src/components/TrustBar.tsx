import { Clock, ShieldCheck, CheckCircle } from "lucide-react";

const steps = ["Concept", "Detailed Design", "Analysis", "Prototype", "Production Support"];

const TrustBar = () => {
  return (
    <div className="relative z-[1] bg-steel border-t border-b border-border overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-accent" />

      <div className="flex flex-wrap">
        {/* 20+ Years */}
        <TrustItem
          icon={<Clock className="w-[18px] h-[18px] text-accent-orange-2" />}
          value="20+"
          label="Years Experience"
        />

        {/* ISO */}
        <TrustItem
          icon={<ShieldCheck className="w-[18px] h-[18px] text-accent-orange-2" />}
          value="ISO"
          label="Certified Quality"
        />

        {/* 100% */}
        <TrustItem
          icon={<CheckCircle className="w-[18px] h-[18px] text-accent-orange-2" />}
          value="100%"
          label="On-Time Delivery"
        />

        {/* Pipeline — hidden on mobile, visible from md */}
        <div className="hidden md:flex flex-[1.6] min-w-0 items-center gap-4 px-6 lg:px-8 py-5 bg-accent/5 border-l border-accent/10">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {steps.map((step, i) => (
                <span key={step} className="contents">
                  <span className="font-mono text-[10px] lg:text-[11px] font-medium tracking-[0.08em] text-accent bg-accent/10 border border-accent/20 px-2 lg:px-2.5 py-1 rounded-sm whitespace-nowrap">
                    {step}
                  </span>
                  {i < steps.length - 1 && <span className="text-silver text-xs">→</span>}
                </span>
              ))}
            </div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-silver mt-1.5">
              End-to-End Engineering Pipeline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex-1 min-w-[180px] flex items-center gap-4 px-8 py-5 border-r border-foreground/5 hover:bg-foreground/[0.02] transition-colors">
    <div className="w-[38px] h-[38px] bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <div className="font-display text-xl font-extrabold text-foreground leading-none tracking-tight">{value}</div>
      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-silver mt-1">{label}</div>
    </div>
  </div>
);

export default TrustBar;
