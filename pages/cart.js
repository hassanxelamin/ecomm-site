import Table from '../components/table/table.js';
import { useCart } from '../hooks/use-cart.js';
import { cartStyles } from '/imports.js';

export default function Home() {

    const { checkout } = useCart();


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className={cartStyles.main}>
                {/* Product Cards */}
                <div className={cartStyles.grid}>
                    <Table />
                    {/* Add To Cart Button */}
                    <p className='flex justify-center'>
                        <button className={cartStyles.button} onClick={() => {
                            checkout()
                        }}>
                            Check Out
                        </button>
                    </p>
                </div>
            </main>
        </div>
    )
}