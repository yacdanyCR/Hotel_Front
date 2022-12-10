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
                    <div className="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my htmlFortune to do. </div>
                </div>
            </div>
        </div>
    )
}

export default TabsComponent