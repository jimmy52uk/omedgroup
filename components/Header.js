
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="OMED Group" width={56} height={56} />
          <span className="text-xl md:text-2xl font-bold text-red-700">OMED Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/medical-tourism">Medical Tourism</Link>
          <Link href="/panel">Panel</Link>
          <Link href="/contact">Contact</Link>
          <a href="tel:+919821229935" className="ml-4 px-4 py-2 bg-red-700 text-white rounded-full text-sm">+91-9821229935</a>
        </nav>

        <div className="md:hidden">
          <a href="tel:+919821229935" className="px-3 py-2 bg-red-700 text-white rounded-md text-sm">Call</a>
        </div>
      </div>
    </header>
)
}
