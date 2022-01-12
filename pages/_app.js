import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Nav from '../components/Nav/nav.js';
import { CartContext, useCartState } from '../hooks/use-cart.js';
import Footer from '../components/Footer/Footer.js';
function MyApp({ Component, pageProps }) {
  const cart = useCartState();

  return (
    <CartContext.Provider value={cart}>
      <div className='bg-main text-secondary min-w-screen h-full'>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default MyApp