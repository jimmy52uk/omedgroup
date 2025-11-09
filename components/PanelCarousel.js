
import { useEffect, useRef } from 'react'

export default function PanelCarousel({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let pos = 0
    let raf = null
    function loop() {
      pos += 0.6
      if (pos > el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    const pause = () => cancelAnimationFrame(raf)
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', () => (raf = requestAnimationFrame(loop)))
    return () => cancelAnimationFrame(raf)
  }, [])

  const list = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex gap-6 whitespace-nowrap py-6">
        {list.map((it, i) => (
          <div key={i} className="min-w-[220px] bg-white shadow rounded-lg p-4 inline-flex items-start gap-3">
            <img src={it.logo} alt={it.name} className="w-16 h-16 object-contain rounded" />
            <div>
              <div className="text-sm font-semibold text-red-700">{it.name}</div>
              <div className="text-xs text-gray-600">{it.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
