import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from './ProductCard'

export default function Catalog({ onCart }) {
  const [cat, setCat] = useState('Todos')

  const list = cat === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase() === cat.toLowerCase())

  return (
    <section id="catalogo" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#FF0000]" />
              <span className="font-body text-[#FF0000] text-[10px] font-semibold uppercase tracking-[0.3em]">
                Disponible hoy
              </span>
            </div>
            <h2 className="font-display font-semibold text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Nuestro Catálogo
            </h2>
          </div>
          <button
            onClick={onCart}
            className="flex items-center gap-2 border border-[#FF0000] text-[#FF0000] font-body font-medium uppercase text-[10px] tracking-[0.18em] px-5 py-2.5 hover:bg-red-50 transition-colors duration-200 cursor-pointer self-start sm:self-auto"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
            </svg>
            Ver Carrito
          </button>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-body text-[10px] font-semibold uppercase tracking-[0.15em] px-5 py-2 border transition-all duration-200 cursor-pointer ${
                cat === c
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-[#FF0000] hover:text-[#FF0000]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
