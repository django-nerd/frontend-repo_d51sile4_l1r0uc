import { useState } from 'react'
import { Menu, Phone, Hammer } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-red-500">
                <Hammer className="h-5 w-5 text-white" />
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-10" />
              </span>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">Redline Roofing</p>
                <p className="text-xs text-white/60">Construction • Roofing</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-1 text-sm text-white/70 transition-colors hover:text-white"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  {hovered === idx && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full rounded bg-red-500"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                <Phone className="h-4 w-4" />
                Free Quote
              </motion.a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-6 pb-4 grid gap-2">
                  {navItems.map((item) => (
                    <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-2 text-white/80 hover:bg-white/5">
                      {item.label}
                    </a>
                  ))}
                  <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500">
                    <Phone className="h-4 w-4" />
                    Free Quote
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
