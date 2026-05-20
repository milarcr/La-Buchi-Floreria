import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const LINKS = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Catálogo',    href: '#catalogo' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Personaliza', href: '#personaliza' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar({ onCart }) {
  const { count } = useCart()
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/96 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#FF0000]/30 bg-gray-50 shrink-0 flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="La Buchi Florería"
              className="w-full h-full object-cover"
              onError={e => {
                e.currentTarget.replaceWith(
                  Object.assign(document.createElement('span'), {
                    textContent: 'LB',
                    style: 'font-family:serif;font-weight:700;color:#FF0000;font-size:12px;letter-spacing:-0.03em',
                  })
                )
              }}
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-sm tracking-tight text-gray-900">La Buchi</p>
            <p className="font-body text-[9px] tracking-[0.28em] uppercase font-medium text-[#FF0000]">Florería</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[11px] font-medium tracking-[0.1em] text-gray-500 uppercase transition-colors duration-200 hover:text-[#FF0000]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Cart + hamburger */}
        <div className="flex items-center gap-1">
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={onCart}
            aria-label="Carrito"
            className="relative p-2 rounded-lg cursor-pointer transition-colors hover:bg-red-50"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 bg-[#FF0000] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {count > 9 ? '9+' : count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Menú"
            className="md:hidden p-2 rounded-lg cursor-pointer transition-colors hover:bg-red-50"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-6 py-4 font-body font-medium text-[11px] text-gray-500 uppercase tracking-[0.15em] border-b border-gray-50 hover:text-[#FF0000] hover:bg-red-50/40 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
