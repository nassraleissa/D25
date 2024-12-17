'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, Database, Shield } from 'lucide-react'
import { ClientOnly } from './ClientComponent'

const features = [
  {
    icon: Code,
    title: 'Developer-First',
    description: 'Streamlined workflows and powerful integrations for modern development teams.',
    iconUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=400&fit=crop'
  },
  {
    icon: Database,
    title: 'Scalable Architecture',
    description: 'Robust infrastructure designed to handle complex, high-performance applications.',
    iconUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400&h=400&fit=crop'
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Enterprise-grade security with multi-layered protection and compliance.',
    iconUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&h=400&fit=crop'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
      <ClientOnly>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image 
                    src={feature.iconUrl} 
                    alt={feature.title} 
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </ClientOnly>
    </section>
  )
}
