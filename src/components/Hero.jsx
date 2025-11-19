import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] grid place-items-center bg-black overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: yBg1 }}>
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* dark gradient overlay to ensure contrast, pointer events none to allow 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ y: yTitle }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-white/70">
            TRUSTED CONSTRUCTION • ROOFING EXPERTS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Built to last. Designed to impress.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            We craft durable roofs and modern structures for residential and commercial projects. Precision, safety, and style—delivered.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-white font-semibold shadow-lg shadow-red-600/30 hover:bg-red-500 transition">
              Get a Free Estimate
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* parallel red glow accents */}
      <motion.div style={{ y: yBg2 }} className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
      <motion.div style={{ y: yBg1 }} className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
    </section>
  )
}
