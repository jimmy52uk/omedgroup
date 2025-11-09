
export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-4">About OMED Group</h1>

      <p className="text-gray-700 mb-4">OMED Group is a Gurgaon-based healthcare consultancy helping hospitals and healthcare organisations improve operational performance, accreditation readiness and patient experience. We combine clinical know-how, engineering and process design to deliver measurable outcomes.</p>

      <h2 className="text-xl font-semibold mt-6">Mission</h2>
      <p className="text-gray-700 mt-2">To enable hospitals to operate efficiently, deliver high-quality care and remain financially sustainable.</p>

      <h2 className="text-xl font-semibold mt-6">Vision</h2>
      <p className="text-gray-700 mt-2">To be India’s trusted partner for healthcare transformation — where every hospital has access to world-class operations and quality systems.</p>

      <h2 className="text-xl font-semibold mt-6">Approach</h2>
      <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
        <li>Diagnose: rapid assessment & KPI baseline</li>
        <li>Design: prioritised roadmaps & SOPs</li>
        <li>Deliver: implementation support & capability building</li>
        <li>Measure: dashboards & continuous improvement</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6">Values</h2>
      <div className="flex gap-4 flex-wrap mt-3">
        <span className="bg-gray-100 px-4 py-2 rounded">Integrity</span>
        <span className="bg-gray-100 px-4 py-2 rounded">Excellence</span>
        <span className="bg-gray-100 px-4 py-2 rounded">Partnership</span>
        <span className="bg-gray-100 px-4 py-2 rounded">Innovation</span>
      </div>
    </div>
  )
}
