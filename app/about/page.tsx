import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="mb-12 relative w-full h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&h=800&fit=crop"
            alt="Team collaboration in modern office"
            fill
            className="rounded-lg shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-xl mb-8">
          We are a team of passionate developers and designers dedicated to creating cutting-edge web solutions. Our mission is to empower businesses and individuals with powerful, modern, and user-friendly web applications.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Innovation: We constantly push the boundaries of web technology</li>
          <li>Quality: We deliver high-quality, performant solutions</li>
          <li>User-Centric: We prioritize user experience in everything we do</li>
          <li>Collaboration: We believe in the power of teamwork and open communication</li>
        </ul>
        <p className="text-xl">
          Join us on our journey to revolutionize the web and create amazing digital experiences!
        </p>
      </div>
    </div>
  )
}
