
export default function DoctorCard({ name, specialty, hospital, languages }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-red-700 mb-1">{name}</h3>
      <p className="text-gray-700 text-sm mb-1">{specialty}</p>
      <p className="text-gray-600 text-xs mb-2">{hospital}</p>
      <p className="text-gray-500 text-xs">Languages: {languages}</p>
    </div>
  )
}
