import React, { useEffect, useState } from 'react'
import { GuestContext } from '../../Context/GhuestContext'
import { getBookings } from '../../services/bookingServices/bookingServices'
import { getAllGuest } from '../../services/guestServices/guestServices'
import AddGuestModalComponent from '../AddGuestModalComponent/AddGuestModalComponent'
import BookingTableComponent from '../BookinTableComponent/BookingTableComponent'
import TableComponent from '../TableComponent/TableComponent'
import './style.css'

export const TabsComponent = () => {
    const [guest, setGuest] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getAllGuest(setGuest);
        getBookings(setBookings);
    }, [])

    return (
        <GuestContext.Provider value={{ guest, setGuest, bookings, setBookings }}>
            <div className="wrapper">
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" name="css-tabs" id="tab-1" defaultChecked className="tab-switch" />
                        <label htmlFor="tab-1" className="tab-label">Guests</label>
                        <div className="tab-content">
                            <AddGuestModalComponent />
                            <TableComponent />
                        </div>
                    </div>
                    <div className="tab">
                        <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                        <label htmlFor="tab-2" className="tab-label">Bookings</label>
                        <div className="tab-content">
                            <BookingTableComponent />
                        </div>
                    </div>
                </div>
            </div>
        </GuestContext.Provider>
    )
}

export default TabsComponent