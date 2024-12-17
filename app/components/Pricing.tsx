'use client'

import { Check } from 'lucide-react'
import { ClientMotionDiv } from './ClientMotion'
import { ClientOnly } from './ClientComponent'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    features: ['1 user', '10 projects', 'Basic support', '1GB storage'],
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['5 users', 'Unlimited projects', 'Priority support', '10GB storage'],
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: ['Unlimited users', 'Unlimited projects', '24/7 support', '100GB storage'],
  },
]

export default function Pricing() {
  return (
    <ClientOnly>
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ClientMotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal">/mo</span></p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Choose Plan
              </button>
            </ClientMotionDiv>
          ))}
        </div>
      </section>
    </ClientOnly>
  )
}
