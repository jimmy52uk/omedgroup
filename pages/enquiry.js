// pages/enquiry.js
import { useState } from 'react'
import PageHero from '@/components/PageHero'
import PageImage from '@/components/PageImage'
import Image from 'next/image'

export default function Enquiry() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const fd = new FormData(e.target)
    const payload = Object.fromEntries(fd.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Network response not ok')
      setStatus({ ok: true, msg: 'Thanks — we received your enquiry. We will contact you shortly.' })
      e.target.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again or email support@omedgroup.in' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        title="Send an Enquiry"
        subtitle="Tell us about your requirement and our team will respond within one business day."
        image="/omed_tailored_images/heroes/hero_alt_2.png"
        height={380}
      />

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-2 items-start">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Enquiry</h2>
          <p className="text-gray-700 mb-6">Prefer WhatsApp? Click the green chat button on the site to connect instantly.</p>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" required placeholder="Full name" className="border p-3 rounded w-full" />
              <input name="phone" required placeholder="Phone (WhatsApp preferred)" className="border p-3 rounded w-full" />
              <input name="email" type="email" required placeholder="Email" className="border p-3 rounded w-full" />
              <select name="service" required className="border p-3 rounded w-full">
                <option value="">Choose service</option>
                <option>Outsourced Hospital Administration</option>
                <option>Corporate & Wellness Programs</option>
                <option>Medical Tourism</option>
                <option>Accreditation & Compliance</option>
              </select>
            </div>

            <textarea name="message" rows="5" placeholder="Briefly describe your enquiry" className="border p-3 rounded w-full" />

            <div className="flex items-center gap-3">
              <button type="submit" disabled={loading} className="bg-red-700 text-white px-4 py-2 rounded">
                {loading ? 'Sending…' : 'Submit Enquiry'}
              </button>
              <a className="text-sm text-gray-600" href="mailto:support@omedgroup.in">Or email: support@omedgroup.in</a>
            </div>

            {status && (
              <div className={`${status.ok ? 'text-green-600' : 'text-red-600'} mt-2`}>{status.msg}</div>
            )}
          </form>
        </section>

        <aside>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative w-full h-64">
              <Image src="/omed_tailored_images/gallery/gallery_7.jpg" alt="Enquiry visual" fill style={{objectFit:'cover'}} />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Talk to our international team</h3>
              <p className="text-gray-700 mb-2">Call / WhatsApp: <strong>+91 9821229935</strong></p>
              <p className="text-sm text-gray-600">Overseas patients: use the same number or mention your country in the message.</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">What we need</h4>
              <ul className="text-sm text-gray-700 ml-4 list-disc mt-2">
                <li>Brief medical history</li>
                <li>Preferred dates & budget</li>
                <li>Any special requests (interpreters, accommodation)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Why OMED</h4>
              <p className="text-sm text-gray-700">We coordinate admissions, travel logistics and post-care follow up with patient-centric care pathways.</p>
            </div>
          </div>
        </aside>
      </main>
    </>
  )
}
