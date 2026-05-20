import { motion } from 'framer-motion'

const FEATURES = [
  'Flores de tu elección y preferencia',
  'Colores personalizados para tu ocasión',
  'Empaque artesanal incluido sin costo',
  'Lista en 24 horas o menos',
]

const IGIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FBIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function CustomBouquet() {
  return (
    <section id="personaliza" className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Red accent */}
            <div className="absolute -left-5 top-12 bottom-12 w-px bg-[#FF0000]" />

            <div className="aspect-[3/4] overflow-hidden shadow-2xl shadow-red-100/60">
              <img
                src="/productos/image_3.jpg"
                alt="Arreglo floral personalizado La Buchi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 right-5 bg-white border border-gray-100 shadow-xl px-6 py-4 text-center"
            >
              <p className="font-display font-semibold text-[#FF0000] text-3xl italic leading-none">100%</p>
              <p className="font-body text-[9px] text-gray-400 font-semibold uppercase tracking-[0.2em] mt-1.5">Personalizado</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#FF0000]" />
              <span className="font-body text-[#FF0000] text-[10px] font-semibold uppercase tracking-[0.3em]">
                Diseño exclusivo
              </span>
            </div>

            <h2
              className="font-display font-semibold text-gray-900 leading-[0.92] mb-7"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Diseña tu<br />
              <span className="italic text-[#FF0000]">ramo perfecto.</span>
            </h2>

            <p className="font-body text-gray-400 text-sm sm:text-[15px] leading-[1.9] mb-9 max-w-lg">
              Dinos las flores, los colores y el tamaño que necesitas.
              Creamos arreglos 100% personalizados para bodas, XV años,
              cumpleaños y cualquier ocasión especial.
            </p>

            <ul className="space-y-4 mb-11">
              {FEATURES.map(item => (
                <li key={item} className="flex items-start gap-3.5 font-body text-[13px] text-gray-500">
                  <span className="w-1 h-1 rounded-full bg-[#FF0000] shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.instagram.com/la_buchi_floreria/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] tracking-[0.2em] px-7 py-3.5 hover:bg-[#CC0000] transition-colors duration-300 cursor-pointer"
              >
                <IGIcon />
                Pedir en Instagram
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61556828050301"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 border border-gray-200 text-gray-500 font-body font-medium uppercase text-[10px] tracking-[0.2em] px-7 py-3.5 hover:border-[#FF0000] hover:text-[#FF0000] transition-colors duration-300 cursor-pointer"
              >
                <FBIcon />
                Facebook
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
