
export default function ClientCard({ logo, name, sector }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
      <img src={logo} alt={name} className="mx-auto mb-4 w-24 h-24 object-contain" />
      <h3 className="text-lg font-semibold text-red-700">{name}</h3>
      <p className="text-sm text-gray-600">{sector}</p>
    </div>
  )
}
