import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Catalog       from './components/Catalog'
import Cart          from './components/Cart'
import Checkout      from './components/Checkout'
import AboutUs       from './components/AboutUs'
import CustomBouquet from './components/CustomBouquet'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  const [cartOpen,     setCartOpen]     = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar onCart={() => setCartOpen(true)} />

        <main>
          <Hero />
          <Catalog onCart={() => setCartOpen(true)} />
          <AboutUs />
          <CustomBouquet />
          <Contact />
        </main>

        <Footer />

        <Cart
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={() => setCheckoutOpen(true)}
        />
        <Checkout
          open={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
        />
      </div>
    </CartProvider>
  )
}
