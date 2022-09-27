import React from 'react';
import { useEffect } from 'react';
import './index.css';
import TableHeaderItem from '../TableHeaderItem';
import { TableProps } from './types';

const Table = ({ columns }: TableProps) => {
    useEffect(() => {
        // Pull In Data
    }, []);

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
    );
};

export default Table;
