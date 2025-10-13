
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChurchHistory from "@/components/ChurchHistory";
import MissionVisionValues from "@/components/MissionVisionValues";
import ServiceTimes from "@/components/ServiceTimes";
import Announcements from "@/components/Announcements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ChurchHistory />
      <MissionVisionValues />
      <ServiceTimes />
      <Announcements />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
