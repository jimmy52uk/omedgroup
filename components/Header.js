
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.jpg" alt="OMED Group" width={56} height={56} />
        <span className="text-xl md:text-2xl font-bold text-red-700">OMED Group</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/medical-tourism">Medical Tourism</Link>
        <Link href="/panel">Panel Hospitals</Link>
        <Link href="/clients">Corporate Clients</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
