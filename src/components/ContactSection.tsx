
import { Church, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
