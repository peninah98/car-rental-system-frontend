import { motion } from 'framer-motion'
import { Users, Target, Lightbulb } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Who We Are
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re a passionate team of creators, builders, and dreamers focused on redefining how you find your perfect home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4 mx-auto">
              <Target />
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make homeownership simple, affordable, and accessible through innovative solutions tailored for every lifestyle.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4 mx-auto">
              <Lightbulb />
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading platform for smart and sustainable housing solutions across Africa and beyond.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <Users />
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of tech enthusiasts, engineers, and designers driven by innovation and community impact.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-400 to-purple-500 text-white py-12 px-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <p className="max-w-3xl mx-auto text-lg">
            We're not just another real estate platform. We're your trusted partner in the journey of finding a place to truly call home—innovative, human-centered, and impact-driven.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
