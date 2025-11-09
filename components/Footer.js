
import { Mail, Phone, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">© 2025 OMED Group | Gurgaon, India</p>
        <p className="text-sm mt-2">General: +91-9821229935 | Intl: +91-9821229945</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="mailto:support@omedgroup.in" aria-label="email"><Mail size={18} /></a>
          <a href="tel:+919821229935" aria-label="phone"><Phone size={18} /></a>
          <a href="https://omedgroup.in" aria-label="website"><Globe size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
