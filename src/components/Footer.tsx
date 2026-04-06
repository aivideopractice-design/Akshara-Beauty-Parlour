import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6">
            <span className="text-2xl font-serif font-bold text-primary tracking-tight">Akshara</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 -mt-1">Beauty Parlour</span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Transforming beauty with expert care in the heart of Dharavi. We specialize in bridal makeovers, 
            hair styling, and premium skin treatments.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/910000000000" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-primary text-sm transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="text-gray-600 hover:text-primary text-sm transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="text-gray-600 hover:text-primary text-sm transition-colors">Book Now</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-4">
            <li className="text-gray-600 text-sm">Bridal Hairstyling</li>
            <li className="text-gray-600 text-sm">Professional Makeup</li>
            <li className="text-gray-600 text-sm">Hair Smoothening</li>
            <li className="text-gray-600 text-sm">Premium Facials</li>
            <li className="text-gray-600 text-sm">Hair Spa & Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-gray-600 text-sm">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span>123, Main Road, Dharavi, Mumbai - 400017</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 text-sm">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 text-sm">
              <Mail size={18} className="text-primary shrink-0" />
              <span>info@akshara-beauty.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Akshara Beauty Parlour. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
