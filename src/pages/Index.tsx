
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Church, Users, Calendar, MessageSquare, Bell, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Church className="h-8 w-8" />,
      title: "Church Pages",
      description: "Create beautiful public profiles for your church community"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Groups",
      description: "Join Bible study groups, choir, youth fellowship and more"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events & Services",
      description: "Organize and join church events, both online and in-person"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Prayer Wall",
      description: "Share prayer requests and support one another in faith"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Announcements",
      description: "Stay updated with devotionals, testimonies and church news"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Sermon Archive",
      description: "Access sermons, audio recordings and study notes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Church className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">FaithConnect</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link to="/churches" className="text-gray-600 hover:text-blue-600 transition-colors">Churches</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Connecting Faith Communities
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Build Stronger Church Communities
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            FaithConnect brings your church community together with powerful tools for worship, fellowship, 
            and spiritual growth. Share devotionals, organize events, and strengthen bonds of faith.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link to="/register">Start Your Community</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Your Church Needs
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From prayer walls to sermon archives, FaithConnect provides all the tools 
              to nurture spiritual growth and community connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-blue-600 mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Church Community?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of churches already using FaithConnect to build stronger, 
            more connected communities of faith.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Church className="h-6 w-6" />
                <span className="text-xl font-bold">FaithConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting church communities through faith and fellowship.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/churches" className="hover:text-white">Churches</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FaithConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
