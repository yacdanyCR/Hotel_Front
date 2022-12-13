import React, { useEffect, useState } from 'react'
import SearchComponent from '../Components/SearchComponent/SearchComponent';
import TabsComponent from '../Components/TabsComponent/TabsComponent'
import { GuestContext } from '../Context/GhuestContext';
import { getAllBookings } from '../services/bookingServices/bookingServices';
import { getAllGuest, searchGuest } from '../services/guestServices/guestServices';

export const DashboardPage = () => {
    const [guest, setGuest] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getAllGuest(setGuest);
        getAllBookings(setBookings);
    }, [])

    const handlehChange = (search) => {
        searchGuest(search, setGuest)
    }

    return (
        <GuestContext.Provider value={{ guest, setGuest, bookings, setBookings }}>
            <SearchComponent handlehChange={handlehChange} />
            <TabsComponent />
        </GuestContext.Provider>
    )
}

export default DashboardPage