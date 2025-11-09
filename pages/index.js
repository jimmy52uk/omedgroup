
import Link from 'next/link'
import { motion } from 'framer-motion'
import PanelCarousel from '@/components/PanelCarousel'

const dummyPanel = [
  { logo: '/public-placeholder.png', name: 'Global Heart Hospital', subtitle: 'Cardiology, NABH' },
  { logo: '/public-placeholder.png', name: 'Sunrise Labs', subtitle: 'NABL Diagnostics' },
  { logo: '/public-placeholder.png', name: 'MediCare Oncology', subtitle: 'Oncology' },
  { logo: '/public-placeholder.png', name: 'City General Hospital', subtitle: 'Multi-specialty' },
  { logo: '/public-placeholder.png', name: 'ACME Corporate', subtitle: 'Corporate Partner' },
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold leading-tight">
              Empowering Hospitals to Perform Better — Operations, Compliance & Patient Journeys
            </motion.h1>
            <p className="mt-4 text-base md:text-lg max-w-xl">OMED Group delivers measurable improvements in hospital efficiency, quality and revenue through operations outsourcing, accreditation readiness and end-to-end patient facilitation.</p>

            <div className="mt-6 flex gap-3">
              <Link href="/services" className="bg-white text-red-700 px-5 py-3 rounded-md font-semibold">Explore Services</Link>
              <a href="/contact" className="border border-white text-white px-5 py-3 rounded-md">Contact Us</a>
            </div>

            <div className="mt-6 text-sm text-white/80">
              <strong>International patient line:</strong> <span className="ml-2">+91-9821229945</span>
            </div>
          </div>

          <div>
            <div className="bg-white/10 rounded-xl p-8 min-h-[260px] flex items-center justify-center">
              <img src="/og-image.jpg" alt="healthcare" className="max-h-48 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Key Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services#outsourced" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-red-700 font-semibold">Outsourced Hospital Administration</h3>
              <p className="text-gray-600 text-sm mt-2">Front office, billing, RCM and vendor management under SLA-based managed services.</p>
            </Link>
            <Link href="/services#welfare" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-red-700 font-semibold">Corporate & Individual Wellness</h3>
              <p className="text-gray-600 text-sm mt-2">Custom executive health programs & wellness management for corporates.</p>
            </Link>
            <Link href="/medical-tourism" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-red-700 font-semibold">Medical Tourism & Patient Facilitation</h3>
              <p className="text-gray-600 text-sm mt-2">End-to-end care coordination for international and inbound groups.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="services-preview" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4">Services Overview</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div id="outsourced" className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-red-700 font-semibold">Outsourced Hospital Administration</h4>
              <p className="text-gray-600 mt-2">SLA-driven staffing, registrations, billing and claims.</p>
            </div>
            <div id="welfare" className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-red-700 font-semibold">Corporate & Individual Wellness</h4>
              <p className="text-gray-600 mt-2">Executive health, chronic disease programmes and employer ROI.</p>
            </div>
            <div id="accredit" className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-red-700 font-semibold">Accreditation & Quality</h4>
              <p className="text-gray-600 mt-2">NABH / NABL readiness, documentation and mock audits.</p>
            </div>
            <div id="digital" className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-red-700 font-semibold">Digital Transformation</h4>
              <p className="text-gray-600 mt-2">HIS selection, telemedicine rollout, patient journey analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-center text-xl font-semibold mb-4">Our Panel — Hospitals, Labs, Specialists & Corporate Partners</h4>
          <PanelCarousel items={dummyPanel} />
        </div>
      </section>

    </div>
  )
}
