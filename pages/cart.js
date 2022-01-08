import Table from '../components/table/table.js';
import { useCart } from '../hooks/use-cart.js';
import { Head, HomePage, products } from '/imports.js';

export default function Home() {

    const { checkout } = useCart();


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className={HomePage.main}>
                {/* Product Cards */}
                <div className={HomePage.grid}>
                    <Table />
                    {/* Add To Cart Button */}
                    <p className='flex justify-center'>
                        <button className={HomePage.button} onClick={() => {
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