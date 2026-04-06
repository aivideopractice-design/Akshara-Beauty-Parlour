import { motion } from "motion/react";
import { Scissors, Heart, Sparkles, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hair",
    title: "Hair Services",
    icon: Scissors,
    services: [
      { name: "Haircut", price: "₹250 - ₹800", desc: "Professional cuts for all hair types and styles." },
      { name: "Hair Styling", price: "₹500+", desc: "Blowouts, curls, and elegant updos for any occasion." },
      { name: "Hair Spa", price: "₹1,200+", desc: "Deep conditioning and scalp treatment for healthy hair." },
      { name: "Hair Smoothening", price: "₹4,000+", desc: "Premium chemical treatments for silky, straight hair." },
    ]
  },
  {
    id: "bridal",
    title: "Bridal Services",
    icon: Heart,
    services: [
      { name: "Bridal Hairstyling", price: "₹2,500+", desc: "Exquisite traditional and modern bridal hair designs." },
      { name: "Bridal Makeup", price: "₹5,000+", desc: "Professional HD and airbrush makeup for your big day." },
      { name: "Saree Draping", price: "₹500+", desc: "Perfectly pleated saree draping in various styles." },
    ]
  },
  {
    id: "skin",
    title: "Skin & Grooming",
    icon: Sparkles,
    services: [
      { name: "Facial", price: "₹800 - ₹3,500", desc: "Customized facials for glowing and healthy skin." },
      { name: "Threading", price: "₹50+", desc: "Precise eyebrow and facial hair threading." },
      { name: "Waxing", price: "₹300 - ₹1,500", desc: "Full body and partial waxing services." },
    ]
  }
];

export default function Services() {
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
            Our Services
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our range of professional beauty and hair treatments designed to make you look and feel your best.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center space-x-4 mb-12">
                <div className="p-4 rounded-2xl bg-primary text-white shadow-lg">
                  <cat.icon size={32} />
                </div>
                <h2 className="text-4xl font-serif font-bold">{cat.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.services.map((service, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">{service.name}</h3>
                      <span className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm font-bold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-primary-light/30 p-8 rounded-3xl border border-primary/10 text-center">
          <p className="text-gray-700 italic">
            * Prices mentioned are starting ranges and may vary based on hair length, product choice, and specific requirements. 
            Please consult with our experts for a final quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ready for your makeover?</h2>
        <Link
          to="/booking"
          className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-primary-dark transition-all"
        >
          Book Your Slot Now
          <ChevronRight size={20} className="ml-2" />
        </Link>
      </section>
    </div>
  );
}
