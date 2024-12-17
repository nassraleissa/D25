'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ClientOnly } from './ClientComponent'

export default function CTA() {
  return (
    <section 
      className="relative py-24 px-4 text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&h=800&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <ClientOnly>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Join thousands of businesses leveraging our cutting-edge platform to drive growth and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </ClientOnly>
    </section>
  )
}
