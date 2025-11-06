
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  const services = [
    { title: 'Outsourced Hospital Administration', desc: 'Full or partial outsourcing of administrative operations: registration, billing, RCM and vendor management.' },
    { title: 'Corporate & Individual Wellness', desc: 'Custom wellness programs, executive health checks and employer ROI reporting.' },
    { title: 'Medical Tourism Facilitation', desc: 'End-to-end facilitation for international and domestic inbound patients.' }
  ]
  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 to-blue-500 text-white text-center py-24 px-6">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold mb-4">
          Empowering Hospitals to Perform Better
        </motion.h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-6">
          OMED Group partners with healthcare institutions to solve operational, financial, and strategic challenges — driving performance, compliance, and sustainable growth.
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={i} title={s.title}>{s.desc}</ServiceCard>
          ))}
        </div>
      </section>
    </div>
  )
}
