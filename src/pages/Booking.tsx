import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, Calendar, User, Scissors, Clock, CheckCircle } from "lucide-react";

export default function Booking() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or WhatsApp
    console.log("Booking data:", formState);
    setSubmitted(true);
    
    // Construct WhatsApp message
    const message = `Hello Akshara Beauty Parlour, I'd like to book an appointment.\n\nName: ${formState.name}\nPhone: ${formState.phone}\nService: ${formState.service}\nDate: ${formState.date}\nTime: ${formState.time}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/910000000000?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Book Appointment
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready for your transformation? Choose your preferred method to book a slot with us.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Booking Options */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-3xl font-serif font-bold mb-8">Direct Booking</h2>
            
            <a 
              href="https://wa.me/910000000000"
              className="flex items-center p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 group hover:bg-[#25D366]/20 transition-all"
            >
              <div className="p-4 rounded-2xl bg-[#25D366] text-white mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={32} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">WhatsApp Chat</h4>
                <p className="text-gray-600 text-sm">Quickest way to book</p>
              </div>
            </a>

            <a 
              href="tel:+910000000000"
              className="flex items-center p-6 rounded-3xl bg-primary/10 border border-primary/20 group hover:bg-primary/20 transition-all"
            >
              <div className="p-4 rounded-2xl bg-primary text-white mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Call Us Now</h4>
                <p className="text-gray-600 text-sm">Speak with our experts</p>
              </div>
            </a>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold mb-4 flex items-center">
                <Clock size={20} className="text-primary mr-2" />
                Working Hours
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between"><span>Mon - Sat:</span> <span className="font-bold">10:00 AM - 08:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold">11:00 AM - 06:00 PM</span></li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Request Sent!</h2>
                  <p className="text-gray-600 mb-8">
                    We've received your request. Redirecting you to WhatsApp to confirm your booking...
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold mb-8">Online Request Form</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center">
                        <User size={16} className="mr-2 text-primary" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center">
                        <Phone size={16} className="mr-2 text-primary" /> Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center">
                      <Scissors size={16} className="mr-2 text-primary" /> Service Required
                    </label>
                    <select
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all appearance-none"
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Bridal Hairstyling">Bridal Hairstyling</option>
                      <option value="Haircut & Styling">Haircut & Styling</option>
                      <option value="Hair Smoothening">Hair Smoothening</option>
                      <option value="Facial & Skin Care">Facial & Skin Care</option>
                      <option value="Threading & Waxing">Threading & Waxing</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center">
                        <Calendar size={16} className="mr-2 text-primary" /> Preferred Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all"
                        value={formState.date}
                        onChange={(e) => setFormState({...formState, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center">
                        <Clock size={16} className="mr-2 text-primary" /> Preferred Time
                      </label>
                      <input
                        required
                        type="time"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all"
                        value={formState.time}
                        onChange={(e) => setFormState({...formState, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1"
                  >
                    Confirm via WhatsApp
                  </button>
                  <p className="text-center text-gray-500 text-xs">
                    By clicking, you will be redirected to WhatsApp to send your request details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
