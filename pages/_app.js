import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Nav from '../components/nav/nav.js';
import { CartContext, useCartState } from '../hooks/use-cart.js'

function MyApp({ Component, pageProps }) {
  const cart = useCartState();

  return (
    <CartContext.Provider value={cart}>
      <div className='bg-main text-secondary'>
        <Nav />
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
  )
}

export default MyApp