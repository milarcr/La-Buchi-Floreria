import { motion } from 'framer-motion'

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@la_buchi_floreria',
    desc: 'DM para pedidos y cotizaciones',
    url: 'https://www.instagram.com/la_buchi_floreria/',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'La Buchi Florería',
    desc: 'Novedades y promociones',
    url: 'https://www.facebook.com/profile.php?id=61556828050301',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#FF0000]" />
            <span className="font-body text-[#FF0000] text-[10px] font-semibold uppercase tracking-[0.3em]">Encuéntranos</span>
          </div>
          <h2
            className="font-display font-semibold text-gray-900 leading-tight mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Contáctanos
          </h2>
          <p className="font-body text-gray-400 text-sm tracking-wide">
            Escríbenos directamente en nuestras redes. Respondemos rápido.
          </p>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mb-14">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 border border-gray-100 p-5 hover:border-[#FF0000]/30 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-[#FF0000] text-white flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-base text-gray-900 group-hover:text-[#FF0000] transition-colors">{s.name}</p>
                <p className="font-body text-sm text-gray-500 font-medium">{s.handle}</p>
                <p className="font-body text-xs text-gray-400 mt-0.5">{s.desc}</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#FF0000] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-2 border-[#FF0000] pl-8 py-2 max-w-2xl"
        >
          <h3 className="font-display font-semibold text-gray-900 mb-2"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}>
            ¿Pedido especial o evento?
          </h3>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
            Para bodas, quinceañeras, eventos corporativos y grandes pedidos, escríbenos
            directamente. Hacemos cotizaciones personalizadas sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.instagram.com/la_buchi_floreria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.2em] px-6 py-3 hover:bg-[#CC0000] transition-colors duration-300 cursor-pointer"
            >
              DM en Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556828050301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#FF0000] text-[#FF0000] font-body font-medium uppercase text-[10px] tracking-[0.2em] px-6 py-3 hover:bg-red-50 transition-colors duration-300 cursor-pointer"
            >
              Mensaje en Facebook
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
