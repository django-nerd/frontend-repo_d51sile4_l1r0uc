import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const works = [
  {
    title: 'Luxury Residence – Standing Seam Metal',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop',
    stat: '5,200 sq ft'
  },
  {
    title: 'Distribution Center – TPO Flat System',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1920&auto=format&fit=crop',
    stat: '120,000 sq ft'
  },
  {
    title: 'Retail Plaza – Architectural Shingle',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
    stat: '24 units'
  },
  {
    title: 'Modern Cabin – Metal + Cedar Accents',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1920&auto=format&fit=crop',
    stat: 'Off-grid'
  }
]

export default function OurWork() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax transforms (different speeds)
  const slow = useTransform(scrollYProgress, [0, 1], [0, -80])
  const medium = useTransform(scrollYProgress, [0, 1], [0, -140])
  const fast = useTransform(scrollYProgress, [0, 1], [0, -220])

  return (
    <section id="work" ref={ref} className="relative bg-black py-28 overflow-hidden">
      {/* background accents with subtle parallax */}
      <motion.div style={{ y: slow }} className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
      <motion.div style={{ y: medium }} className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Our Work</h2>
          <p className="mt-4 text-white/70">From precision residential installs to large-scale commercial systems, here are highlights from recent builds.</p>
        </div>

        {/* Parallax gallery */}
        <div className="grid gap-6 md:grid-cols-2">
          {works.map((w, i) => {
            const speed = i % 3 === 0 ? fast : i % 3 === 1 ? medium : slow
            return (
              <motion.figure
                key={w.title}
                style={{ y: speed }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 p-5">
                    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white/90">{w.stat}</span>
                    <h3 className="mt-2 text-white font-semibold tracking-tight">{w.title}</h3>
                  </figcaption>
                </div>
              </motion.figure>
            )
          })}
        </div>

        {/* Subtle marquee of capabilities */}
        <div className="mt-14 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap text-white/40"
          >
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>TPO Systems</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>EPDM</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Standing Seam Metal</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Architectural Shingle</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Coatings</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Inspections</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Gutters</p>
            {/* duplicate for seamless loop */}
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>TPO Systems</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>EPDM</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Standing Seam Metal</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Architectural Shingle</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Coatings</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Inspections</p>
            <p className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"/>Gutters</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
