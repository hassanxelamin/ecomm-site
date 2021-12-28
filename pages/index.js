import { Head, HomePage, Products } from '/imports.js';
import { initiateCheckout } from '../lib/payments.js'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={HomePage.main}>

        <h1 className={HomePage.title}>Space Jelly Shop</h1>

        <p className="mt-3 text-2xl">The best jellyfish swag on the block</p>

        <ul className={HomePage.grid}>
          {Products.map(Products => {
            const { id, title, description, image, price } = Products;
            return (
              <li key={id} className={HomePage.card}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt='t-shirt'></img>
                  <h3 className={HomePage.metatitle}>{title}</h3>
                  <p>${price}</p>
                  <p className="mt-4 text-xl">{description}</p>
                </a>
                <p>
                  <button className={HomePage.button} onClick={() => {
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1
                        }
                      ]
                    });
                  }}>
                    Buy Now
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
