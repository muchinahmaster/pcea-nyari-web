
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChurchHistory from "@/components/ChurchHistory";
import MissionVisionValues from "@/components/MissionVisionValues";
import ServiceTimes from "@/components/ServiceTimes";
import Announcements from "@/components/Announcements";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
              Theme of the Year
            </h2>
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div 
                className="h-64 bg-cover bg-center rounded-lg mb-6"
                style={{
                  backgroundImage: "url('/lovable-uploads/c8b8453f-eeef-4726-ab8c-963f697161da.png')",
                }}
              />
              <blockquote className="text-center">
                <p className="text-xl italic text-muted-foreground mb-4">
                  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
                </p>
                <footer className="text-lg font-semibold text-foreground">
                  — Jeremiah 29:11
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <ChurchHistory />
      <MissionVisionValues />
      <ServiceTimes />
      <Announcements />
      <Footer />
    </div>
  );
};

export default Index;
