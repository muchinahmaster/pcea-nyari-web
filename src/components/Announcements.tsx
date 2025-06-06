
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Announcements = () => {
  const announcements = [
    {
      title: "Annual Church Conference",
      date: "December 15-17, 2024",
      description: "Join us for three days of worship, fellowship, and spiritual renewal."
    },
    {
      title: "Christmas Carol Service",
      date: "December 24, 2024",
      description: "Celebrate the birth of our Savior with special music and worship."
    },
    {
      title: "New Members Class",
      date: "Starting January 2025",
      description: "Discover what it means to be part of our church family."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Announcements</h3>
          <p className="text-gray-600">Stay updated with what's happening in our church community</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-900">{announcement.date}</Badge>
                </div>
                <CardTitle className="text-xl">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{announcement.description}</p>
                <Button variant="link" className="p-0 mt-3 text-blue-900" asChild>
                  <Link to="/events">Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
