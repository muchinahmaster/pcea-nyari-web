
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/c8b8453f-eeef-4726-ab8c-963f697161da.png')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Learn more about PCEA Nyari Parish and our mission to build stronger church communities.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                PCEA Nyari Parish is a vibrant Christian community committed to spreading God's love 
                and building stronger church communities through faith, fellowship, and love.
              </p>
              <p className="text-gray-600 mb-4">
                We are a place where you are Welcomed, Accepted, Loved and Shepherded. Our mission 
                is to create an environment where every person can grow in their relationship with 
                Jesus Christ and find their place in God's family.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be a church that transforms lives and communities through the power of God's love, 
                  creating disciples who make disciples and building the kingdom of God on earth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
