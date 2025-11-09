
export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">Services</h1>

      <nav className="mb-6 flex gap-3 flex-wrap">
        <a href="#outsourced" className="text-sm px-3 py-2 bg-gray-100 rounded">Outsourced Administration</a>
        <a href="#accredit" className="text-sm px-3 py-2 bg-gray-100 rounded">Accreditation</a>
        <a href="#financial" className="text-sm px-3 py-2 bg-gray-100 rounded">Financial Optimization</a>
        <a href="#wellness" className="text-sm px-3 py-2 bg-gray-100 rounded">Corporate Wellness</a>
        <a href="#medical" className="text-sm px-3 py-2 bg-gray-100 rounded">Medical Tourism</a>
      </nav>

      <section id="outsourced" className="mb-8">
        <h2 className="text-xl font-semibold">Outsourced Hospital Administration</h2>
        <p className="text-gray-700 mt-2">Full or partial outsourcing of patient-facing and admin operations — registrations, billing, RCM, vendor management. We provide SOPs, trained staff and monthly SLA reporting.</p>
      </section>

      <section id="accredit" className="mb-8">
        <h2 className="text-xl font-semibold">Accreditation & Quality</h2>
        <p className="text-gray-700 mt-2">NABH/NABL readiness: documentation, mock audits, staff training and corrective action plans.</p>
      </section>

      <section id="financial" className="mb-8">
        <h2 className="text-xl font-semibold">Financial Optimization & RCM</h2>
        <p className="text-gray-700 mt-2">Revenue cycle audits, pricing, procurement strategy and budgeting to drive margin improvement.</p>
      </section>

      <section id="wellness" className="mb-8">
        <h2 className="text-xl font-semibold">Corporate & Individual Wellness</h2>
        <p className="text-gray-700 mt-2">Executive health packages, onsite camps, digital coaching and employer ROI dashboards.</p>
      </section>

      <section id="medical" className="mb-8">
        <h2 className="text-xl font-semibold">Medical Tourism Facilitation</h2>
        <p className="text-gray-700 mt-2">See full Medical Tourism page for details — we match patients to accredited hospitals and specialists, manage logistics and follow up care.</p>
      </section>
    </div>
  )
}
