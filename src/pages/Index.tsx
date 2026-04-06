import type { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import OurServicesSection from "@/components/OurServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const panelStyle = (zIndex: number, first = false): CSSProperties => ({
  position: "sticky",
  top: 0,
  zIndex,
  borderRadius: "1.5rem 1.5rem 0 0",
  boxShadow: "0 -32px 60px rgba(0,0,0,0.55)",
  ...(first ? { marginTop: "-1.5rem" } : {}),
});

const Index = () => {
  return (
    <div style={{ background: "#060c1a" }}>
      <Navbar />

      {/* Hero — pinned behind everything */}
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <HeroSection />
      </div>

      {/* Panel 1 — TrustBar + Industries We Serve */}
      <div className="bg-background" style={panelStyle(10, true)}>
        <TrustBar />
        <ServicesSection />
      </div>

      {/* Panel 2 — Our Services */}
      <div className="bg-background" style={panelStyle(20)}>
        <OurServicesSection />
      </div>

      {/* Panel 3 — Testimonials */}
      <div className="bg-background" style={panelStyle(30)}>
        <TestimonialsSection />
      </div>

      {/* Panel 4 — Contact + Footer (final, no sticky needed) */}
      <div
        className="bg-background"
        style={{
          position: "relative",
          zIndex: 40,
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow: "0 -32px 60px rgba(0,0,0,0.55)",
        }}
      >
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
