// components/PageHero.js
import Image from 'next/image'
import React from 'react'

export default function PageHero({ title, subtitle, image = '/og-image.jpg', height = 420 }) {
  return (
    <header className="w-full bg-gray-50">
      <div className="relative w-full" style={{ height }}>
        <Image
          src={image}
          alt={title || 'Hero image'}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm md:text-base max-w-2xl drop-shadow-sm">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
