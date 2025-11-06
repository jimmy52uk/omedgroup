
import DoctorCard from '../components/DoctorCard'

export default function Panel() {
  const doctors = [
    { name: 'Dr. Anil Mehta', specialty: 'Cardiology', hospital: 'Global Heart Hospital, Delhi', languages: 'English, Hindi' },
    { name: 'Dr. Neha Kapoor', specialty: 'Orthopedics', hospital: 'Sunrise Hospital, Gurgaon', languages: 'English, Hindi' },
    { name: 'Dr. Rajesh Iyer', specialty: 'Oncology', hospital: 'MediCare Institute, Mumbai', languages: 'English, Tamil' }
  ]
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Panel Hospitals & Doctors</h1>
      <p className="text-center text-gray-700 mb-8">Our panel includes accredited hospitals and experienced specialists for both domestic and international patients.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((d,i) => <DoctorCard key={i} {...d} />)}
      </div>
    </section>
  )
}
