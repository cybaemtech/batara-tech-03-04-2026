import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <div className="sticky top-0 z-0">
        <HeroSection />
      </div>
      <div className="relative z-10 bg-background">
        <TrustBar />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
