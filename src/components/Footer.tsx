
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/fca4641c-d4bf-4ea6-9a5d-76487b0a5d29.png" 
                alt="PCEA Nyari Parish Logo" 
                className="h-6 w-6 object-contain"
              />
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
          <p>&copy; 2025 PCEA NYARI CHURCH. All rights reserved. | Built with faith and love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
