// pages/faq.js
import { useState } from 'react'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

const FAQ_DATA = [
  { q: 'How long does medical tourism take?', a: 'Typical timelines vary from 2–6 weeks depending on treatment and clearance.' },
  { q: 'Do you handle visas and travel?', a: 'Yes — we assist with required paperwork, hospital invitation letters and logistics.' },
  { q: 'Can OMED help with accreditation?', a: 'We provide full accreditation readiness for NABH and other standards.' },
  { q: 'Do you have international patient coordinators?', a: 'Yes — our team supports international patients across the entire journey.' },
]

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded shadow p-4">
      <button className="w-full flex items-start justify-between" onClick={() => setOpen(v => !v)}>
        <div className="text-left">
          <div className="font-semibold">{item.q}</div>
          {open && <div className="text-sm text-gray-700 mt-2">{item.a}</div>}
        </div>
        <div className="ml-4 text-red-700">{open ? '−' : '+'}</div>
      </button>
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common queries about OMED services, medical tourism and partnerships."
        image="/omed_tailored_images/heroes/hero_alt_1.png"
        height={360}
      />

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-3">
        <section className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
          <p className="text-gray-700 mb-4">If you don’t find an answer here, please use the Enquiry page or WhatsApp us.</p>

          <div className="space-y-3">
            {FAQ_DATA.map((it, idx) => <AccordionItem key={idx} item={it} />)}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="relative w-full h-48">
              <Image src="/omed_tailored_images/gallery/gallery_8.jpg" alt="FAQ visual" fill style={{objectFit:'cover'}} />
            </div>
            <div className="p-4">
              <h4 className="font-semibold">Need help now?</h4>
              <p className="text-gray-700">Call/WhatsApp: <strong>+91 9821229935</strong></p>
              <a href="/enquiry" className="inline-block mt-3 bg-red-700 text-white px-4 py-2 rounded">Make an Enquiry</a>
            </div>
          </div>

          <div className="bg-white p-3 rounded shadow">
            <h5 className="font-semibold">Resources</h5>
            <ul className="text-sm text-gray-700 mt-2 list-disc ml-4">
              <li><a href="/medical-tourism">Medical Tourism Guide</a></li>
              <li><a href="/services">Services Overview</a></li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  )
}
