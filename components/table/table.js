import { React, useMemo } from "react"
import { useTable } from "react-table"

const Table = () => {

    const data = useMemo(
        () => [
            {
                col1: 'Shirt',
                col2: '1',
                col3: '$24',
                col4: '$24'
            },
            {
                col1: 'Socks',
                col2: '1',
                col3: '$24',
                col4: '$24'
            },
            {
                col1: 'Shoes',
                col2: '1',
                col3: '$24',
                col4: '$24'
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Product Name',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Quantity',
                accessor: 'col2',
            },
            {
                Header: 'Price Per Item',
                accessor: 'col3',
            },
            {
                Header: 'Item Total',
                accessor: 'col4',
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