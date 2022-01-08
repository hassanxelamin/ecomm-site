import { React, useMemo } from "react"
import { useTable } from "react-table"
import { useCart } from '../../hooks/use-cart.js';
import { products } from '/imports.js';

const Table = () => {

    const { cartItems, updateItem } = useCart();

    const data = cartItems.map(item => {

        const Quantity = () => {

            function handleOnSubmit(e) {
                e.preventDefault();

                const { currentTarget } = e;
                const inputs = Array.from(currentTarget.elements);
                const quantity = inputs.find(input => input.name === 'quantity')?.value

                updateItem({
                    id: item.id,
                    quantity: quantity && parseInt(quantity)
                });
            }

            return (
                <form onSubmit={handleOnSubmit}>
                    <input type="number" name="quantity" min={0} defaultValue={item.quantity} />
                    <button>Update</button>
                </form>
            )
        }

        const product = products.find(({ id }) => id === item.id)
        return {
            ...item,
            quantity: <Quantity />,
            total: item.quantity * item.pricePerItem,
            title: product.title
        }
    })

    const columns = useMemo(
        () => [
            {
                Header: 'Product Name',
                accessor: 'title', // accessor is the "key" in the data
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Price Per Item',
                accessor: 'pricePerItem',
            },
            {
                Header: 'Item Total',
                accessor: 'total',
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>

            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>


            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>



        </table>
    )
}

export default Table;