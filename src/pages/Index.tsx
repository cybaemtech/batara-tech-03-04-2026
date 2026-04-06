import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import OurServicesSection from "@/components/OurServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ background: "#060c1a" }}>
      <Navbar />
      <div style={{ position: "sticky", top: 0, zIndex: 0 }}>
        <HeroSection />
      </div>
      <div
        className="bg-background"
        style={{
          position: "relative",
          zIndex: 10,
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow: "0 -40px 80px rgba(0,0,0,0.6)",
          marginTop: "-1.5rem",
        }}
      >
        <TrustBar />
        <ServicesSection />
        <OurServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
