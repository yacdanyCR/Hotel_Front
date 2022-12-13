import React, { useContext } from 'react'
import './style.css'
import { AiFillDelete } from "react-icons/ai";
import { GuestContext } from '../../Context/GhuestContext';
import { deleteGuest } from '../../services/guestServices/guestServices';
import Moment from 'react-moment';
import ModalUpdate from '../ModalUpdate/ModalUpdate';

export const TableComponent = () => {
    const { guest, setGuest } = useContext(GuestContext);

    const handleDelete = async (guestId) => {
        const newData = guest.filter((el) => el.id !== guestId);
        setGuest(newData);
        deleteGuest(guestId);
    }

    return (
        <>
            <table className='table_Data'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Birthdate</th>
                        <th>Country</th>
                        <th colSpan={2}>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {guest.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.lastname}</td>
                                <td>{el.phone}</td>
                                <td><Moment format="MM/DD/YYYY">{el.birthdate}</Moment></td>
                                <td>{el.country}</td>
                                <td><ModalUpdate guest={el} /></td>
                                <td onClick={() => handleDelete(el.id)}><AiFillDelete color='red' size={25} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableComponent