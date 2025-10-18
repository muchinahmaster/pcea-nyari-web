import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Music, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/prayer" className="hover:text-white">Prayer Requests</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Nyari Estate, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+254 793 060491</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>pceanyariparish@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Nyariparish" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@pceanyari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/pceanyari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@pceanyari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Music className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PCEA NYARI CHURCH. All rights reserved. | Built with faith and love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
