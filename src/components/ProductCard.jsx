import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index }) {
  const { dispatch, items } = useCart()
  const [flash, setFlash] = useState(false)
  const inCart = items.some(i => i.id === product.id)

  const add = () => {
    dispatch({ type: 'ADD', item: product })
    setFlash(true)
    setTimeout(() => setFlash(false), 1100)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="bg-white overflow-hidden border border-gray-100 hover:border-[#FF0000]/30 hover:shadow-xl hover:shadow-red-50/60 transition-all duration-400 group flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
          onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1487530811015-780f1bc4ef62?w=400&q=70' }}
        />
        {product.tag && (
          <span className="absolute top-0 left-0 bg-[#FF0000] text-white text-[9px] font-body font-semibold uppercase tracking-[0.15em] px-3 py-1.5">
            {product.tag.replace(/^[^\w\s]+\s*/, '')}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[13px] text-gray-900 leading-tight mb-1.5 group-hover:text-[#FF0000] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-[11px] text-gray-400 leading-relaxed flex-1 mb-4">
          {product.desc}
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="font-display font-semibold text-lg text-[#FF0000] italic">
            ${product.price.toLocaleString('es-MX')}
            <span className="font-body font-normal text-[10px] text-gray-400 ml-1 not-italic">MXN</span>
          </p>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={add}
            className={`flex items-center gap-1.5 text-[10px] font-body font-semibold uppercase tracking-[0.12em] px-3.5 py-2 transition-all duration-200 cursor-pointer shrink-0 ${
              flash
                ? 'bg-green-500 text-white'
                : inCart
                ? 'bg-red-50 text-[#FF0000] border border-[#FF0000]'
                : 'bg-[#FF0000] text-white hover:bg-[#CC0000]'
            }`}
          >
            {flash ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Listo
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {inCart ? 'Agregar' : 'Comprar'}
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
