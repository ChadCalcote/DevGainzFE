import React from 'react'
import { TableHeaderItemProps } from '../Table/types'

const TableHeaderItem = ({ item }: TableHeaderItemProps) => (
    <th>{item.heading}</th>
)

export default TableHeaderItem
