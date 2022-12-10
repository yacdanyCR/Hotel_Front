import React from 'react'
import './style.css'
import { AiFillDelete, AiOutlineForm } from "react-icons/ai";

export const TableComponent = () => {
    return (
        <>
            <table className='table_Data'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th colSpan={2}>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jack</td>
                        <td>Jack</td>
                        <td>Jack</td>
                        <td>Jack</td>
                        <td><AiOutlineForm size={20} color={'blue'} /></td>
                        <td><AiFillDelete color='red' size={20} /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableComponent