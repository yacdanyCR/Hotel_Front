import React, { useContext } from 'react'
import Moment from 'react-moment';
import { AiFillDelete } from "react-icons/ai";
import { GuestContext } from '../../Context/GhuestContext'
import { deleteBookings } from '../../services/bookingServices/bookingServices';
import Swal from 'sweetalert2';

export const BookingTableComponent = () => {
    const { bookings, setBookings } = useContext(GuestContext);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const removeBooking = bookings.filter((el) => el.id_guest !== id);
                setBookings(removeBooking);
                deleteBookings(id);
            }
        })
    }

    return (
        <>
            <table className='table_Data'>
                <thead>
                    <tr>
                        <th>Id Guest</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Payment</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((el) => {
                        return (
                            <tr key={el.id_guest}>
                                <td>
                                    {el.id_guest}
                                </td>
                                <td>
                                    <Moment format="MM/DD/YYYY">{el.check_in}</Moment>
                                </td>
                                <td>
                                    <Moment format="MM/DD/YYYY">{el.check_out}</Moment>
                                </td>
                                <td>
                                    {el.payment}
                                </td>
                                <td>
                                    <AiFillDelete size={20} color={'red'} onClick={() => handleDelete(el.id_guest)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default BookingTableComponent