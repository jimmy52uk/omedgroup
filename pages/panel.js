
const doctors = [
  { name: 'Dr. Anil Mehta', specialty: 'Cardiology', hospital: 'Global Heart Hospital, Delhi', languages: 'English, Hindi' },
  { name: 'Dr. Neha Kapoor', specialty: 'Orthopedics', hospital: 'Sunrise Hospital, Gurgaon', languages: 'English, Hindi' },
  { name: 'Dr. Rajesh Iyer', specialty: 'Oncology', hospital: 'MediCare Institute, Mumbai', languages: 'English, Tamil' }
]

export default function Panel() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Panel Hospitals & Doctors</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((d,i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h3 className="text-red-700 font-semibold">{d.name}</h3>
            <p className="text-gray-700 text-sm">{d.specialty} — {d.hospital}</p>
            <p className="text-gray-500 text-xs">Languages: {d.languages}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
