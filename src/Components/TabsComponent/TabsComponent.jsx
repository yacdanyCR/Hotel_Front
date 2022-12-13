import React from 'react'
import AddGuestModalComponent from '../AddGuestModalComponent/AddGuestModalComponent'
import BookingTableComponent from '../BookinTableComponent/BookingTableComponent'
import TableComponent from '../TableComponent/TableComponent'
import './style.css'

export const TabsComponent = () => {
    return (

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
    )
}

export default TabsComponent