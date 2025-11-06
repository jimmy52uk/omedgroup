
export default function Services() {
  const services = [
    'Outsourced Hospital Administration',
    'Quality & Accreditation (NABH/NABL)',
    'Financial Optimization & RCM',
    'Human Resource Strategy',
    'Digital Transformation',
    'Corporate & Individual Wellness',
    'Medical Tourism Facilitation'
  ]
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-red-700 font-semibold mb-2">{s}</h3>
            <p className="text-gray-600 text-sm">Comprehensive consultancy and managed solutions tailored to healthcare institutions.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
