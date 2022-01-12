import { products } from '/imports.js';
import { useCart } from '../../hooks/use-cart.js';
import { productStyles } from '../../imports.js';


export default function Product({ product }) {

    const { id, title, description, image, price } = product;

    const { addToCart } = useCart();

    return (
        <div className={productStyles.containertwo}>
            <div key={id}>
                <a>
                    <img className={productStyles.image} src={image} alt='t-shirt'></img>
                </a>

                {/* Product Name, Description & Checkout Button */}
            </div>
            <div className='flex flex-col justify-between m-w-full'>
                <h3 className={productStyles.title}>{title}</h3>
                <p className="mt-4 text-xl w-[20rem] mb-[2rem]">{description}</p>
                <div className={productStyles.buttoncontainer}>
                    <button onClick={() => {
                        addToCart({
                            id
                        })
                    }} className={productStyles.button}>
                        Add To Cart - ${price}
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