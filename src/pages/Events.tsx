
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Church Conference",
      date: "December 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Sanctuary",
      description: "Join us for three days of worship, fellowship, and spiritual renewal with guest speakers and special sessions."
    },
    {
      title: "Christmas Carol Service",
      date: "December 24, 2024",
      time: "6:00 PM",
      location: "Main Sanctuary",
      description: "Celebrate the birth of our Savior with special Christmas music, worship, and the nativity story."
    },
    {
      title: "New Year Prayer Service",
      date: "December 31, 2024",
      time: "10:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      description: "Welcome the new year with prayer, worship, and thanksgiving as we seek God's blessing for 2025."
    },
    {
      title: "New Members Class",
      date: "Starting January 5, 2025",
      time: "Sunday 2:00 PM",
      location: "Fellowship Hall",
      description: "Discover what it means to be part of our church family and learn about our beliefs and mission."
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
            <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Stay connected with our church community through special events and gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-900">{event.date}</Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{event.title}</CardTitle>
                  <div className="text-sm text-gray-600">
                    <p>{event.time} • {event.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
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

export default Events;
