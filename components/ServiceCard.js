
export default function ServiceCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6">
      <h3 className="text-red-700 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  )
}
