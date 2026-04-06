import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Scissors, Sparkles, Heart, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

const highlights = [
  { icon: Star, label: "4.8 Rating", sub: "40+ Happy Clients", color: "text-yellow-500" },
  { icon: Scissors, label: "Bridal & Hair", sub: "Specialists", color: "text-primary" },
  { icon: MapPin, label: "Convenient", sub: "Dharavi Location", color: "text-red-500" },
];

const servicesPreview = [
  { title: "Bridal Hairstyling", img: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=800&auto=format&fit=crop" },
  { title: "Haircuts & Styling", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop" },
  { title: "Hair Treatments", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" },
  { title: "Makeup Services", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Best bridal makeup I've ever had! Akshara and her team are truly professional and made me look like a queen on my big day.", rating: 5 },
  { name: "Anjali Gupta", text: "I regularly visit for hair spa and threading. The service is always consistent and the staff is very friendly. Highly recommended!", rating: 5 },
  { name: "Sneha Patil", text: "Found this gem in Dharavi. Affordable pricing without compromising on quality. My hair smoothening results are amazing!", rating: 4 },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1920&auto=format&fit=crop"
            alt="Bridal Hairstyle"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Transform Your Look <br />
              <span className="text-primary italic">with Expert Care</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-gray-100">
              Premium Beauty & Hair Services in Dharavi, Mumbai. 
              Discover the best version of yourself with our specialized treatments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/910000000000"
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Book Appointment
              </a>
              <a
                href="tel:+910000000000"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className={cn("p-3 rounded-full bg-white shadow-sm", h.color)}>
                  <h.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{h.label}</h4>
                  <p className="text-gray-500 text-sm">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Services We Offer</h2>
              <p className="text-gray-600 mt-4">
                From everyday grooming to your most special occasions, we provide a wide range of premium services tailored to your needs.
              </p>
            </div>
            <Link to="/services" className="flex items-center text-primary font-bold hover:underline group">
              View All Services
              <ChevronRight size={20} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-serif font-bold text-xl">{s.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-primary-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Take a look at some of our recent transformations and bridal makeovers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`https://picsum.photos/seed/beauty-${n}/600/600`}
                  alt="Gallery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-white text-primary border border-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-sm">{t.name}</span>
                </div>
                <Heart className="absolute top-8 right-8 text-primary/10" size={40} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-primary overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://www.transparenttextures.com/patterns/cubes.png"
              alt="Pattern"
              className="w-full h-full object-repeat"
            />
          </div>
          <div className="relative z-10 py-16 px-8 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Book Your Appointment Today!</h2>
            <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
              Ready for a transformation? Contact us now to reserve your slot and experience premium beauty care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all"
              >
                Get Started
              </Link>
              <a
                href="https://wa.me/910000000000"
                className="w-full sm:w-auto bg-primary-dark text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-black/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
