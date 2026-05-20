import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const STEPS = ['Datos', 'Entrega', 'Pago']

export default function Checkout({ open, onClose }) {
  const { items, total, dispatch } = useCart()
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    delivery: 'pickup', address: '',
    card: '', expiry: '', cvv: '',
  })

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const next = () => {
    if (step < 2) setStep(s => s + 1)
    else { setDone(true); dispatch({ type: 'CLEAR' }) }
  }

  const reset = () => {
    setStep(0); setDone(false)
    setForm({ name:'', phone:'', email:'', delivery:'pickup', address:'', card:'', expiry:'', cvv:'' })
    onClose()
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        key="bd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={reset}
      />

      <motion.div
        key="modal"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 28 } }}
        exit={{ y: '100%', opacity: 0, transition: { duration: 0.2 } }}
        onClick={e => e.stopPropagation()}
        className="fixed bottom-0 left-0 right-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50 pointer-events-none"
      >
        <div className="pointer-events-auto w-full sm:max-w-md bg-white shadow-2xl overflow-hidden">

          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 text-center"
            >
              <div className="w-14 h-14 bg-[#FF0000] flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Pedido Confirmado</h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-8">
                Gracias por tu compra. Te contactaremos pronto por Instagram o Facebook para coordinar la entrega.
              </p>
              <button
                onClick={reset}
                className="bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.2em] px-8 py-3.5 hover:bg-[#CC0000] transition-colors cursor-pointer"
              >
                Seguir Comprando
              </button>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-[#FF0000] px-5 pt-5 pb-4 shrink-0">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-display font-semibold text-white text-base uppercase tracking-[0.1em]">Finalizar Pedido</h3>
                  <button onClick={reset} className="text-white/60 hover:text-white cursor-pointer p-1 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Steps */}
                <div className="flex items-center gap-1">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center flex-1 last:flex-none">
                      <div className={`w-7 h-7 flex items-center justify-center text-xs font-body font-semibold shrink-0 ${i <= step ? 'bg-white text-[#FF0000]' : 'bg-white/20 text-white/60'}`}>
                        {i < step ? '✓' : i + 1}
                      </div>
                      <span className={`hidden sm:block text-[10px] font-body font-medium ml-1.5 uppercase tracking-[0.1em] ${i <= step ? 'text-white' : 'text-white/40'}`}>{s}</span>
                      {i < 2 && <div className={`flex-1 h-px mx-2 ${i < step ? 'bg-white' : 'bg-white/25'}`} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-5 max-h-[50vh] sm:max-h-[360px] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-3">
                      <F label="Nombre completo"   name="name"  value={form.name}  onChange={set} placeholder="Tu nombre" />
                      <F label="Instagram / WhatsApp" name="phone" type="tel"   value={form.phone}  onChange={set} placeholder="+52 656 000 0000" />
                      <F label="Correo (opcional)" name="email" type="email" value={form.email}  onChange={set} placeholder="correo@ejemplo.com" />
                    </motion.div>
                  )}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-3">
                      <p className="font-body text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em]">Tipo de entrega</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[['pickup','Recoger en tienda'],['delivery','A domicilio']].map(([v, lbl]) => (
                          <label key={v} className={`flex items-center gap-2 p-3 border cursor-pointer transition-all text-[11px] font-body font-medium ${form.delivery === v ? 'border-[#FF0000] bg-red-50 text-[#FF0000]' : 'border-gray-200 text-gray-500'}`}>
                            <input type="radio" name="delivery" value={v} checked={form.delivery === v} onChange={set} className="accent-[#FF0000]" />
                            {lbl}
                          </label>
                        ))}
                      </div>
                      {form.delivery === 'delivery' && (
                        <F label="Dirección" name="address" value={form.address} onChange={set} placeholder="Calle, número, colonia" />
                      )}
                      <div className="bg-gray-50 border border-gray-100 p-3 space-y-1.5">
                        {items.map(i => (
                          <div key={i.id} className="flex justify-between text-xs font-body">
                            <span className="text-gray-400 truncate mr-2">{i.name} ×{i.qty}</span>
                            <span className="font-semibold text-gray-700">${(i.price * i.qty).toLocaleString('es-MX')}</span>
                          </div>
                        ))}
                        <div className="border-t border-gray-200 pt-1.5 flex justify-between font-body font-semibold text-sm">
                          <span className="text-gray-700">Total</span>
                          <span className="text-[#FF0000]">${total.toLocaleString('es-MX')} MXN</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-3">
                      <div className="border border-gray-200 bg-gray-50 p-3 text-center">
                        <p className="font-body text-[11px] text-gray-500">Pago simulado — no se procesan datos reales</p>
                      </div>
                      <F label="Número de tarjeta" name="card"   value={form.card}   onChange={set} placeholder="4242 4242 4242 4242" maxLength={19} />
                      <div className="grid grid-cols-2 gap-3">
                        <F label="Vencimiento" name="expiry" value={form.expiry} onChange={set} placeholder="MM/AA" maxLength={5} />
                        <F label="CVV"         name="cvv"    value={form.cvv}    onChange={set} placeholder="123"   maxLength={4} />
                      </div>
                      <p className="text-center font-body text-sm text-gray-400">
                        Total: <strong className="text-[#FF0000] font-display font-semibold italic">${total.toLocaleString('es-MX')} MXN</strong>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Buttons */}
              <div className="px-5 pb-6 pt-2 flex gap-3 shrink-0">
                {step > 0 && (
                  <button
                    onClick={() => setStep(s => s - 1)}
                    className="flex-1 border border-[#FF0000] text-[#FF0000] font-body font-medium uppercase text-[10px] tracking-[0.15em] py-3.5 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    Atrás
                  </button>
                )}
                <button
                  onClick={next}
                  className="flex-1 bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.15em] py-3.5 hover:bg-[#CC0000] transition-colors cursor-pointer"
                >
                  {step < 2 ? 'Continuar' : 'Confirmar Pedido'}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function F({ label, name, type = 'text', value, onChange, placeholder, maxLength }) {
  return (
    <div>
      <label className="block font-body text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1.5">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} maxLength={maxLength}
        className="w-full border border-gray-200 px-3 py-2.5 text-sm font-body text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#FF0000] transition-colors bg-white"
      />
    </div>
  )
}
