import { motion } from 'framer-motion'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const up = (delay = 0) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-red-50/50 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-50/30 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FF0000] hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-20">

        {/* Fine badge */}
        <motion.div
          variants={up(0.1)} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2.5 mb-10 border border-[#FF0000]/20 text-[#FF0000] text-[10px] font-body font-semibold px-5 py-2 uppercase tracking-[0.3em]"
        >
          <span className="w-1 h-1 rounded-full bg-[#FF0000] animate-pulse" />
          Florería artesanal
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={up(0.22)} initial="hidden" animate="visible"
          className="font-display font-semibold text-gray-900 leading-[0.88] mb-5"
          style={{ fontSize: 'clamp(3.2rem, 10.5vw, 7.5rem)' }}
        >
          Cada ramo,
          <span className="block italic text-[#FF0000]">una declaración.</span>
        </motion.h1>

        {/* Thin divider */}
        <motion.div
          variants={up(0.34)} initial="hidden" animate="visible"
          className="w-14 h-px bg-[#FF0000] mx-auto mb-9"
        />

        {/* Subheading */}
        <motion.p
          variants={up(0.42)} initial="hidden" animate="visible"
          className="font-body text-gray-400 text-base sm:text-lg max-w-sm mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Composiciones florales artesanales para los momentos que merecen ser extraordinarios.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={up(0.54)} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => scrollTo('catalogo')}
            className="bg-[#FF0000] text-white font-display font-medium uppercase px-10 py-4 text-[11px] tracking-[0.2em] hover:bg-[#CC0000] transition-colors duration-300 shadow-lg shadow-red-200 cursor-pointer"
          >
            Ver Colección
          </button>
          <button
            onClick={() => scrollTo('personaliza')}
            className="border border-[#FF0000] text-[#FF0000] font-display font-medium uppercase px-10 py-4 text-[11px] tracking-[0.2em] hover:bg-red-50/70 transition-colors duration-300 cursor-pointer"
          >
            Personalizar Ramo
          </button>
        </motion.div>

        {/* Trust pillars */}
        <motion.div
          variants={up(0.7)} initial="hidden" animate="visible"
          className="flex flex-wrap justify-center gap-10 mt-16"
        >
          {[
            { label: 'Flores Frescas',    sub: '100% naturales' },
            { label: 'Empaque Especial',  sub: 'Incluido siempre' },
            { label: 'Diseño Artesanal',  sub: 'Hecho con amor' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="w-px h-3 bg-[#FF0000]/25 mx-auto mb-2.5" />
              <p className="font-body text-[10px] font-semibold text-gray-800 uppercase tracking-[0.18em]">{item.label}</p>
              <p className="font-body text-[10px] text-gray-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-9 border border-[#FF0000]/25 flex justify-center pt-2">
          <div className="w-px h-2.5 bg-[#FF0000]/35" />
        </div>
      </motion.div>
    </section>
  )
}
