
import ClientCard from '../components/ClientCard'

export default function Clients() {
  const clients = [
    { logo: '/public-placeholder.png', name: 'ACME Healthcare Pvt Ltd', sector: 'Corporate Wellness Partner' },
    { logo: '/public-placeholder.png', name: 'Bright Labs Diagnostics', sector: 'Operational Excellence Consulting' },
    { logo: '/public-placeholder.png', name: 'Unitech Group Hospitals', sector: 'Accreditation & Compliance Advisory' }
  ]
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Corporate Clients</h1>
      <p className="text-center text-gray-700 mb-8">Logos shown with permission. We partner with healthcare institutions and corporates to deliver measurable impact.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {clients.map((c,i) => <ClientCard key={i} {...c} />)}
      </div>
    </section>
  )
}
