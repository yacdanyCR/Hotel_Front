import React from 'react'
import './style.css'
import { AiFillDelete, AiOutlineForm } from "react-icons/ai";
import { deleteGuest } from '../../services/userServices/userServices';

export const TableComponent = ({ data, setGuest }) => {
    const handleDelete = async (guestId) => {
        const newData = data.filter((el) => el.id !== guestId);
        setGuest(newData);
        deleteGuest(guestId);
    }

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
                    {data.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.lastname}</td>
                                <td>{el.phone}</td>
                                <td>{el.country}</td>
                                <td><AiOutlineForm /></td>
                                <td onClick={() => handleDelete(el.id)}><AiFillDelete color='red' /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableComponent