
export default function Clients() {
  const clients = [
    { logo: '/public-placeholder.png', name: 'ACME Healthcare Pvt Ltd', sector: 'Corporate Wellness Partner' },
    { logo: '/public-placeholder.png', name: 'Bright Labs Diagnostics', sector: 'Operational Excellence Consulting' },
    { logo: '/public-placeholder.png', name: 'Unitech Group Hospitals', sector: 'Accreditation & Compliance Advisory' }
  ]
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Corporate Clients</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {clients.map((c,i) => (
          <div key={i} className="bg-white p-6 rounded shadow text-center">
            <img src={c.logo} className="mx-auto w-24 h-24 object-contain mb-4" />
            <h3 className="text-red-700 font-semibold">{c.name}</h3>
            <p className="text-gray-600 text-sm">{c.sector}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
