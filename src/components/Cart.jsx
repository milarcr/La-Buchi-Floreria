import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function Cart({ open, onClose, onCheckout }) {
  const { items, total, dispatch } = useCart()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
            exit={{ x: '100%', transition: { duration: 0.2 } }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#FF0000] text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
                </svg>
                <h2 className="font-display font-semibold text-base uppercase tracking-[0.1em]">Mi Carrito</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-20 text-center"
                  >
                    <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                    <p className="font-display font-semibold text-base text-gray-800">Carrito vacío</p>
                    <p className="font-body text-xs text-gray-400 mt-1 mb-6">Agrega flores de nuestro catálogo</p>
                    <button
                      onClick={onClose}
                      className="bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.18em] px-6 py-2.5 hover:bg-[#CC0000] transition-colors cursor-pointer"
                    >
                      Ver Catálogo
                    </button>
                  </motion.div>
                ) : (
                  items.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16, height: 0, marginBottom: 0, padding: 0 }}
                      className="flex gap-3 bg-gray-50/80 border border-gray-100 p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover shrink-0"
                        onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1487530811015-780f1bc4ef62?w=80&q=60' }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-medium text-xs text-gray-900 uppercase tracking-wide leading-tight truncate">
                          {item.name}
                        </p>
                        <p className="font-display font-semibold text-sm text-[#FF0000] italic mt-0.5">
                          ${(item.price * item.qty).toLocaleString('es-MX')} MXN
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => dispatch({ type: 'DEC', id: item.id })}
                            className="w-6 h-6 border border-gray-200 text-gray-500 text-sm flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors cursor-pointer font-medium">
                            −
                          </button>
                          <span className="font-body font-semibold text-sm text-gray-900 w-4 text-center">{item.qty}</span>
                          <button onClick={() => dispatch({ type: 'ADD', item })}
                            className="w-6 h-6 border border-gray-200 text-gray-500 text-sm flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors cursor-pointer font-medium">
                            +
                          </button>
                          <button onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                            className="ml-auto text-gray-300 hover:text-[#FF0000] transition-colors cursor-pointer p-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-4 py-4 border-t border-gray-100 bg-white shrink-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-xs text-gray-400 uppercase tracking-[0.1em]">Total a pagar</span>
                  <span className="font-display font-semibold text-2xl text-[#FF0000] italic">
                    ${total.toLocaleString('es-MX')}
                    <span className="font-body font-normal text-[10px] text-gray-400 ml-1 not-italic">MXN</span>
                  </span>
                </div>
                <button
                  onClick={() => { onClose(); onCheckout() }}
                  className="w-full bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.2em] py-3.5 hover:bg-[#CC0000] transition-colors cursor-pointer shadow-lg shadow-red-200"
                >
                  Proceder al Pago
                </button>
                <button
                  onClick={() => dispatch({ type: 'CLEAR' })}
                  className="w-full mt-2 font-body text-[10px] text-gray-300 hover:text-[#FF0000] transition-colors cursor-pointer py-1.5 uppercase tracking-[0.1em]"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
