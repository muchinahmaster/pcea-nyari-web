import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Church, Users, Calendar, MessageSquare, Bell, BookOpen, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+254 793 060491</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>pceanyariparish@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="hover:text-blue-200">Member Login</Link>
            <Link to="/register" className="hover:text-blue-200">Join Us</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Church className="h-10 w-10 text-blue-900" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">PCEA NYARI CHURCH</h1>
                <p className="text-sm text-gray-600">Connecting Hearts, Building Faith</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
              <Link to="/ministries" className="text-gray-700 hover:text-blue-900 font-medium">Ministries</Link>
              <Link to="/events" className="text-gray-700 hover:text-blue-900 font-medium">Events</Link>
              <Link to="/resources" className="text-gray-700 hover:text-blue-900 font-medium">Resources</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
              <Button asChild className="bg-blue-900 hover:bg-blue-800">
                <Link to="/dashboard">Member Portal</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
                <Link to="/ministries" className="text-gray-700 hover:text-blue-900 font-medium">Ministries</Link>
                <Link to="/events" className="text-gray-700 hover:text-blue-900 font-medium">Events</Link>
                <Link to="/resources" className="text-gray-700 hover:text-blue-900 font-medium">Resources</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
                <Button asChild className="bg-blue-900 hover:bg-blue-800 w-full">
                  <Link to="/dashboard">Member Portal</Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h2 className="text-5xl font-bold mb-6">
              Welcome to PCEA NYARI CHURCH
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              A place where faith grows, community thrives, and hearts are transformed. 
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

      {/* Service Times */}
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

      {/* Latest News & Announcements */}
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
                  <Button variant="link" className="p-0 mt-3 text-blue-900">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-blue-100 mb-6">
                We'd love to hear from you. Whether you're seeking prayer, have questions, 
                or want to get involved, our doors are always open.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>REDHILL RD, Nairobi Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>PO BOX 1202-00621 Village Market, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+254 793 060491</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>pceanyariparish@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Church className="h-32 w-32 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">Visit Us This Sunday</h4>
              <p className="text-blue-100">Experience worship that transforms lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Church className="h-6 w-6" />
                <span className="text-xl font-bold">PCEA NYARI CHURCH</span>
              </div>
              <p className="text-gray-400 mb-4">
                PCEA Nyari Parish is a Church where you are Welcomed, Accepted, Loved and Shepherded.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/ministries" className="hover:text-white">Ministries</Link></li>
                <li><Link to="/events" className="hover:text-white">Events</Link></li>
                <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ministries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/youth" className="hover:text-white">Youth Ministry</Link></li>
                <li><Link to="/womens" className="hover:text-white">Women's Fellowship</Link></li>
                <li><Link to="/mens" className="hover:text-white">Men's Ministry</Link></li>
                <li><Link to="/children" className="hover:text-white">Children's Church</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/prayer" className="hover:text-white">Prayer Requests</Link></li>
                <li><Link to="/login" className="hover:text-white">Member Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PCEA NYARI CHURCH. All rights reserved. | Built with faith and love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
