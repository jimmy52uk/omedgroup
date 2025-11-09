// components/PageImage.js
import Image from 'next/image'
import React from 'react'

export default function PageImage({ src, alt = '', className = '', height = 320 }) {
  return (
    <div className={`w-full rounded overflow-hidden shadow-sm bg-white ${className}`} style={{ height }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}
