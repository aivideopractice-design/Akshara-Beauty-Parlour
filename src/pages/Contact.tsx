import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 px-4 bg-primary-light/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or want to visit? We're here to help you.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-12">
                Visit our parlour for a consultation or reach out to us via phone or WhatsApp. We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Location</h4>
                  <p className="text-gray-600">123, Main Road, Dharavi, Mumbai - 400017</p>
                  <p className="text-gray-500 text-sm mt-1">Near Dharavi Police Station</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Call or WhatsApp</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-lg mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href="https://wa.me/910000000000" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="lg:w-1/2">
            <div className="h-full min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.9123456789!2d72.85!3d19.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d9d9d9d9d9%3A0x1234567890abcdef!2sDharavi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Akshara Beauty Parlour Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
