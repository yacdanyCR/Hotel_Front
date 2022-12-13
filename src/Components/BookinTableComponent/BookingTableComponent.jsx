import React, { useContext } from 'react'
import Moment from 'react-moment';
import { GuestContext } from '../../Context/GhuestContext'

export const BookingTableComponent = () => {
    const { bookings, setBookings } = useContext(GuestContext);

    return (
        <>
            <table className='table_Data'>
                <thead>
                    <tr>
                        <th>Id Guest</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Payment</th>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default BookingTableComponent