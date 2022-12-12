import React from 'react'
import './style.css'
import { AiFillDelete, AiOutlineForm } from "react-icons/ai";
import { deleteGuest } from '../../services/userServices/userServices';

export const TableComponent = ({ data, setGuest }) => {
    return (
        <>
            <table className='table_Data'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.lastname}</td>
                                <td>{el.phone}</td>
                                <td>{el.country}</td>
                                <td><AiOutlineForm /></td>
                                <td onClick={() => deleteGuest(el.id, data, setGuest)}><AiFillDelete color='red' /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableComponent