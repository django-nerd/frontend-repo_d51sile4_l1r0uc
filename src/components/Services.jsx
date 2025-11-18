import { motion } from 'framer-motion'
import { ShieldCheck, Wrench, Home, Building2 } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    desc: 'Shingle, metal, and tile roofing with premium warranties and meticulous installation.'
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    desc: 'Flat and low-slope systems, TPO, EPDM, coatings, and maintenance programs.'
  },
  {
    icon: Wrench,
    title: 'Repairs & Emergencies',
    desc: 'Fast-response leak repair, storm damage mitigation, and inspection reports.'
  },
  {
    icon: ShieldCheck,
    title: 'Inspections & Insurance',
    desc: 'Certified inspections, documentation, and assistance with insurance claims.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(239,68,68,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
            <p className="mt-2 text-white/70">High-quality craftsmanship with a focus on safety and longevity.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-red-600 px-5 py-2 text-white shadow-red-600/30 shadow hover:bg-red-500">Request Quote</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-white/80 hover:border-red-500/40 hover:from-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20 text-red-400">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
