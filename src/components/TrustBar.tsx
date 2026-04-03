import { Clock, ShieldCheck, CheckCircle } from "lucide-react";

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
