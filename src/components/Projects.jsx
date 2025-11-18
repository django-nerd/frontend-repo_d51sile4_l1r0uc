import { motion } from 'framer-motion'

const projects = [
  { title: 'Modern Metal Roof', img: 'https://images.unsplash.com/photo-1604014237800-1c9102c3bb33?q=80&w=1640&auto=format&fit=crop', tag: 'Commercial' },
  { title: 'Residential Shingle', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1640&auto=format&fit=crop', tag: 'Residential' },
  { title: 'Flat TPO System', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1640&auto=format&fit=crop', tag: 'Industrial' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h2>
          <p className="mt-2 text-white/70">A glimpse at our craftsmanship.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">{p.tag}</span>
                  <h3 className="mt-2 text-white font-semibold">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
