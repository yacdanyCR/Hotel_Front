import React, { useEffect, useState } from 'react'
import { getAllGuest } from '../../services/guestServices/guestServices'
import AddGuestModalComponent from '../AddGuestModalComponent/AddGuestModalComponent'
import TableComponent from '../TableComponent/TableComponent'
import './style.css'

export const TabsComponent = () => {
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        getAllGuest(setGuest);
    }, [])

    return (
        <div className="wrapper">
            <div className="tabs">
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-1" defaultChecked className="tab-switch" />
                    <label htmlFor="tab-1" className="tab-label">Guests</label>
                    <div className="tab-content">
                        <AddGuestModalComponent />
                        <TableComponent data={guest} setGuest={setGuest} />
                    </div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                    <label htmlFor="tab-2" className="tab-label">Bookings</label>
                    <div className="tab-content">
                        <TableComponent data={guest} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsComponent