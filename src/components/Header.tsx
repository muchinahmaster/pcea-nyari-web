
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
              <img 
                src="/lovable-uploads/fca4641c-d4bf-4ea6-9a5d-76487b0a5d29.png" 
                alt="PCEA Nyari Parish Logo" 
                className="h-12 w-12 object-contain"
              />
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
    </>
  );
};

export default Header;
