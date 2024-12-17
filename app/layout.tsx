import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Powerful Website',
  description: 'Experience the future of web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-900 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">ModernWeb</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-white hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-400">About</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">ModernWeb</h3>
                <p className="text-gray-400">Empowering the future of web development</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              © 2023 ModernWeb. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

