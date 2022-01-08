import { HomePage, products } from '/imports.js';
import { useCart } from '../../hooks/use-cart.js';


export default function Product({ product }) {

    const { id, title, description, image, price } = product;

    const { addToCart } = useCart();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex items-center justify-center">
                <div key={id} className={HomePage.card}>
                    <a>
                        <img src={image} alt='t-shirt'></img>
                    </a>

                    {/* Product Name, Description & Checkout Button */}
                </div>
                <div className='flex flex-col justify-between h-16 m-w-full'>
                    <h3 className={HomePage.metatitle}>{title}</h3>
                    <p>${price}</p>
                    <p className="mt-4 text-xl">{description}</p>
                    <button className={HomePage.button} onClick={() => {
                        addToCart({
                            id
                        })
                    }}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const product = products.find(({ id }) => id === params.productId)
    return {
        props: {
            product
        }
    }
}


export async function getStaticPaths() {
    const paths = products.map((products) => {
        return {
            params: {
                productId: products.id
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}