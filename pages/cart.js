import { useCart } from '../hooks/use-cart.js';
import { cartStyles, products } from '/imports.js';

export default function Home() {

    const { checkout, cartItems, updateItem, subtotal } = useCart();

    return (
        <div className="flex flex-col items-center justify-center h-screen pt-20 px-[40px]">
            <main className={cartStyles.main}>
                <div className='w-full'>
                    <ul>
                        {
                            cartItems.map(item => {
                                const product = products.find(({ id }) => id === item.id)

                                const Quantity = () => {
                                    function handleOnSubmit(e) {
                                        e.preventDefault();

                                        const { currentTarget } = e;
                                        const inputs = Array.from(currentTarget.elements)
                                        const quantity = inputs.find(input => input.name === 'quantity')?.value

                                        updateItem({
                                            id: item.id,
                                            quantity: quantity && parseInt(quantity)
                                        })
                                    }
                                    return (
                                        <form onSubmit={handleOnSubmit}>
                                            <input className={cartStyles.checkoutitem} type="number" name="quantity" min={0} defaultValue={item.quantity} />
                                            <button className='text-white ml-3'>Update</button>
                                        </form>
                                    )
                                }

                                return (
                                    <li className="flex justify-between items-center mb-7 text-white" key={item.id}>
                                        <div className='flex justify-between items-center'>
                                            <div className="pr-5">
                                                <img className={cartStyles.images} src={product.image} alt="" />
                                            </div>
                                            <div>
                                                <div className="pr-5">{product.title}</div>
                                                <div className="pr-5">${item.pricePerItem}</div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className='flex text-black'> <span className='text-white mr-2'>Quantity</span> <Quantity /></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* Product Cards */}

                    <div className={cartStyles.seperator}></div>

                    <div className="flex justify-between mb-10 text-white">
                        <div>Total (tax inc.)</div>
                        <div>${subtotal}</div>
                    </div>

                    <div className={cartStyles.grid}>
                        {/* Add To Cart Button */}
                        <p className='flex justify-center text-white'>
                            <button className={cartStyles.button} onClick={() => {
                                checkout()
                            }}>
                                Check Out
                            </button>
                        </p>
                    </div>

                </div>
            </main >
        </div >
    )
}