import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  )
}

