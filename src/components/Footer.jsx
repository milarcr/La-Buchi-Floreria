const NAV = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Catálogo',    href: '#catalogo' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Personaliza', href: '#personaliza' },
  { label: 'Contacto',    href: '#contacto' },
]

const IGIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FBIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#FF0000] text-white">

      {/* Top band */}
      <div className="bg-[#CC0000] py-3.5 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/80 text-xs uppercase tracking-[0.2em] font-medium">
            Flores frescas disponibles todos los días
          </p>
          <a
            href="#catalogo"
            className="bg-white text-[#FF0000] font-body font-medium uppercase text-[10px] tracking-[0.2em] px-5 py-2 hover:bg-gray-100 transition-colors duration-200 shrink-0"
          >
            Ver Catálogo
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="py-14 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 bg-white/10 flex items-center justify-center shrink-0">
                <img src="/logo.jpg" alt="La Buchi Florería" className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display='none' }} />
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">La Buchi Florería</p>
                <p className="font-body text-white/50 text-[9px] uppercase tracking-[0.25em]">Flores para cada ocasión</p>
              </div>
            </div>
            <p className="font-body text-white/55 text-sm leading-relaxed max-w-[260px]">
              Los ramos más impactantes para los momentos que merecen ser recordados.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="https://www.instagram.com/la_buchi_floreria/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <IGIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556828050301" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <FBIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-white/40 text-[9px] uppercase tracking-[0.3em] mb-5">Secciones</p>
            <ul className="space-y-3">
              {NAV.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2.5">
                    <span className="w-px h-3 bg-white/30" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-body text-white/40 text-[9px] uppercase tracking-[0.3em] mb-5">Info</p>
            <ul className="space-y-3">
              {[
                'Flores frescas todos los días',
                'Pedidos por Instagram y Facebook',
                'Arreglos personalizados',
                'Pago seguro en línea',
              ].map(item => (
                <li key={item} className="font-body text-sm text-white/55 flex items-center gap-2.5">
                  <span className="w-px h-3 bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15 py-4 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-body text-white/40 text-xs">
            © {new Date().getFullYear()} La Buchi Florería. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/40 text-xs">
            Desarrollado por{' '}
            <a
              href="https://calleros.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline hover:text-white transition-colors font-medium"
            >
              calleros.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
