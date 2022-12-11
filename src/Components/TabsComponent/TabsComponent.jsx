import React from 'react'
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
                        <TableComponent />
                    </div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                    <label htmlFor="tab-2" className="tab-label">Bookings</label>
                    <div className="tab-content"></div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
                    <label htmlFor="tab-3" className="tab-label">Add Guest</label>
                    <div className="tab-content"></div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
                    <label htmlFor="tab-3" className="tab-label">Add Guest</label>
                    <div className="tab-content"></div>
                </div>
            </div>
        </div>
    )
}

export default TabsComponent