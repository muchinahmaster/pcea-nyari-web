
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceTimes = () => {
  const services = [
    {
      title: "Sunday Worship",
      time: "8:30 AM & 11:00 AM",
      description: "Join us for inspiring worship and fellowship"
    },
    {
      title: "Youth Fellowship",
      time: "Wednesday 5:00 PM",
      description: "Building the next generation of faith leaders"
    },
    {
      title: "Intercessory Prayers",
      time: "Thursday 5:00-7:00 PM",
      description: "Come together in prayer and intercession"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come as you are and experience God's love in our welcoming community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">{service.title}</CardTitle>
                <Badge variant="outline" className="mx-auto">{service.time}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
