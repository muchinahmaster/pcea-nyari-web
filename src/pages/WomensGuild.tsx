import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const WomensGuild = () => {
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
            <h1 className="text-5xl font-bold mb-6">Welcome To PCEA NYARI Woman's Guild</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Empowering women to grow in faith and support one another in Christian sisterhood.
            </p>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
              Theme of the Year
            </h2>
            <Card>
              <CardContent className="p-8">
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
              </CardContent>
            </Card>
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
                  The Women's Guild at PCEA Nyari has been a source of spiritual strength and
                  fellowship for women in our community. Through prayer, Bible study, and service,
                  we uplift one another and make a meaningful impact.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We gather every Saturday at 2:00 PM for worship, fellowship, and ministry projects
                  that serve our church and community with love and compassion.
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
                    Description of Women's Guild activity
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

export default WomensGuild;
