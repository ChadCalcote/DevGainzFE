import React from 'react'
import { TableHeaderItemProps } from 'src/components/TableHeaderItem/types'

const TableHeaderItem = ({ item }: TableHeaderItemProps) => (
    <th>{item.heading}</th>
)

export default TableHeaderItem
