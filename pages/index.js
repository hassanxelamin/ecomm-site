import { useCart } from '../hooks/use-cart.js';
import { Head, HomePage, products } from '/imports.js';
import Link from 'next/link';

export default function Home() {

  const { addToCart } = useCart();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={HomePage.main}>
        <h1 className={HomePage.title}>Space Jelly Shop</h1>

        <p className="mt-3 text-2xl">The best jellyfish swag on the block</p>


        {/* Product Cards */}
        <ul className={HomePage.grid}>
          {products.map(products => {
            const { id, title, description, image, price } = products;
            return (
              <li key={id} className={HomePage.card}>
                <Link href={`products/${id}`}>
                  <a>
                    <img src={image} alt='t-shirt'></img>
                    <h3 className={HomePage.metatitle}>{title}</h3>
                    <p>${price}</p>
                    <p className="mt-4 text-xl">{description}</p>
                  </a>
                </Link>

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
