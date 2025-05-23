import { motion } from "framer-motion"
import { Building2, Users, Handshake, Globe2 } from "lucide-react"

const services = [
  {
    title: "Property Listings",
    description: "We offer a wide selection of affordable, premium, and luxury homes in Kigali and beyond.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Customer Support",
    description: "Our team is available to guide and support you throughout your property journey.",
    icon: <Users className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Trusted Agents",
    description: "Work with verified and experienced agents who understand your needs.",
    icon: <Handshake className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Global Reach",
    description: "Helping Rwandans abroad invest confidently in real estate back home.",
    icon: <Globe2 className="w-8 h-8 text-yellow-600" />,
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white bg-[url('/house1.png')]">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-2xl px-4"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-white/80">
            Your trusted partner in finding the perfect home.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            We simplify real estate for everyone—from first-time renters to experienced investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  >
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-indigo-100" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To redefine the real estate experience in Rwanda by offering reliable, transparent, and innovative services.
          We empower individuals and families—locally and abroad—to confidently find their dream home or secure a
          meaningful investment property.
        </p>
      </div>
    </div>

    <div className="relative w-full h-[320px]">
      <div className="absolute inset-0 rounded-xl bg-indigo-600 opacity-10" />
      <img
        src="../public/house1.png"
        alt="Mission"
        className="w-full h-full object-cover rounded-xl shadow-lg object-center"
      />
    </div>
  </motion.div>
</section>

    </main>
  )
}
