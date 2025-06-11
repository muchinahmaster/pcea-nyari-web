
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/c8b8453f-eeef-4726-ab8c-963f697161da.png')",
        }}
      />
      <div className="absolute inset-0 bg-blue-900/70" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h2 className="text-5xl font-bold mb-6">
            Welcome to PCEA NYARI CHURCH
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            A church where you are welcomed, accepted, loved and shepherded. 
            Join us as we walk together in God's love and build a stronger church family.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/register">Join Our Community</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
