import React, { useEffect } from 'react'
import 'src/components/Table/index.css'
import TableHeaderItem from 'src/components/TableHeaderItem'
import { TableProps } from 'src/components/Table/types'

const Table = ({ columns }: TableProps) => {
    useEffect(() => {
        // Pull In Data
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((item, index) => (
                        <TableHeaderItem item={item} />
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
