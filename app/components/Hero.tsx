'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ClientOnly } from './ClientComponent'
import Image from 'next/image'

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <ClientOnly>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center max-w-3xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionize Your Digital Experience
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Powerful, scalable solutions designed to transform your business and drive innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
            >
              Get Started
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
