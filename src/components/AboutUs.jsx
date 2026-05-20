import { motion } from 'framer-motion'

const PILLARS = [
  { n: '5+',     label: 'Años creando' },
  { n: '1,200+', label: 'Composiciones' },
  { n: '100%',   label: 'Flores frescas' },
]

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px w-10 bg-[#FF0000]" />
          <span className="font-body text-[#FF0000] text-[10px] font-semibold uppercase tracking-[0.3em]">
            Quiénes somos
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Left red line */}
            <div className="absolute -left-5 top-10 bottom-10 w-px bg-[#FF0000]" />

            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/productos/image_2.jpg"
                alt="Ramo artesanal La Buchi Florería"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="absolute -bottom-8 left-5 right-5 bg-white border border-gray-100 shadow-xl py-5 px-4 flex justify-around"
            >
              {PILLARS.map(p => (
                <div key={p.label} className="text-center">
                  <p className="font-display font-semibold text-2xl text-[#FF0000] italic leading-none">{p.n}</p>
                  <p className="font-body text-[9px] text-gray-400 uppercase tracking-[0.15em] mt-1.5 leading-tight">{p.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 lg:mt-0 lg:pt-6"
          >
            <h2
              className="font-display font-semibold text-gray-900 leading-[0.95] mb-9"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              El arte de crear<br />
              <span className="italic text-[#FF0000]">lo que se siente.</span>
            </h2>

            <div className="space-y-5 font-body text-sm sm:text-[15px] text-gray-400 leading-[1.95]">
              <p>
                En La Buchi Florería, cada ramo nace de una visión: convertir flores en una
                experiencia que trasciende lo visual. No hacemos arreglos, creamos momentos
                que se recuerdan.
              </p>
              <p>
                Seleccionamos flores frescas de la más alta calidad para garantizar que cada
                composición llegue viva, vibrante y lista para dejar una impresión duradera.
                Desde una caja de rosas hasta un ramo monumental, cada detalle importa.
              </p>
              <p>
                Trabajamos para bodas, quinceañeras, aniversarios, cumpleaños y esos momentos
                que simplemente merecen algo extraordinario.
              </p>
            </div>

            <ul className="mt-9 space-y-3.5">
              {[
                'Flores importadas y de temporada, siempre frescas',
                'Composiciones personalizadas para cada ocasión',
                'Coordinación por Instagram y Facebook',
                'Empaque artesanal de regalo sin costo adicional',
              ].map(item => (
                <li key={item} className="flex items-start gap-3.5 font-body text-[13px] text-gray-500">
                  <span className="w-1 h-1 rounded-full bg-[#FF0000] shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#catalogo"
                className="bg-[#FF0000] text-white font-body font-medium uppercase text-[10px] px-8 py-3.5 tracking-[0.2em] hover:bg-[#CC0000] transition-colors duration-300"
              >
                Ver Catálogo
              </a>
              <a
                href="https://www.instagram.com/la_buchi_floreria/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#FF0000] text-[#FF0000] font-body font-medium uppercase text-[10px] px-8 py-3.5 tracking-[0.2em] hover:bg-red-50 transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
