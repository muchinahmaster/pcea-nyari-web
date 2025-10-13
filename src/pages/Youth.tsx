import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Youth = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary/80 to-primary/60 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/c8b8453f-eeef-4726-ab8c-963f697161da.png')",
          }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to PCEA NYARI Youth Ministry</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Building the next generation of faith leaders through engaging programs and activities.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
              Our History
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The Youth Ministry at PCEA Nyari has been instrumental in nurturing young believers
                  and helping them discover their purpose in Christ. Through fellowship, worship, and
                  service, we empower the youth to become strong leaders in their communities.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our ministry meets every Wednesday at 5:00 PM for Bible study, worship, and fellowship.
                  We organize various activities including retreats, community service projects, and
                  youth conferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/lovable-uploads/c8b8453f-eeef-4726-ab8c-963f697161da.png')",
                  }}
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Activity {item}</h3>
                  <p className="text-sm text-muted-foreground">
                    Description of youth ministry activity
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Youth;
