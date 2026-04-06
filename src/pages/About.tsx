import { motion } from "motion/react";
import { CheckCircle, Users, Heart, Sparkles, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary-light/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            About Akshara <br />
            <span className="text-primary italic">Beauty Parlour</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A story of passion, beauty, and expert care in the heart of Dharavi, Mumbai.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
                alt="Salon Interior"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-4xl font-serif font-bold block">10+</span>
                <span className="text-sm uppercase tracking-widest">Years of <br />Experience</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a vision to provide premium beauty services to the local community, Akshara Beauty Parlour has grown into a trusted name in Dharavi. We believe that everyone deserves to feel beautiful and confident.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our journey started over a decade ago with a small team and a big dream. Today, we are proud to have served over 400+ happy clients, specializing in bridal makeovers and advanced hair treatments.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Expert Stylists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Hygienic Setup</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Affordable Price</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Premium Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-full bg-primary-light text-primary mb-8">
            <Heart size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-8">Our Mission</h2>
          <p className="text-2xl font-serif italic text-gray-700 leading-relaxed">
            "To provide affordable, high-quality beauty services that empower local customers and enhance their natural beauty through personalized care and expert techniques."
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Experienced Stylists</h3>
              <p className="text-gray-600">Our team consists of certified professionals with years of experience in bridal and hair care.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Hygienic Environment</h3>
              <p className="text-gray-600">We maintain strict hygiene standards and use sanitized tools for every single client.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
              <p className="text-gray-600">We take the time to understand your needs and provide customized beauty solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
