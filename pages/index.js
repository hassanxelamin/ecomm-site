import useCart from '../hooks/use-cart.js';
import { Head, HomePage, products } from '/imports.js';

export default function Home() {

  const { subtotal, totalItems, addToCart, checkout } = useCart();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={HomePage.main}>

        <h1 className={HomePage.title}>Space Jelly Shop</h1>

        <p className="mt-3 text-2xl">The best jellyfish swag on the block</p>

        {/* Shopping Cart + Checkout Button*/}
        <p>
          <strong>Items:</strong> {totalItems}
          <br />
          <strong>Total Cost:</strong> ${subtotal}
          <br />
          <button className={HomePage.button} onClick={checkout}>Check Out</button>
        </p>


        {/* Product Cards */}
        <ul className={HomePage.grid}>
          {products.map(products => {
            const { id, title, description, image, price } = products;
            return (
              <li key={id} className={HomePage.card}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt='t-shirt'></img>
                  <h3 className={HomePage.metatitle}>{title}</h3>
                  <p>${price}</p>
                  <p className="mt-4 text-xl">{description}</p>
                </a>

                {/* Add To Cart Button */}
                <p className='flex justify-center'>
                  <button className={HomePage.button} onClick={() => {
                    addToCart({ id })
                  }}>
                    Add To Cart
                  </button>
                </p>

              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
