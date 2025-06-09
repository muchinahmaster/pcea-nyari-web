
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Video, Music } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Sermons & Teaching",
      description: "Access our weekly sermon recordings and Bible study materials.",
      items: ["Weekly Sermons", "Bible Study Guides", "Devotional Materials"]
    },
    {
      icon: Music,
      title: "Worship Resources",
      description: "Song lyrics, chord charts, and worship materials for personal use.",
      items: ["Song Lyrics", "Chord Charts", "Worship Guides"]
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Watch our live services and special event recordings.",
      items: ["Live Service Recordings", "Special Events", "Youth Programs"]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Downloadable resources for personal and group study.",
      items: ["Prayer Guides", "Bible Reading Plans", "Study Materials"]
    }
  ];

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
            <h1 className="text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Access spiritual resources to help you grow in your faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="h-8 w-8 text-blue-900" />
                      <CardTitle className="text-xl text-blue-900">{category.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Access Resources
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
