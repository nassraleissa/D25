'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ClientOnly } from './ClientComponent'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'This platform has revolutionized our workflow. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateCo',
    content: 'The features and performance are unmatched. A game-changer for our team.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer, StartupX',
    content: 'The developer experience is top-notch. It\'s a joy to work with this platform.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <ClientOnly>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </ClientOnly>
    </section>
  )
}
