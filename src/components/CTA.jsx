import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(239,68,68,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to elevate your property?</h2>
          <p className="mt-2 text-white/70">Get a fast, free estimate from our specialists. We respond within 24 hours.</p>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600/60" placeholder="Full name" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600/60" placeholder="Email" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600/60 md:col-span-2" placeholder="Phone" />
            <textarea rows="4" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600/60 md:col-span-2" placeholder="Tell us about your project" />
            <div className="md:col-span-2">
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-white font-semibold shadow-lg shadow-red-600/30 hover:bg-red-500 transition">
                Get Free Estimate
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
