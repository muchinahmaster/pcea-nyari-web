
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Ministries = () => {
  const ministries = [
    {
      title: "Youth Ministry",
      description: "Building the next generation of faith leaders through engaging programs and activities.",
      schedule: "Wednesday 5:00 PM"
    },
    {
      title: "Women's Fellowship",
      description: "Empowering women to grow in faith and support one another in Christian sisterhood.",
      schedule: "Saturday 2:00 PM"
    },
    {
      title: "Men's Ministry",
      description: "Equipping men to be godly leaders in their families and communities.",
      schedule: "First Saturday of the month"
    },
    {
      title: "Children's Church",
      description: "Fun and educational programs designed to teach children about God's love.",
      schedule: "Sunday during main service"
    },
    {
      title: "Choir Ministry",
      description: "Leading worship through music and inspiring the congregation through song.",
      schedule: "Saturday 4:00 PM practice"
    },
    {
      title: "Prayer Ministry",
      description: "Dedicated time for intercession and spiritual warfare for our community.",
      schedule: "Thursday 5:00-7:00 PM"
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
            <h1 className="text-5xl font-bold mb-6">Our Ministries</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Discover the various ways you can get involved and grow in your faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <p className="text-sm font-semibold text-blue-900">{ministry.schedule}</p>
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

export default Ministries;
