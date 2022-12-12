import React, { useEffect, useState } from 'react'
import { GuestContext } from '../../Context/GhuestContext'
import { getAllGuest } from '../../services/guestServices/guestServices'
import AddGuestModalComponent from '../AddGuestModalComponent/AddGuestModalComponent'
import TableComponent from '../TableComponent/TableComponent'
import './style.css'

export const TabsComponent = () => {
    const [guest, setGuest] = useState([]);
    useEffect(() => {
        getAllGuest(setGuest);
        getAllGuest();
    }, [])

    return (
        <GuestContext.Provider value={{ guest, setGuest }}>
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
                            <TableComponent />
                        </div>
                    </div>
                </div>
            </div>
        </GuestContext.Provider>
    )
}

export default TabsComponent